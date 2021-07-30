import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from "next/link";
import Axios from 'axios';
import Highlighter from "react-highlight-words";
import HamburgerMenu from "react-hamburger-menu"
import {MainMenu} from "@/components/Mobile/MainMenu"
import { useRouter } from "next/router"
import { route } from 'next/dist/next-server/server/router';


const MenuTop = ({ menu, logo, cartItems, config }) => {
    const router = useRouter();
    const [ open, setOpen ] = useState(false);
    const [ inp, setInp ] = useState('');
    const [ search, setSearch ] = useState([]);
    const [ result, setResult ] = useState(false);
    const [ headClass, setHeadClass ] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
    },[])

    const handleScroll = () => {
        if (window.pageYOffset > 1) {
            setHeadClass(true)
        }else {
            setHeadClass(false);
        }
    }

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
        router.push(`/search/${inp}`);
    }

    return (
        <Container >
            <div className={`ScrollParent ${headClass?`ToBottom`:``}`}>
                <div className={`ContentPar container-xxl`}> 
                    <Link href="/">
                        <a  className="logoPar">
                            <img src={process.env.serverUrl+logo?.url} alt="e-shop.png" />
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
                                if(el._highlightResult?.bogino_tailbar?.matchedWords.length){
                                    return(
                                        <Link key={ind} href={`/product/${el.objectID}`}>
                                            <div key={ind} className="items">{el.name} ( <Highlighter
                                                highlightClassName="YourHighlightClass"
                                                searchWords={[inp]}
                                                autoEscape={false}
                                                textToHighlight={el.bogino_tailbar}
                                            /> )</div>
                                        </Link>
                                            
                                    )
                                }else{
                                    return(
                                        <Link key={ind} href={`/product/${el.objectID}`}>
                                            <div key={ind} className="items"><Highlighter
                                                highlightClassName="YourHighlightClass"
                                                searchWords={[inp]}
                                                autoEscape={false}
                                                textToHighlight={el.name}
                                            /></div>
                                        </Link>
                                    )
                                }
                                
                            })}
                        </div>:null}
                    </div>
                    <div className="menus">

                        {config.width<768?(
                                <>
                                    <Link href="/cart">
                                        <a className="content">
                                            {cartItems.length?<div className="cartCount">{cartItems.length}</div>:null}
                                            <span className="icon shop" />
                                            {/* <div className="smtitle">Сагс</div> */}
                                        </a>
                                    </Link>
                                    <div className="content Mobile">
                                            {/* <span className="icon login" /> */}
                                            <HamburgerMenu
                                                isOpen={open}
                                                menuClicked={()=>setOpen(prev=>!prev)}
                                                width={20}
                                                height={16}
                                                strokeWidth={1.3}
                                                rotate={0}
                                                color='black'
                                                borderRadius={0}
                                                animationDuration={0.5}
                                            />
                                        {/* <div className="smtitle">Сагс</div> */}
                                    </div>
                                </>
                            ):<>
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
                        </>}

                            
                            
                        {/* {menu.map((el,ind)=>{
                            return(
                                <div key={ind} className="content">
                                    <div>{el.name}</div>
                                </div>
                            )
                        })} */}
                    </div>
                </div>
            </div>
            {config.width<768?<MainMenu open={open} menu={menu} setOpen={setOpen} />:null}
        </Container>
    )
}

export default MenuTop

const Container = styled.div`
    background-color: #ffffff;
    border-bottom: 1px solid rgba(0,0,0,0.057);
    display: flex;
    align-items: center;
    height: 80px;
    .ScrollParent{
        transition:all 0.3s ease;
        background-color:#ffffff;
        width:100%;
        .ContentPar{
            display:flex;
            align-items: center;
            justify-content: space-between;
            .menus{
                display:flex;
                align-items:center;
                gap: 27px;
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
                        color:${props=>props.theme.textColor2};
                        cursor:pointer;
                        &:hover{
                            background-color:#f1f3f5;
                        }
                        .YourHighlightClass {
                            padding: 0em;
                            background-color: #ffffff;
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
                    border-radius: 4px;
                    border:1px solid rgba(0,0,0,0.3);
                    background-color:${props=>props.theme.bodyColor};
                    color: rgb(102, 102, 102);
                    &:focus{
                        background-color:#ffffff;
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
    }
    .ToBottom{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        z-index:3;
        padding:9px 0px;
        box-shadow:0px 2px 12px -7px;
    }
    @media (max-width:768px){
        height: 60px;
        .ScrollParent{
            .ContentPar{
                .menus{
                    justify-content:space-between;
                    gap:30px;
                    // .Mobile{
                    //     position:relative;
                    //     z-index:100;
                    // }
                }
                .logoPar{
                    width: 5rem;
                    img{
                        width: 100%;
                        height: auto;
                    }
                }
                .searchBar{
                    display:none;
                }
            }
        }
    }
`
