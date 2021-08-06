import React,{ useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Products from "components/product/Products"
import { VscChromeClose } from "react-icons/vsc"

 const ModalCard = ({ data, setShowModal }) => {
    const [ cName, setCname ] = useState(false);
    const reff = useRef();
    useEffect(()=>{
        setCname(false);
    },[data])
    const CloseHandle = (e) =>{
        if(e.target===reff.current){
            setCname(true);
            setTimeout(() => {
                setShowModal({cond:false});
            }, 280)
        }
    }
    const handleClicks = () =>{
        setCname(true);
        setTimeout(() => {
            setShowModal({cond:false});
        }, 280)
    }

    return (
        <>
            {data.cond?<Container ref={reff} onClick={CloseHandle}>
                <div className={`container contentParent ${cName?`Animate`:``}`}>
                    <Products data={data?.data} />
                    <div onClick={handleClicks} className="ClosePar"><VscChromeClose /></div>
                </div>
            </Container>:null}
        </>
    )
}
export default ModalCard;

const animate = keyframes`
    0%{ transform:scale(0.7); opacity:0; }
    100%{ transform:scale(1); opacity:1; }
`
const animate2 = keyframes`
    0%{ transform:scale(1); opacity:1; }
    100%{ transform:scale(0.7); opacity:0; }
`

const Container = styled.div`
    position:fixed;
    z-index:99;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.7);
    display:flex;
    justify-content:center;
    align-items:center;
    .contentParent{
        animation:${animate} 0.3s ease;
        padding: 4.3rem 4.2rem 2rem;
        position:relative;
        .ClosePar{
            cursor:pointer;
            position:absolute;
            right:2.5rem;
            top:3.2rem;
            background-color:#fff;
            color:#333;
            padding:8px;
            border-radius:50%;
            svg{
                font-size:17px;
            }
            &:hover{
                color:#000;
                background-color:rgba(200,200,200);
            }
        }
    }
    .Animate{
        animation:${animate2} 0.3s ease;
    }
`