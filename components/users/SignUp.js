import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa"
import { BiLock } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import { CgNametag } from "react-icons/cg"
import { FaGooglePlusG } from "react-icons/fa"
import { RiRegisteredLine } from "react-icons/ri"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { LoadingStyle } from '../miscs/CustomComp'
import styled from 'styled-components'
import { ButtonStyleTwo } from "@/miscs/CustomStyle"

const SignUp = ({}) => {
    const [ showPass, setShowPass ] = useState(false);
    const [ errText, setErrText ] = useState('Мэдээллээ гүйцэд оруулна уу');
    const [ showErr, setShowErr ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');


    const ClickHandle = async (e) =>{
            e.preventDefault();
            const loginInfo = {
                username: username,
                email: email,
                password: password,
            }

            // if(username===''){
            //     setErrText('Нэрээ оруулна уу');
            //     setShowErr(true);
            //     setTimeout(() => {  setShowErr(false); }, 6000)
            // }else if(password===''){
            //     setErrText('Нууц үгээ оруулна уу');
            //     setShowErr(true);
            //     setTimeout(() => {  setShowErr(false); }, 6000)
            // }else if(email===''){
            //     setErrText('Имэйл хаягаа оруулна уу');
            //     setShowErr(true);
            //     setTimeout(() => {  setShowErr(false); }, 6000)
            // }else if(companyName===''){
            //     setErrText('Байгууллагын нэрээ оруулна уу');
            //     setShowErr(true);
            //     setTimeout(() => {  setShowErr(false); }, 6000)
            // }else if(companyRegister==='' || companyRegister.length!==7){
            //     setErrText('Байгууллагын регистрээ шалгана уу');
            //     setShowErr(true);
            //     setTimeout(() => {  setShowErr(false); }, 6000)
            // }else{
            //     setLoading(true);
            //     await axios.post(`${process.env.serverUrl}/auth/local/register`, loginInfo )
            //     .then(res=>{
            //         // if(res.data.user.admin_confirmed){
            //         //     setCookie(null, 'jwt', res.data.jwt,{ maxAge: 30 * 24 * 60 * 60, path:"/" });
            //         //     setCookie(null, 'username', res.data.user.username, { maxAge: 30 * 24 * 60 * 60, path:"/" });
            //         //     setCookie(null, 'id', res.data.user.id, { maxAge: 30 * 24 * 60 * 60, path:"/" });
            //         //     setCookie(null, 'email', res.data.user.email, { maxAge: 30 * 24 * 60 * 60, path:"/" });
            //         //     setCookie(null, 'role', res.data.user.role.type, { maxAge: 30 * 24 * 60 * 60, path:"/" });
            //         //     Router.push('/');
            //         // }else{
            //             alertFunc('green', "Амжилттай зөвшөөрөл хүлээнүү", true);
            //             setShowLogin(true);
            //         // }
            //         setLoading(false);
            //     }).catch(err=>{
            //         console.log(`err.response`, err);
            //         if(err.response.data.message){
            //             setLoading(false);
            //             setErrText('Алдаа гарлаа');
            //             setShowErr(true);
            //             setTimeout(() => {  setShowErr(false); }, 6000)
            //         }
            //     })
            // }
    }

    const RegisterGmailHandle = () =>{
        // window.location.href = `https://9325aea03cf4.ngrok.io/connect/google`
        // const newWindow = window.open(`https://9325aea03cf4.ngrok.io/connect/google`, '_blank', 'noopener,noreferrer')
        // if (newWindow) newWindow.opener = null

        var myWindow = window.open("https://9325aea03cf4.ngrok.io/connect/google", "myWindow", "resizable=yes,top=160,left=700,width=500,height=600");
        myWindow.focus(); 
    }

    return (
        <form onSubmit={ClickHandle}>
            <InputParent className="InputParent">
                <div className="another">
                    <div className="items">
                        {/* <div style={{marginBottom:20}} className="inputItem">
                            <div className="inputPar">
                                <input value={username} autoFocus onChange={e=>setUsername(e.target.value)} type="text" placeholder="Нэрээ оруулна уу" />
                                <FaRegUser />
                                <div className="line" />
                            </div>
                        </div> */}

                        <div style={{marginBottom:20}} className="inputItem">
                            {/* <div className="title">Email</div> */}
                            <div className="inputPar">
                                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="имэйл хаягаа оруулна уу" />
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
                    {/* 
                    <div className="items">
                        <div style={{marginBottom:20}} className="inputItem">
                            <div className="title">Байгууллагын нэр</div>
                            <div className="inputPar">
                                <input value={companyName} onChange={e=>setCompanyName(e.target.value)} type="text" placeholder="Байгууллагын нэр" />
                                <CgNametag />
                                <div className="line" />
                            </div>
                        </div>

                        <div style={{marginBottom:20}} className="inputItem">
                            <div className="title">Байгууллагын регистр</div>
                            <div className="inputPar">
                                <input value={companyRegister} onChange={RegisterHandle} type="number" placeholder="Байгууллагын регистр" />
                                <RiRegisteredLine />
                                <div className="line" />
                            </div>
                        </div>
                    </div> */}
                    
                </div>
                
                
                
                <div className="buttonPar">
                    {showErr&&<div className="ErrTxt">{errText}</div>}
                    <button type="submit">Үргэлжлүүлэх</button>
                </div>
                <div className="or"><span>Эсвэл</span></div>
                {/* <div className="buttonPar Email">
                    <button type="submit"></button>
                </div> */}
                <ButtonStyleTwo onClick={RegisterGmailHandle} className="custom"><FaGooglePlusG /> Gmail - ээр бүртгүүлэх</ButtonStyleTwo>
                {loading?<LoadingStyle> <img src="/img/giff.gif" alt="eshop-giff" /></LoadingStyle>:<></>}
            </InputParent>
        </form>
        
    )
}

export default SignUp;

const InputParent = styled.div`
    .custom{
        font-size:14px;
        box-shadow:0px 0px 0px 1px ${props=>props.theme.buttonColor} inset;
    }
    .or{
        position:relative;
        margin:10px 0px;
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