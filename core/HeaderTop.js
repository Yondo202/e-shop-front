import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from "next/link";
import Axios from 'axios';
import SavedProducts from '@/components/product/SavedProducts';
import Highlighter from "react-highlight-words";
import HamburgerMenu from "react-hamburger-menu";
import {MainMenu} from "@/components/Mobile/MainMenu";
import { useRouter } from "next/router";
import { getCookie, removeCookie } from "@/miscs/useCookie";
import { VscHeart } from "react-icons/vsc"
import { FiUserCheck } from "react-icons/fi"
import { IoIosArrowForward } from 'react-icons/io';
import { FaPenNib } from 'react-icons/fa';
import { GiEntryDoor  } from 'react-icons/gi';
 
const MenuTop = ({ menu, logo, cartItems, config, saveProduct, setSavesCond }) => {
    const router = useRouter();
    const [ open, setOpen ] = useState(false);
    const [ Saved, setSaved ] = useState(false)
    const [ inp, setInp ] = useState('');
    const [ search, setSearch ] = useState([]);
    const [ showProfile, setShowProfile] = useState(false);
    const [ result, setResult ] = useState(false);
    const [ headClass, setHeadClass ] = useState(false);
    const [ userInfo, setUserInfo ] = useState({});

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.addEventListener("scroll", handleScroll);
    },[])

    useEffect(()=>{
        setUserInfo(getCookie(process.env.user));
    },[])

    const closeHandle = () => { setShowProfile(false); }
    const LogOutHandle = () =>{ 
        removeCookie(process.env.user);
        removeCookie('jwt');
        router.push('/login');
    }

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
                                            <span className="icon heart" />
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

                            {userInfo.id?
                                    <div onClick={()=>setSaved(true)} className="content heart">
                                        {saveProduct.length?<div className="cartCount">{saveProduct.length}</div>:null}
                                        <VscHeart />
                                    </div>
                                :<Link href="/login">
                                    <a className="content heart">
                                        {/* {cartItems.length?<div className="cartCount">{saveProduct.length}</div>:null} */}
                                        <VscHeart />
                                    </a>
                            </Link>}

                            <Link href="/cart">
                                <a className="content">
                                    {cartItems.length?<div className="cartCount">{cartItems.length}</div>:null}
                                    <span className="icon shop" />
                                    {/* <div className="smtitle">Сагс</div> */}
                                </a>
                            </Link>

                            {!userInfo.id?<Link href="/login">
                                <a className={`content`}>
                                    <span className="icon login" />
                                </a>
                            </Link>:<div onMouseEnter={() => { setShowProfile(true) }} onMouseLeave={() => { setShowProfile(false); }} className={`content Active`}>
                                    <FiUserCheck />
                                    {showProfile && <div onMouseEnter={() => { setShowProfile(true);}} onMouseLeave={() => { setShowProfile(false); }} className="ghost">
                                                        <div className="HoverContent">
                                            <div className="UserInfo"> <img src="/img/user1.svg" alt="user.svg" /> <span className="name">{userInfo?.username}</span> </div>
                                            <Link onClick={closeHandle} href="/">
                                                <a className="resPass">
                                                    <div className="initList"><div className="svg"><FaPenNib /></div><span>Хэрэглэгчийн мэдээлэл</span></div>
                                                    <div className="svgOther"><IoIosArrowForward /> </div>
                                                </a>
                                            </Link>

                                            <div className="resPass" onClick={LogOutHandle}>
                                                <div className="initList"><div className="svg"><GiEntryDoor /></div>  <span>Гарах</span></div>
                                                <div className="svgOther"><IoIosArrowForward /> </div>
                                            </div>

                                        </div>
                                    </div>}
                            </div>}

                        </>}
                    </div>
                </div>
            </div>
            {Saved?<SavedProducts userInfo={userInfo} setSaved={setSaved} />:null}
            {config.width<768?<MainMenu open={open} menu={menu} setOpen={setOpen} />:null}
        </Container>
    )
}

export default MenuTop

const cardAnimate = keyframes`
    0% { transform:translateY(30px);opacity:0;  }
    100% { transform:translateY(0px);opacity:1;  }
`

const Container = styled.div`
    background-color: ${props=>props.theme.mainColor};
    border-bottom: 1px solid rgba(0,0,0,0.057);
    display: flex;
    align-items: center;
    height: 80px;
    .ScrollParent{
        transition:all 0.3s ease;
        background-color: ${props=>props.theme.mainColor};
        width:100%;
        .ContentPar{
            display:flex;
            align-items: center;
            justify-content: space-between;
            .menus{
                display:flex;
                align-items:center;
                gap:27px;
                .content{
                    transition:all 0.2s ease;
                    position:relative;
                    text-decoration:none;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content:center;
                    cursor: pointer;
                    background:inheret;
                    border-radius:50%;
                    padding:6px;
                    &:hover{
                        background: rgba(255,255,255,0.2);
                    }
                    .cartCount{
                        width: 20px;
                        height: 20px;
                        color: rgb(255, 255, 255);
                        font-size: 11.7px;
                        font-weight: 600;
                        font-family: arial, sans-serif;
                        text-align: center;
                        line-height: 18px;
                        border-radius: 50%;
                        background-color: #f56c73;
                        transition: all 300ms ease-in-out 0s;
                        position: absolute;
                        right: -7px;
                        top: -4px;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }
                    &:hover{
                        .smtitle{
                            color:rgba(255,255,255,0.7);
                        }
                    }
                    .smtitle{
                        // color: rgb(102, 102, 102);
                        color: #fff;
                        font-size: 13px;
                        font-weight: 300;
                        margin-top: 2px;
                    }
                    .addName{
                        max-width:60px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .icon{
                        width: 23px;
                        height: 23px;
                        background-size: 23px;
                        background-position: center center;
                        background-repeat: no-repeat;
                        transition: all 200ms ease-in-out 0s;
                    }
                    .login{
                        background-image: url('/img/profile.svg');
                    }
                    .shop{
                        background-image: url('/img/shop2.svg');
                    }
                    svg{
                        font-size:23px;
                        color:#fff;
                    }
                    .ghost{
                        display:none;
                    }
                }
                .heart{
                    svg{
                        font-size:26px;
                        color:#fff;
                    }
                    .cartCount{
                        right: -5px;
                        top: -3px;
                    }
                }
                .Active{
                    position:relative;
                    border:1px solid rgba(255,255,255,0.7);
                    svg{
                        font-size:20px;
                    }
                    .ghost{
                        display:block;
                        animation-name: ${cardAnimate};
                        animation-duration:0.5s;
                        color:rgba(${(props) => props.theme.textColor},1);
                        position:absolute;
                        top:5px;
                        right:0;
                        transition:all 0.3s ease;
                        z-index:3;
                        .HoverContent{
                          display:flex;
                          align-items:center;
                          flex-direction:column;
                          justify-content:center;
                          margin-top:30px;
                          padding:0px 15px;
                          background-color:#fff;
                          max-height: calc(100vh - 60px);
                          box-shadow:1px 1px 20px -9px;
                          width:300px;
                          border-radius:7px;
                          .UserInfo{
                            display:flex;
                            align-items:center;
                            width:100%;
                            padding:20px 5px;
                            border-bottom:1px solid rgba(0,0,0,0.2);
                            img{
                              width:25px;
                              margin-right:15px;
                            }
                            .name{
                              font-size:16px;
                              font-weight:500;
                            }
                          }
                          .resPass{
                            text-decoration:none;
                            color:rgba(${(props) => props.theme.textColor},1);
                            cursor:pointer;
                            border-radius:4px;
                            width:100%;
                            padding: 9px 5px;
                            margin: 9px 0px;
                            display:flex;
                            align-items:center;
                            justify-content:space-between;
                            .initList{
                              display:flex;
                              align-items:center;
                              span{
                                font-size:15px;
                                font-weight:500;
                                color:rgba(${(props) => props.theme.textColor},1);
                              }
                              .svg{
                                margin-right:14px;
                                background-color:#e4e6eb;
                                padding:8px 8px;
                                border-radius:50%;
                                svg{
                                  font-size:17px;
                                  color:#000;
                                }
                              }
                            }
                            .svgOther{
                              svg{
                                color:rgba(0,18,41,.7);
                                font-size:18px;
                              }
                            }
                            &:hover{
                              background-color:#e4e6eb;
                            }
                        }
                    }}
                }
            }
            .searchBar{
                position: relative;
                width: 32%;
                .resultPar{
                    max-height:50vh;
                    overflow-y:scroll;
                    z-index:3;
                    position:absolute;
                    width:100%;
                    background-color:#ffffff;
                    left:0;
                    botton:0;
                    padding:10px 10px;
                    box-shadow:0px 0px 20px -10px;
                    border-radius:6px;
                    &::-webkit-scrollbar {
                        width: 0px !important;
                    }
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
                            background-color: yellow;
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
                    border-radius: 50px;
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
