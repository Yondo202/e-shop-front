import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Ctx from "@/miscs/ContextMenuProvider"
import { NumberComma } from "components/miscs/NumberComma"
import { ButtonStyleOne, ButtonStyleTwo } from "components/miscs/CustomStyle"
import Magnifier from "react-magnifier";

const Products = ({ data }) => {
    const { listenCart } = useContext(Ctx);
    const [ addCount, setAddCount ] = useState(1);

    const AddCartHandle =_=>{
        listenCart(data, addCount);
    }

    return (
        <Container className="row">
            <div className="col-md-6">
                <div className="item imageParent">
                    <div className="Images">
                        {/* <img src={process.env.serverUrl + data.image[0]?.url} /> */}
                        <Magnifier
                            src={process.env.serverUrl + data.image[0]?.url}
                            zoomFactor={0.7}
                            mgWidth={250}
                            mgHeight={250}
                            //  width={500}
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="item infoParent">
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
            </div>
        </Container>
    )
}

export default Products

const Container = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #ffffff;
    // .item{
    //     height: 25rem;
    // }
    .imageParent{
        width: 80%;
        border:1px solid rgba(0,0,0,0.1);
        .Images{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: none;
            border: none;
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
`
