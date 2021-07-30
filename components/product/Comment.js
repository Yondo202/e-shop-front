import React, { useState } from 'react'
import styled from 'styled-components'
import { InputStyle } from "@/miscs/CustomStyle"
import { GrSend } from "react-icons/gr"
import { LoadingStyle } from '../miscs/CustomComp'

const Comment = () => {
    const [ showErr, setShowErr ] = useState(`0`);
    const [ loading, setLoading ] = useState(false);

    const ClickHandle = (e) =>{
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
        
    }
    return (
        <Container>
            <form onSubmit={ClickHandle}>
                <InputStyle >
                    <div className="label">Утасны дугаар</div>
                    <input className="getInp" name="phone" type="number" required />
                </InputStyle>

                <InputStyle >
                    <div className="label">Таны нэр</div>
                    <input className="getInp" name="name" type="text"  />
                </InputStyle>

                <InputStyle >
                    <div className="label">Таны санал, хүсэлт</div>
                    <textarea className="getInp" name="description"  />
                </InputStyle>

               <div className="buttonPar">
                    <div style={{transform:`scale(${showErr})`, opacity:showErr}} className="errText">Мэдээллээ гүйцэд оруулна уу</div>
                    <button className="button">Илгээх <GrSend /></button>
               </div>
            </form>

            {loading?<LoadingStyle> <img src="/img/giff.gif" alt="eshop" /></LoadingStyle>:null}

            {/* <div style={alertShow.cond?{right:`0%`, borderBottom:`2px solid ${alertShow.color}`}:{right:`-100%`}} className="Alert">
                <IoCheckmarkCircleOutline color={alertShow.color} />
                <div className="text">{alertShow.text}</div>
            </div> */}

        </Container>
    )
}

export default Comment


const Container = styled.div`
    width:100%;
    position:relative;
    .Loading{
        position:absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        background-color:rgba(255,255,255, 0.5);
        display:flex;
        align-items:center;
        justify-content:center;
        img{
            margin-top:-3rem;
            transform:scale(0.8);
        }
    }
    .buttonPar{
        margin-top:30px;
        display:flex;
        justify-content:space-between;
        .errText{
            background-color: #f6c343;
            transition:all 0.4s ease;
            border-radius:5px;
            font-size:15px !important;
            font-weight:400;
            color:black !important;
            line-height:34px;
            padding:0px 20px;
        }
        .button{
            color:white;
            border-style:none;
            background-color:${props=>props.theme.buttonColor};
            padding:5px 35px;
            font-size:15px;
            border-radius:5px;
            letter-spacing:0.5px;
            border:1px solid #fff;
            svg{
                font-size:18px;
                margin-left:10px;
                path{
                    stroke: rgba(255,255,255,0.9);
                }
            }
        }
    }
    @media (max-width:768px){
        width:100%;
        .buttonPar{
            margin-top:10px;
            flex-direction:column;
            .errText{
                margin-bottom:10px;
            }
        }
    }
`
