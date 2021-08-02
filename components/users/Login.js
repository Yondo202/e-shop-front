import React, { useState, useEffect } from 'react'
import { FaRegUser } from "react-icons/fa"
import { BiLock } from "react-icons/bi"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { LoadingStyle } from '../miscs/CustomComp'
import { ButtonStyleTwo } from "@/miscs/CustomStyle"
import { FaGooglePlusG } from "react-icons/fa"
import { InputParent } from "./SignUp"

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
                setTimeout(() => {
                    setLoading(false);
                }, 3000)
                
                // await axios.post(`${process.env.serverUrl}/auth/local`, loginInfo )
                // .then(res=>{
                //     console.log(`res`, res);
                //     if(res.data.user.admin_confirmed){
                //         setCookie(null, 'jwt', res.data.jwt,{ maxAge: 30 * 24 * 60 * 60, path:"/" });
                //         setCookie(null, 'username', res.data.user.username, { maxAge: 30 * 24 * 60 * 60, path:"/" });
                //         setCookie(null, 'role', res.data.user.role.type, { maxAge: 30 * 24 * 60 * 60, path:"/" });
                //         setCookie(null, 'id', res.data.user.id, { maxAge: 30 * 24 * 60 * 60, path:"/" });
                //         setCookie(null, 'email', res.data.user.email, { maxAge: 30 * 24 * 60 * 60, path:"/" });
                //         Router.push('/');
                //     }else{
                //         alertFunc('green', "Зөвшөөрөл хүлээнэ үү...", true);
                //         Router.push(Router.asPath);
                //     }
                //     setLoading(false);
                // }).catch(err=>{
                //     setLoading(false);
                //     setErrText('Нууц үг болон нэвтрэх нэрээ шалгана уу');
                //     setShowErr(true);
                //     setTimeout(() => {  setShowErr(false); }, 5000)
                // })
            }
    }

    const RegisterGmailHandle = () =>{
        setListen(true);
        var myWindow = window.open("https://716a633fbd14.ngrok.io/connect/google", "myWindow", "resizable=yes,top=160,left=700,width=500,height=600");
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
                <ButtonStyleTwo onClick={RegisterGmailHandle} type="button" className="custom"><FaGooglePlusG /> Gmail - ээр нэвтрэх</ButtonStyleTwo>
                {loading?<LoadingStyle> <img src="/img/giff.gif" alt="eshop-giff" /></LoadingStyle>:<></>}
            </InputParent>
        </form>
        
    )
}

export default login;