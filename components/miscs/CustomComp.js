import React from 'react'
import styled, { keyframes } from "styled-components"
import { BsCheckCircle } from "react-icons/bs"

export const LoadingFull = () => {
    return (
        <LoadingStyle2>
            <div>
                <img src="/img/giff2.gif" alt="gif" alt="eshop" />
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
            <img src="/img/giff.gif" alt="eshop" />
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
        left:12px;
        &:hover{
            left:7px;
        }
    }
    .prev{
        right:12px;
        &:hover{
            right:7px;
        }
    }
    @media (max-width:500px){
        .buttons{
            padding:5px;
            svg{
                font-size:22px;
            }
        }
    }
`



export const SkeletonHome = () =>{
    return(
        <SkeletonStyle><div className="item" ><div className="child" /></div> </SkeletonStyle>
    )
}

const animeSkeleton = keyframes`
    0%{ left:-100%; }
    100%{ left:100% }
`

export const SkeletonStyle = styled.div`
    max-height: 41em;
    width:auto;
    height: 41rem;
    margin:10px 0px 30px 0px; 
    display:flex;
    align-items:center;
    justify-content:center;
    gap:18px;
    background-color:#fff;
    .item{
        overflow: hidden;
        height:100%;
        width:100%;
        position:relative;
        .child{
            position:absolute;
            top:0;
            width:50%;
            height:100%;
            background-image: linear-gradient(to right, rgba(60,60,60,0), rgba(120,120,120,0.2), rgba(60,60,60,0));
            animation: ${animeSkeleton} 1s linear infinite;
        }
    }
`

const animeSkeletonCard = keyframes`
    0%{ left:-80%; }
    100%{ left:100% }
`

export const SkeletonCard = () =>{
    return(
        <SkeletonCards><div className="item" ><div className="child" /></div> </SkeletonCards>
    )
}

export const SkeletonCards = styled.div`
    // margin:10px 0px 30px 0px; 
    display:flex;
    align-items:center;
    justify-content:center;
    gap:18px;
    background-color:#fff;
    height: 16.5rem;
    width:100%;
    border:1px solid rgba(0,0,0, 0.157);
    border-radius: 4px;
    box-shadow:1px 1px 10px -8px;
    .item{
        overflow: hidden;
        height:100%;
        width:100%;
        position:relative;
        .child{
            position:absolute;
            top:0;
            width:50%;
            height:100%;
            background-image: linear-gradient(to right, rgba(60,60,60,0), rgba(120,120,120,0.2), rgba(60,60,60,0));
            animation: ${animeSkeletonCard} 0.7s linear infinite;
        }
    }
`