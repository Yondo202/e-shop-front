import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import Axios from 'axios';

const callback = () => {
    const [ data, setData ] = useState({}); 
    const router = useRouter();

    console.log(`router`, router);

    //end token oo avaad backend ruugee shideed data gaa avii
    console.log(`object`, router.query.id_token);

    useEffect(()=>{
        if(router.query.id_token){
            provide()
        }
    },[router.query.id_token])
    const provide = async () =>{
    //    await Axios.get(`https://9325aea03cf4.ngrok.io${router.asPath}`).then(res=>{
    //         console.log(`res final`, res)
    //     })
       await Axios.get(`https://9325aea03cf4.ngrok.io/auth/google/callback?access_token=${router.query.access_token}`).then(res=>{
            console.log(`res final`, res);
            setData(res.data);
            if(res.data){
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
