import React, { useState } from 'react'
import styled, { keyframes } from "styled-components"
import Root from "@/core/Root"
import Login from "@/components/users/Login"
import SignUp from "@/components/users/SignUp"
import Router from "next/router"
import { getCookie } from "@/miscs/useCookie";

const login = () => {
    const [ showLogin, setShowLogin ] = useState(true);
    const [ signup, setSignUp ] = useState(getCookie(process.env.user));
    const [ listen, setListen ] = useState(false);

    React.useEffect(() => {
        if(listen){
            if(signup.id){
                    Router.push('/');
                    setListen(false);
            }else{
                const interval = setInterval(() => setSignUp(getCookie(process.env.user)), 300);
                return () => clearInterval(interval)
            }
        }
    });

    return (
        <Root>
            <Container>
                <div className="ContentSector">
                    <div className="header">
                        <div onClick={()=>setShowLogin(true)} className={`item ${showLogin&&`Active`}`}>Нэвтрэх</div>
                        <div onClick={()=>setShowLogin(false)}  className={`item ${!showLogin&&`Active`}`}>Бүртгүүлэх</div>
                    </div>
                    {showLogin?<Login setListen={setListen} />:<SignUp setListen={setListen} setShowLogin={setShowLogin} />}
                </div>
            </Container>
        </Root>
    )
}

export default login

const Animate = keyframes`
    0%{ opacity:0 }
    100%{ opacity:1 }
`

const Animate2 = keyframes`
    0%{ opacity:0; transform:translateY(10px); }
    100%{ opacity:1; transform:translateY(0px); }
`

const Container = styled.div`
    height: 90vh;
    background: url("/img/background.jpg") no-repeat;
    background-size: 100% 100%;
    padding-top: 25px;
    margin-top: 0px;
    position:relative;
    display: flex;
    justify-content: center;
    .ContentSector{
        // border-top:3.5px solid ${props=>props.theme.mainColor};
        animation: ${Animate2} 0.6s ease;
        box-shadow:1px 1px 25px -17px;
        transition: all 0.2s ease;
        background-color: #ffffff;
        height: 39em;
        width: 37em;
        border-radius: 10px;
        padding: 3em 4em;
        letter-spacing: 0px;
        .InputParent{
            position: relative;
            animation: ${Animate} 0.4s ease;
            /* display: flex; */
            .buttonPar{
                margin-top:20px;
                .ErrTxt{
                    animation: ${Animate} 0.4s ease;
                    margin-bottom: 15px;
                    color: red;
                }
                button{
                    letter-spacing: 0.3px;
                    padding: 10px 0px;
                    width: 100%;
                    border: none;
                    outline: none;
                    background-color: ${props=>props.theme.buttonColor};
                    color:white;
                    // border-radius: 5px;
                    font-weight: 500;
                }
            }
            .inputItem{
                margin-bottom: 30px;
                border-bottom: 2px solid #d9d9d9;
                .title{
                    letter-spacing: 0.2px;
                    font-size: 13px;
                    color: #333;
                    line-height: 1.5;
                    padding-left: 7px;
                    margin-bottom:2px;
                }
                .titleV2{
                    display:flex;
                    justify-content:space-between;
                    .forget{
                        &:hover{
                            opacity:1;
                        }
                        opacity:0.8;
                        cursor:pointer;
                        font-weight:500;
                    }
                }
                .inputPar{
                    color:#adadad;
                    position: relative;
                    .line{
                        transition: all 0.3s ease;
                        height: 2px;
                        width: 0%;
                        background-color: #7f7f7f;
                        position: absolute;
                        bottom: -2px;
                        left: 0;
                    }
                    svg{
                        transition: all 0.2s ease;
                        // color:#adadad;
                        color:#666666;
                        position: absolute;
                        top: 33.5%;
                        left: 10px;
                        font-size: 19px;
                    }
                    .A2{
                        font-size: 22px;
                    }
                    input{
                        font-weight: 500;
                        font-size: 15px;
                        outline: none;
                        border:none;
                        width: 100%;
                        padding: 0 7px 0 43px;
                        color: #333;
                        line-height: 1.2;
                        height: 55px;
                        background: 0 0;
                        &::placeholder {
                            font-weight: 400;
                            color:#adadad;
                            opacity: 1; /* Firefox */
                        }
                        &:focus ~ .line {
                            width: 100%;
                        }
                        &:focus ~ svg {
                            color: ${props=>props.theme.mainColor};
                        }
                    }
                    .pass{
                        padding-right: 30px;
                    }
                    .mySvg{
                        position: absolute;
                        right: 0;
                        bottom: 6px;
                        height: 30px;
                        width: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        svg{
                            cursor: pointer;
                            font-size: 17px;
                            color: rgba(0,0,0,0.7);
                            &:hover{
                                color: rgba(0,0,0,1);
                            }
                        }
                    }
                }
            }
        }
        .header{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 50px;
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 30px;
            .item{
                transition: all 0.3s ease;
                color: #BABABA;
                cursor: pointer;
                padding-bottom: 6px;
                border-bottom: 2px solid #ffffff;
                &:hover{
                    color:#222222;
                }
            }
            .Active{
                color:#000000;
                border-bottom: 2px solid ${props=>props.theme.mainColor};
            }
        }
    }
    
`
