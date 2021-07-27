import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Ctx from "@/miscs/ContextMenuProvider";
import Link from "next/link";
import Axios from 'axios';

const MenuTop = ({ menu, logo }) => {
    const { cartItems } = useContext(Ctx);
    const [ inp, setInp ] = useState('');
    const [ search, setSearch ] = useState([]);
    const [ result, setResult ] = useState(false);

    const FetchSearch = async (e) =>{
        setInp(e.target.value);
        if(e.target.value.length > 1){
            await Axios.get(`${process.env.serverUrl}/search/${e.target.value}`).then(res=>{
                if(res.data.length){
                    setSearch(res.data);
                    setResult(true);
                }else{
                    setResult(false);
                }
            })
        }else{
            setResult(false);
        }
    }
    // console.log(`search`, search);

    const submitHandler = async (e) =>{
        e.preventDefault();
        await Axios.get(`${process.env.serverUrl}/products?name_contains=${inp}`).then(res=>{
           console.log(`res`, res)
        })
    }
  

    return (
        <Container >
            <div className="ContentPar container-xl"> 
                <Link href="/">
                    <a  className="logoPar">
                     <img src="https://atimetoshop.com/wp-content/uploads/2019/06/A-time-to-shop-Logo.png" alt="e-shop.png" />
                    </a>
                </Link>
                <div className="searchBar">
                    <div className="icon">
                        <img  src="/img/search.png" alt="seacth"/>
                    </div>
                    <form onSubmit={submitHandler}>
                        <input value={inp} onChange={FetchSearch} type="text" className="myInp" placeholder="Хайх ..." />
                    </form>

                    {result?<div className="resultPar">
                        {search.map((el,ind)=>{
                            return(
                                <div key={ind} className="items">{el.name}</div>
                            )
                        })}
                    </div>:null}
                </div>
                <div className="menus">

                        <Link href="/cart">
                            <a className="content">
                                {cartItems.length?<div className="cartCount">{cartItems.length}</div>:null}
                                <span className="icon shop" />
                                <div className="smtitle">Сагс</div>
                            </a>
                        </Link>

                        <Link href="/login">
                            <a className="content">
                                <span className="icon login" />
                                <div className="smtitle">Нэвтрэх</div>
                            </a>
                        </Link>
                        
                    {/* {menu.map((el,ind)=>{
                        return(
                            <div key={ind} className="content">
                                <div>{el.name}</div>
                            </div>
                        )
                    })} */}
                </div>
            </div>
        </Container>
    )
}

export default MenuTop

const Container = styled.div`
    background-color: #ffffff;
    border-bottom: 1px solid rgba(0,0,0,0.057);
    /* padding: 10px 0px; */
    display: flex;
    align-items: center;
    height: 80px;
    .searchBar{
        position: relative;
        width: 40%;
        .resultPar{
            max-height:50vh;
            overflow-y:scroll;
            z-index:3;
            position:absolute;
            width:100%;
            background-color:#ffffff;
            &::-webkit-scrollbar {
                width: 0px !important;
            }
            left:0;
            botton:0;
            padding:10px 0px;
            box-shadow:0px 0px 20px -12px;
            .items{
                font-size:13px;
                padding:10px 7px;
                font-weight:500;
                color:${props=>props.theme.textColor};
                cursor:pointer;
                &:hover{
                    background-color:#f1f3f5;
                }
            }

        }
        .icon{
            opacity: 0.7;
            padding: 4px 4px;
            width: 25px;
            height: 25px;
            top: 4px;
            right: 8px;
            bottom:0;
            position: absolute;
        }
        .myInp{
            width: 100%;
            padding:8px 10px;
            border-radius: 35px;
            border:1px solid rgba(0,0,0,0.3);
            // background-color: rgb(243, 243, 243);
            background-color:#ffffff;
            color: rgb(102, 102, 102);
        }
    }
    .ContentPar{    
        display:flex;
        align-items: center;
        justify-content: space-between;
        .menus{
            display:flex;
            gap: 26px;
            .content{
                position:relative;
                text-decoration:none;
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                .cartCount{
                    width: 18px;
                    height: 18px;
                    color: rgb(255, 255, 255);
                    font-size: 11px;
                    font-weight: 600;
                    font-family: arial, sans-serif;
                    text-align: center;
                    line-height: 18px;
                    border-radius: 50%;
                    background-color: #f56c73;
                    transition: all 300ms ease-in-out 0s;
                    position: absolute;
                    right: -8px;
                    top: -5px;
                }
                &:hover{
                    .smtitle{
                        color:${props=>props.theme.mainColor};
                    }
                }
                .smtitle{
                    color: rgb(102, 102, 102);
                    font-size: 13px;
                    font-weight: 400;
                    margin-top: 2px;
                }
                .icon{
                    width: 25px;
                    height: 25px;
                    background-size: 25px;
                    background-position: center center;
                    background-repeat: no-repeat;
                    transition: all 200ms ease-in-out 0s;
                }
                .login{
                    background-image: url('/img/man2.svg');
                }
                .shop{
                    background-image: url('/img/shop2.svg');
                }

            }
        }

        .logoPar{
            width: 7rem;
            img{
                width: 100%;
                height: auto;
            }
        }
    }
`
