import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Ctx from "@/miscs/ContextMenuProvider";
import { NumberComma } from "components/miscs/NumberComma";
import { ButtonStyleOne, ButtonStyleTwo } from "components/miscs/CustomStyle";
import Magnifier from "react-magnifier";
import Information from "@/components/product/Information";
import minimize from "@/miscs/minimize"

const Products = ({ data }) => {
    const { listenCart } = useContext(Ctx);
    const [ addCount, setAddCount ] = useState(1);
    const [ images, setImages ] = useState({});

    useEffect(()=>{
        if(data.image.length!==0){
            setImages(data.image[0]);
        }
    },[data])
 
    const AddCartHandle =_=>{
        listenCart(data, addCount);
    }
    
    return (
        <Container className="row">
            <div className="col-md-6">
                <div className="imageParent">
                    <div className="smImages">
                        <div className="absolutePar">
                            {data.image.map((el,ind)=>{
                                return(
                                    <div onClick={()=>setImages(el)} key={ind} className="imgPar">
                                        <img src={minimize(el, "thumbnail")} alt="e-shop" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="Images">
                        {/* <img src={process.env.serverUrl + data.image[0]?.url} /> */}
                        <Magnifier
                            src={process.env.serverUrl + images?.url}
                            zoomFactor={0.7}
                            mgWidth={250}
                            mgHeight={250}
                            //  width={500}
                        />
                    </div>

                </div>
            </div>
            <div className="col-md-6">
                <div>
                    <div className="infoParent">
                        <div className="topTitle">
                            <div className="titlemain">
                                <span className="title">{data?.name}</span>
                                <span>{data?.bogino_tailbar}</span>
                            </div>
                        </div>
                        <div className="Price">
                            <div className="priceSector">
                                <div className="smTitle">Худалдан авах үнэ</div>
                                <div className="prices">{NumberComma(data?.price)}</div>
                            </div>
                            
                            <div className="priceSector">
                                <div className="smTitle">{data?.sale_price?`Үндсэн үнэ`:``}</div>
                                <div className="prices A2">{NumberComma(data?.sale_price)}</div>
                            </div>
                        </div>
                        <div className="buttonsPar">
                            <div className="AddSector">
                                <div onClick={()=>setAddCount(prev=> prev>1?prev-1:prev)} className="quantity minus">-</div>
                                <div className="quantity">{addCount}</div>
                                <div onClick={()=>setAddCount(prev=>prev+1)} className="quantity add">+</div>
                            </div>

                            <ButtonStyleTwo onClick={AddCartHandle}>Сагсанд нэмэх</ButtonStyleTwo>
                            <ButtonStyleOne >Худалдан авах</ButtonStyleOne>
                        </div>
                    </div>
                    <Information data={data} />
                </div>
                
            </div>
        </Container>
    )
}

export default Products

const Container = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #ffffff;
    margin-bottom:40px;
    .imageParent{
        position:sticky;
        top:100px;
        width: 100%;
        display:flex;
        justify-content:space-between;
        padding-right:18px;
        .smImages{
            width:18%;
            height:26rem;
            padding:10px 0px;
            overflow-y:scroll;
            padding:10px 10px;
            &::-webkit-scrollbar {
                width: 0px !important;
            }
            .absolutePar{
                width:100%;
                display:flex;
                flex-direction:column;
                gap:20px;
                .imgPar{
                    cursor:pointer;
                    width:100%;
                    border:1px solid rgba(0,0,0,0.2);
                    img{
                        width:100%;
                        height:auto;
                    }
                }
            }
        }
        .Images{
            width: 78%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: none;
            border:1px solid rgba(0,0,0,0.1);
            .magnifier{
                width:100%;
            }
            img{
                width: 100%;
                height: 100%;
                // display: block;
                // object-fit: cover;
            }
        }
        
    }
    .infoParent{
        min-height:35em;
        .buttonsPar{
            padding:25px 0px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .AddSector{
                color:${props=>props.theme.textColor2};
                margin-right: 12px;
                flex:0 0 auto;
                display:flex;
                .quantity{
                    font-size:17px;
                    font-weight:600;
                    width: 40px;
                    height: 42px;
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
                    border-radius:4px 0px 0px 4px;
                    cursor:pointer;
                }
                .add{
                    border-radius:0px 4px 4px 0px;
                    cursor:pointer;
                }
            }
        }
        .Price{
            display: flex;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            padding: 20px 0px;
            justify-content: space-between;
            align-items: center;
            .priceSector{
                display: flex;
                flex-direction: column;
                .smTitle{
                    /* font-size: 13px; */
                    margin-bottom:8px;
                }
                .prices{
                    font-size: 23px;
                    font-weight: 500;
                }
                .A2{
                    text-decoration: line-through;
                    color: rgba(0, 0, 0, 0.4);
                    font-weight:500;
                }
            }
        }
        .topTitle{
            padding: 0px 0px 20px 0px;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            .titlemain{
                display: flex;
                flex-direction: column;
                font-size: 17px;
                color: rgb(60,60,60);
                .title{
                    font-size: 22px;
                    font-weight: 500;
                }
            }
        }
    }
    @media (max-width:768px){
        .imageParent{
            padding-right:0px;
            margin-bottom:25px;
            .smImages{
                height: 14rem;
            }
        }
        .infoParent{
            min-height:24em;
            .buttonsPar{
                align-items:start;
                flex-direction:column;
                gap:20px;
                .AddSector{
                    .quantity{
                        font-size:15px;
                        font-weight:500;
                        width: 30px;
                        height: 32px;
                    }
                }
            }
        }
    }
`
