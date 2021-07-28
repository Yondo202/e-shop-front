import React from "react"
import Header from '@/core/Header'
import Footer from '@/core/Footer';
import MenuContext  from '@/miscs/ContextMenuProvider';
import { useContext, useState } from "react";
import styled from "styled-components";
import PreSeo from "@/components/miscs/PreSeo";
import { IoIosArrowUp } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";
import HeaderTop from "@/core/HeaderTop"
import { Alert } from "@/components/miscs/CustomComp"
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function Root(props) {
    const { headerMenu, logo, menuTop, footerMenu, alert } = useContext(MenuContext);
    const [ showBtn, setShowBtn ] = useState(false);

    React.useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
    },[])

    // scroll.scrollTo(0);

    const handleScroll = () => {
        if (window.pageYOffset > 600.88) {
            setShowBtn(true);
        }else {
            setShowBtn(false);
        }
    }

    const clickHandle = ()=>{
         scroll.scrollTo(0);
    }

    return (
        <Body>
            <PreSeo seo={props.seo}/>
            <HeaderTop menu={menuTop || []} logo={logo}/>
            <Header menu={headerMenu || []}/>
                {props.children}
            <MessengerCustomerChat pageId="104975931248820" appId="1410175519375837" />
            <Footer logo={logo} footerMenu={footerMenu} />


            {/* {showBtn&&<div  onClick={clickHandle} className="toTop">
               <IoIosArrowUp className="one" />
               <IoIosArrowUp className="two" />
            </div>}  */}

            <Alert alert={alert} />
        </Body>
    )
}

const Body = styled.div `
    letter-spacing: 0.2px !important;
    position: relative;
    /* background-color: #f6f8fa; */
    background-color: ${props=>props.theme.bodyColor};
    font-size: ${(props) => props.theme.fontSize};
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: ${props => props.theme.fontWeightNormal};
    color:  ${props=> props.theme.textColor};
    span,h3,div,p,li,a{
        font-weight: inherit;
        color:inherit;
    }
    input{
        outline:none;
    }
    img{
        max-width:100%;
    }
    .rec-carousel-item{
        display:flex;
        align-items:center;
    }
    .rec-pagination{
        button{

        }
        .rec-dot_active{
            box-shadow:0 0 1px 3px ${({theme})=>theme.mainColor};
            background:white;
        }
    }
    .rec-arrow{
        background-color: rgba(255,255,255,0.6);
        outline:none;
        &:hover{
            background:${({theme})=>theme.mainColor} !important;
        }
    }

    &::-webkit-scrollbar {
        width: 4px !important;
        color:#aaa;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #aaa !important;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: #777777;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #aaa;
    }
 
    .toTop{
        overflow:hidden;
        transition:all 0.3s ease;
        cursor: pointer;
        background-color:${(props)=>props.theme.mainColorZox};
        border-radius: 50%;
        color: #000;
        font-size: 25px;
        opacity: 1;
        position: fixed;
        bottom: 100px;
        right: 30px;
        text-align: center;
        width: 44px;
        height: 44px;
        z-index:11001;
        svg{
            transition:all 0.3s ease;
            margin-top: 0px;
        }
        .two{
            margin-top: 20px;
            font-size: 30px;
            transform:translateY(45px);
        }
        &:hover{
            box-shadow:1px 1px 8px -3px;
            svg{
              transform:translateY(-50px);
            }
        }
    }
`