import React, { useEffect, useState } from 'react'
import { BiLock } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { LoadingStyle } from '../miscs/CustomComp'
import { ButtonStyleTwo, ButtonStyleOne } from "@/miscs/CustomStyle"
import styled from 'styled-components'
import Router from "next/router"
import axios from "axios"
import { setCookie } from "@/miscs/useCookie";
import { VscMail } from "react-icons/vsc"
import { SiFacebook } from "react-icons/si"


const SignUp = ({ setListen }) => {
    const [ showPass, setShowPass ] = useState(false);
    const [ errText, setErrText ] = useState('Мэдээллээ гүйцэд оруулна уу');
    const [ showErr, setShowErr ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');

    useEffect(()=>{
        setListen(false);
    },[])


    const ClickHandle = async (e) =>{
            e.preventDefault();
            let i = email.indexOf("@");
            const loginInfo = {
                username: email.slice(0,i),
                email: email,
                password: password,
            }

            if(password===''){
                setErrText('Нууц үгээ оруулна уу');
                setShowErr(true);
                setTimeout(() => {  setShowErr(false); }, 6000)
            }else if(email===''){
                setErrText('Имэйл хаягаа оруулна уу');
                setShowErr(true);
                setTimeout(() => {  setShowErr(false); }, 6000)
            }else{
                setLoading(true);
                await axios.post(`${process.env.serverUrl}/auth/local/register`, loginInfo )
                .then(res=>{
                    if(res.data){
                        setCookie("jwt", res.data?.jwt);
                        setCookie(process.env.user, res.data?.user);
                        setLoading(false);
                        Router.push(Router.asPath);
                    }
                }).catch(err=>{
                    if(err){
                        setLoading(false);
                        setErrText('Алдаа гарлаа');
                        setShowErr(true);
                        setTimeout(() => {  setShowErr(false); }, 6000)
                    }
                })
                
                setTimeout(() => {
                    setLoading(false);
                }, 5000)
            }
    }

    const RegisterGmailHandle = () =>{
        // window.location.href = `https://716a633fbd14.ngrok.io/connect/google`
        // const newWindow = window.open(`https://716a633fbd14.ngrok.io/connect/google`, '_blank', 'noopener,noreferrer')
        // if (newWindow) newWindow.opener = null
        setListen(true);
        var myWindow = window.open(`https://8e6697b66944.ngrok.io/connect/google`, "myWindow", "resizable=yes,top=160,left=700,width=500,height=600");
        myWindow.focus();
    }

    const RegisterFacebookHandle = () =>{
        setListen(true);
        var myWindow = window.open(`https://8e6697b66944.ngrok.io/connect/facebook`, "myWindow", "resizable=yes,top=160,left=700,width=500,height=600");
        myWindow.focus();
    }

    return (
        <form onSubmit={ClickHandle}>
            <InputParent className="InputParent">
                <div className="another">
                    <div className="items">

                        <div style={{marginBottom:20}} className="inputItem">
                            {/* <div className="title">Email</div> */}
                            <div className="inputPar">
                                <input value={email} autoFocus onChange={e=>setEmail(e.target.value)} type="email" placeholder="имэйл хаягаа оруулна уу" />
                                <AiOutlineMail />
                                <div className="line" />
                            </div>
                        </div>

                        <div style={{marginBottom:20}} className="inputItem">
                            {/* <div className="title">Нууц үг</div> */}
                            <div className="inputPar">
                                <input value={password}
                                 type={showPass?`text`:`password`}
                                 className="pass"
                                 onChange={e=>setPassword(e.target.value)} placeholder="Нууц үгээ оруулна уу" />
                                <BiLock className="A2"  />
                                <div className="line" />
                                <div className="mySvg">{showPass?<BsEye onClick={()=>setShowPass(false)} />:<BsEyeSlash onClick={()=>setShowPass(true)} />}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="buttonPar">
                    {showErr&&<div className="ErrTxt">{errText}</div>}
                    <button type="submit">Үргэлжлүүлэх</button>
                </div>

                <div className="or"><span>Эсвэл</span></div>
                {/* <ButtonStyleTwo onClick={RegisterGmailHandle} type="button" className="custom"><FaGooglePlusG /> Gmail - ээр бүртгүүлэх</ButtonStyleTwo> */}

                <SocialButtons >
                    <ButtonStyleTwo onClick={RegisterGmailHandle} type="button" className="custom"><VscMail /> Gmail - ээр бүртгүүлэх</ButtonStyleTwo>
                    <ButtonStyleOne facebook={true} onClick={RegisterFacebookHandle} type="button" className="custom"><SiFacebook /> facebook - ээр бүртгүүлэх</ButtonStyleOne>
                </SocialButtons>

                {loading?<LoadingStyle> <img src="/img/giff.gif" alt="eshop-giff" /></LoadingStyle>:<></>}
            </InputParent>
        </form>
        
    )
}

export default SignUp;

const SocialButtons = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
`

export const InputParent = styled.div`
    .custom{
        font-size:14px;
        box-shadow:0px 0px 0px 1px ${props=>props.theme.buttonColor} inset;
    }
    .or{
        position:relative;
        margin:14px 0px;
        display:flex;
        justify-content:center;
        &::after{
            content:"";
            position:absolute;
            left:0;
            top:50%;
            right:0;
            height:2px;
            width:100%;
            // color:rgba(0,0,0,0.5);
            color:red;
            z-index:99;
        }
    }
    .another{
        display: flex;
        gap: 30px;
        .items{
            width: 100%;
        }
    }
`