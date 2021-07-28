import React from 'react'
import styled from "styled-components"
import { BsCheckCircle } from "react-icons/bs"

export const LoadingFull = () => {
    return (
        <LoadingStyle2>
            <div>
                <img src="/img/giff2.gif" alt="gif" />
            </div>
        </LoadingStyle2>
    )
}

const LoadingStyle2 = styled.div`
    position:fixed;
    z-index:1000;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    background-color:rgba(255,255,255,0.6);
    display:flex;
    align-items:center;
    justify-content:center;
    img{
        margin-top:-200px;
        width:120px;
        height:auto;
    }
`

export const Alert = ({alert}) => {
    return (
        <AlertStyle style={alert.cond
        ?{right:`0%`, borderBottom:`2px solid ${alert.color}`}
        :{right:`-100%`}}
        className="Alert">
            <BsCheckCircle color={alert.color} />
            <div className="text">{alert.text}</div>
        </AlertStyle>
    )
}


const AlertStyle = styled.div`
    transition:all 0.8s ease;
    position:fixed;
    top:100px;
    right:0%;
    background-color:#fff;
    box-shadow:1px 1px 20px -8px;
    display:flex;
    align-items:center;
    gap:16px;
    padding:16px 18px;
    width:280px;
    border-radius:4px;
    border-bottom:2px solid ${props=>props.theme.mainColor2};
    svg{
        font-size:22px;
    }
    .text{
        font-size:16px;
    }
`


export const Loading =_=> {
    return (
        <LoadingStyle>
            <img src="/img/giff.gif" />
            <div />
        </LoadingStyle>
    )
    
}

 export const LoadingStyle = styled.div`
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background-color:rgba(255,255,255, 0.5);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    z-index:999;
    img{
        width:100px;
        height:auto;
        transform:scale(0.8);
    }
`

import { VscArrowRight, VscArrowLeft } from "react-icons/vsc"

export const CustomArrow = ({ sliderRef }) => {
    const gotoNext = () => {
        sliderRef.current.slickNext();
    }
    const prev = () => {
        sliderRef.current.slickPrev();
    }
    return (
        <Arrow>
            <div onClick={gotoNext} className="buttons prev">
                <VscArrowRight />
            </div>
            <div onClick={prev} className="buttons next">
                <VscArrowLeft />
            </div>
        </Arrow>
    )
}

const Arrow = styled.div`
    .buttons{
        transition:all 0.3s ease;
        position:absolute;
        display:flex;
        align-items:center;
        justify-content:center;
        top:40%;
        border-radius:50%;
        padding:8px;
        background-color:#ffffff;
        box-shadow:0px 0px 14px -6px;
        z-index:1;
        svg{
            font-size:25px;
        }
        cursor:pointer;
        &:hover{
            background-color:#e4e6eb;
        }
    }
    .next{
        left:10px;
        &:hover{
            left:5px;
        }
    }
    .prev{
        right:19px;
        &:hover{
            right:14px;
        }
    }
`

