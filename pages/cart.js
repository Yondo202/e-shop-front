import React, { useEffect, useState, useContext } from 'react'
import Ctx from "@/miscs/ContextMenuProvider";
import { Loading } from "@/miscs/CustomComp"
import Link from 'next/link';
import Root from "@/core/Root";
import styled from 'styled-components';
import { RiDeleteBin5Line } from "react-icons/ri"
import { VscHeart } from "react-icons/vsc"
import { ButtonStyleOne } from "components/miscs/CustomStyle"
import axios from 'axios';
import { NumberComma } from "components/miscs/NumberComma"

const cart = () => {
    const [ loading, setLoading ] = useState(true);
    const { cartItems, DeleteHandle, listenCart } = useContext(Ctx);
    const [ totalCost, setTotalCost ] = useState(0);
    const [ cartData, setCartData ] = useState([]);

    useEffect(()=>{
        setLoading(true);
        setTotalCost(0);
        setCartData([])
        FetchData();
    },[cartItems])

    const FetchData = async () =>{
        cartItems.forEach(item=>{
            getProduct(item);
        })
    }

    const getProduct = async (item) =>{
        await axios.get(`${process.env.serverUrl}/products/${item.id}`).then(res=>{
            res.data.count = item.count
            setCartData(prev=>[ ...prev, res.data ])
            setTotalCost(prev=>prev+(res.data.price*item.count))
        })
        setLoading(false);
    }

    const MinusAddHandle = (data,add) =>{
        if(add){
            listenCart(data,1);
        }else{
            if(data.count>1){
                listenCart(data,-1);
            }
        }
    }

    return (
        <Root>
            <Container className="container">
                {loading&&cartItems.length!==0? <Loading />:(
                    <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="items">
                           <div className="title">Миний сагс</div>
                            {cartData.map((data,ind)=>{
                                return(
                                    <div key={ind} className="products">
                                        <div className="imgPar">
                                            <img src={process.env.serverUrl + data.image[0]?.url} alt="cart items" />
                                        </div>
                                        <div className="Contents">
                                            <Link onClick={()=>console.log('baba')} href={`/product/${data.id}`}><a className="prodTitle"> {data?.name} </a></Link>
                                            <div className="description">{data?.bogino_tailbar}</div>
                                            <div className="price">
                                                <div className="mainPrice">{NumberComma(data?.price)}</div>
                                                <div className="salePrice">{NumberComma(data?.sale_price)}</div>
                                            </div>
                                            <div className="buttonsPar">
                                                <div className="stock">Боломжит үлдэгдэл: {data.stock}</div>
                                                <div className="AddSector">
                                                    <div onClick={()=>MinusAddHandle(data,false)} className="quantity minus">-</div>
                                                    <div className="quantity">{data.count}</div>
                                                    <div onClick={()=>MinusAddHandle(data,true)} className="quantity add">+</div>
                                                </div>
                                                <div className="handleButtons">
                                                    {/* <div className="icons delete"><VscHeart /><span>Хадгалах</span></div> */}
                                                    <div className="icons delete"></div>
                                                    <div onClick={()=>DeleteHandle(data)} className="icons liked"><RiDeleteBin5Line /><span>Устгах</span></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className="col-md-4 col-12">
                        <div className="items">
                            <div className="title">Захиалгын мэдээлэл</div>
                            <div className="priceInfo">
                                <div className="priceTitle">
                                    <span className="text">Төлөх дүн</span>
                                    <span className="price">{NumberComma(totalCost)}</span>
                                </div>
                            </div>

                            <ButtonStyleOne className="myHandle">Худалдан авах</ButtonStyleOne>
                        </div>
                    </div>
                </div>
                )}
                
            </Container>

        </Root>
    )
}

export default cart

const Container = styled.div`
    position:relative;
    min-height:50rem;
    padding-top:30px;
    padding-bottom:30px;
    
    .items{
        box-shadow:0px 0px 20px -16px;
        .title{
            background-color:#ffffff;
            color: #141516;
            border-radius: 4px;
            font-weight: 500;
            font-size: 1.03rem;
            padding: 20px 23px 18.5px;
            border-bottom: 1px solid #d6d6d6;
            width: 100%;
        }
        .myHandle{
            margin:20px 0px;
            width:100%;
            height:100%;
            padding: 15px 15px;
            font-size:14px;
        }
        .priceInfo{
            background-color:#ffffff;
            padding: 23px 23px;
            .priceTitle{
                width:100%;
                display:flex;
                justify-content:space-between;
                font-size:19px;
                font-weight:500;
                .text{
                    font-weight:400;
                }
            }
        }
        .products{
            background-color:#ffffff;
            display:flex;
            padding: 23px 23px;
            border-bottom:1px solid rgba(0,0,0,0.2);
            border-bottom-style:dashed;
            &:last-child{
                border-bottom:none;
            }
            .Contents{
                width:100%;
                padding-left:20px;
                .buttonsPar{
                    width:100%;
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    .stock{
                        color:#606060;
                    }
                    .handleButtons{
                        display:flex;
                        gap:25px;
                        .icons{
                            display:flex;
                            align-items:center;
                            gap:5px;
                            cursor:pointer;
                            color:#666666;
                            svg{
                                font-size:19px;
                            }
                            &:hover{
                                color:${props=>props.theme.textColor};
                            }
                        }
                    }
                    .AddSector{
                        color:${props=>props.theme.textColor2};
                        margin-right: 12px;
                        flex:0 0 auto;
                        display:flex;
                        .quantity{
                            font-size:14px;
                            font-weight:500;
                            width: 30px;
                            height: 28px;
                            border:1px solid rgba(0,0,0,.2);
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            &:first-child{
                                border-right:none;
                            }
                            &:last-child{
                                border-left:none;
                            }
                        }
                        .minus{
                            font-size:18px;
                            border-radius:4px 0px 0px 4px;
                            cursor:pointer;
                        }
                        .add{
                            font-size:18px;
                            border-radius:0px 4px 4px 0px;
                            cursor:pointer;
                        }
                    }
                }
                .prodTitle{
                    text-decoration:none;
                    font-weight: 500;
                    font-size: 15px;
                    &:hover{
                        color:${props=>props.theme.mainColor};
                    }
                }
                .description{
                    color:#606060;
                    margin-bottom:12px;
                }
                .price{
                    margin-bottom:20px;
                    display:flex;
                    align-items:center;
                    gap:15px;
                    .mainPrice{
                        font-size: 16px;
                        font-weight: 500;
                    }
                    .salePrice{
                        color: rgb(119, 119, 119);
                        font-weight: 400;
                        text-decoration: line-through;
                        font-size: ${props=>props.theme.fontSize};
                    }
                    .saleProcent{

                    }
                }
            }
            .imgPar{
                min-width:100px;
                width:100px;
                height:100px;
                img{
                    width:auto;
                    height:auto;
                    max-width: 100%;
                    max-height: 100%;
                }
            }
        }
    }
    @media (max-width:768px){
        .items{
            .products{
                .imgPar{
                    min-width:70px;
                    width:70px;
                }
                .Contents{
                    padding-left: 15px;
                    .buttonsPar{
                        .stock{
                            display:none;
                        }
                    }
                }
            }
        }
    }
`