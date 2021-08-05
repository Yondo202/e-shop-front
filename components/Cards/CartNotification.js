import React from 'react';
import styled from 'styled-components';
import { IoIosCart } from "react-icons/io";
import Link from 'next/link';
import { NumberComma } from "components/miscs/NumberComma";
import minimize from "@/miscs/minimize";

const CartNotification = ({ cartAdd }) => {
    return (
        <Container style={cartAdd?.cond?{right:15,opacity:`1`}:{}}>
            <div className="contentParent">
                <div className="titles">
                    <div className="txt">Амжилттай</div>
                    <Link href="/cart">
                        <a className="see">Харах <IoIosCart /></a>
                    </Link>
                </div>
                <div className="content">
                    <img src={minimize(cartAdd?.data?.image?.length?cartAdd?.data?.image[0]:cartAdd?.data?.image, "thumbnail")} alt="helper" />
                    <div className="textParent">
                        <div className="smTitle">{cartAdd?.data?.name}</div>
                        <div className="price">{NumberComma(cartAdd?.data?.price)}</div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CartNotification

const Container = styled.div`
    transition:all 0.3s ease;
    position:fixed;
    bottom:150px;
    right:-100px;
    opacity:0;
    z-index:3;
    .contentParent{
        background-color:#fff;
        padding:15px 20px; 
        z-index:99;
        box-shadow:0 0 10px -5.5px;
        border-radius:6px;
        .titles{
            margin-bottom:12px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .txt{
                color:#666666;
            }
            .see{
                text-decoration:none;
                cursor:pointer;
                color:#222222;
                svg{
                    font-size:16px;
                }
            }
        }
        .content{
            display:flex;
            img{
                width:100px;
                height:auto;
            }
            .textParent{
                margin-left:8px;
                .smTitle{
                    color:#666666;
                    font-weight:500;
                    margin:10px 0px;
                    width: 100px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    line-height: normal;
                }
                .price{
                    font-size:16px;
                    color:#222222;
                }
            }
        }
    }
`
