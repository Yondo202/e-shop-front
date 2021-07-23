import React from 'react'
import Root from "@/core/Root";
import styled from 'styled-components';
import { RiDeleteBin5Line } from "react-icons/ri"
import { VscHeart } from "react-icons/vsc"
import { ButtonStyleOne } from "components/miscs/CustomStyle"

const cart = () => {
    return (
        <Root>
            <Container className="container">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="items">
                           <div className="title">Миний сагс</div>
                            <div className="products">
                                <div className="imgPar">
                                    <img src="http://192.168.88.232:1338/uploads/thumbnail_open_uri20210528_1381400_2kzizc_7cf1c030b9.jpg" alt="cart items" />
                                </div>
                                <div className="Contents">
                                    <div className="prodTitle">Нүүрний чийгшүүлэгч</div>
                                    <div className="description">ba babab ababab</div>
                                    <div className="price">
                                        <div className="mainPrice">16000 ₮</div>
                                        <div className="salePrice">5000 ₮</div>
                                    </div>
                                    <div className="buttonsPar">
                                        <div className="stock">Боломжит үлдэгдэл:10</div>
                                        <div className="AddSector">
                                            <div className="quantity minus">-</div>
                                            <div className="quantity">1</div>
                                            <div className="quantity add">+</div>
                                        </div>
                                        <div className="handleButtons">
                                            <div className="icons liked"><RiDeleteBin5Line /><span>Устгах</span></div>
                                            <div className="icons delete"><VscHeart /><span>Хадгалах</span></div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="items">
                            <div className="title">Захиалгын мэдээлэл</div>
                            <div className="priceInfo">
                                <div className="priceTitle">
                                    <span className="text">Төлөх дүн</span>
                                    <span className="price">5000 ₮</span>
                                </div>
                            </div>

                            <ButtonStyleOne className="myHandle">Худалдан авах</ButtonStyleOne>
                        </div>
                    </div>
                </div>
            </Container>
        </Root>
    )
}

export default cart


const Container = styled.div`
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
                    font-weight: 500;
                    font-size: 15px;
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

`