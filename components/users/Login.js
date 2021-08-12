import React, { useState, useEffect } from 'react'
import { BiLock } from "react-icons/bi"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { LoadingStyle } from '../miscs/CustomComp'
import { ButtonStyleTwo, ButtonStyleOne } from "@/miscs/CustomStyle"
import { FaRegUser } from "react-icons/fa"
import { VscMail } from "react-icons/vsc"
import { SiFacebook } from "react-icons/si"
import { InputParent } from "./SignUp"
import Router from "next/router"
import axios from "axios"
import { setCookie } from "@/miscs/useCookie";
import styled from 'styled-components'

const login = ({setListen}) => {
    const [ showPass, setShowPass ] = useState(false);
    const [ errText, setErrText ] = useState('Мэдээллээ гүйцэд оруулна уу');
    const [ showErr, setShowErr ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    useEffect(()=>{
        setListen(false);
    },[])

    const ClickHandle = async (e) =>{
        e.preventDefault();
            const loginInfo = {
                identifier: username,
                password: password,
            }
            if(username===''){
                setErrText('Имэйл хаягаа оруулна уу');
                setShowErr(true);
                setTimeout(() => {  setShowErr(false); }, 5000)
            }else if(password===''){
                setErrText('Нууц үгээ оруулна уу');
                setShowErr(true);
                setTimeout(() => {  setShowErr(false); }, 5000)
            }else{
                setLoading(true);
                await axios.post(`${process.env.serverUrl}/auth/local`, loginInfo ).then(res=>{
                    if(res.data){
                        setCookie("jwt", res.data?.jwt);
                        setCookie(process.env.user, res.data?.user);
                        setLoading(false);
                        Router.push("/");
                    }
                }).catch(err=>{
                    if(err){
                        setLoading(false);
                        setErrText('Нууц үг болон нэвтрэх нэрээ шалгана уу');
                        setShowErr(true);
                        setTimeout(() => {  setShowErr(false); }, 6000);
                    }
                })
                setTimeout(() => {
                    setLoading(false);
                }, 5000)
            }
    }

    const RegisterGmailHandle = () =>{
        setListen(true);
        var myWindow = window.open(`${process.env.serverUrl}/connect/google`, "myWindow", "resizable=yes,top=160,left=700,width=500,height=600");
        myWindow.focus();
    }

    const RegisterFacebookHandle = () =>{
        setListen(true);
        var myWindow = window.open(`https://fdc011f73568.ngrok.io/connect/facebook`, "myWindow", "resizable=yes,top=160,left=700,width=500,height=600");
        myWindow.focus();
    }

    return (
        <form onSubmit={ClickHandle}>
            <InputParent className="InputParent">
                <div className="inputItem">
                    {/* <div className="title">Нэвтрэх нэр</div> */}
                    <div className="inputPar">
                        <input value={username} autoFocus onChange={e=>setUsername(e.target.value)} type="email" placeholder="E-мэйл хаягаараа нэвтэрнэ үү" />
                        <FaRegUser />
                        <div className="line" />
                    </div>
                </div>

                <div className="inputItem">
                    <div className="title titleV2">
                        {/* <span>Нууц үг</span> */}
                        <div />
                        <span className="forget">Нууц үг мартсан</span>
                    </div>
                    <div className="inputPar">
                        <input value={password} className="pass" onChange={e=>setPassword(e.target.value)}
                         type={showPass?`text`:`password`}
                         placeholder="Нууц үгээ оруулна уу" />
                        <BiLock className="A2"  />
                        <div className="line" />
                        <div className="mySvg">{showPass?<BsEye onClick={()=>setShowPass(false)} />:<BsEyeSlash onClick={()=>setShowPass(true)} />}</div>
                    </div>
                </div>
                
                <div className="buttonPar">
                    {showErr&&<div className="ErrTxt">{errText}</div>}
                    <button type="submit">Үргэлжлүүлэх</button>
                </div>

                <div className="or"><span>Эсвэл</span></div>
                <SocialButtons >
                    <ButtonStyleTwo onClick={RegisterGmailHandle} type="button" className="custom"><VscMail /> Gmail - ээр нэвтрэх</ButtonStyleTwo>
                    <ButtonStyleOne facebook={true} onClick={RegisterFacebookHandle} type="button" className="custom"><SiFacebook /> facebook - ээр нэвтрэх</ButtonStyleOne>
                </SocialButtons>
                
                {loading?<LoadingStyle> <img src="/img/giff.gif" alt="eshop-giff" /></LoadingStyle>:<></>}
            </InputParent>
        </form>
        
    )
}

export default login;

const SocialButtons = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
`