import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from "next/router"
import Axios from 'axios';
import { setCookie } from "@/miscs/useCookie";

const callback = () => {
    const [ data, setData ] = useState({}); 
    const router = useRouter();

    useEffect(()=>{
        if(router.query.id_token){
            provide();
        }
    },[router.query.id_token])

    const provide = async () =>{
       await Axios.get(`https://716a633fbd14.ngrok.io/auth/google/callback?access_token=${router.query.access_token}`).then(res=>{
            if(res.data){
                setCookie("jwt", res.data?.jwt);
                setCookie(process.env.user, res.data?.user);
                setData(res.data);
                window.close();
            }
        })
    }
    
    return (
        <div>
            <h3>name: {data.user?.username}</h3>
            <h3>email: {data.user?.email}</h3>
            <h3>id: {data.user?.id}</h3>
        </div>
    )
}

export default callback
