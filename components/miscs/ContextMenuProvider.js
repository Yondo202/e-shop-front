import React, { useEffect, useState } from 'react';
const MenuContext = React.createContext();
import { getCookie } from "@/miscs/useCookie";
import { DeleteHandle2, listenCart2 } from "@/miscs/AddCart"
// const MenuProvider = MenuContext.Provider
// const MenuConsumer = MenuContext.Consumer

// export {MenuProvider, MenuConsumer, MenuContext}

export const MenuStore = (props) =>{
    const [ config, setConfig ] = useState({});
    const [ alert, setAlert ] = useState({ color: 'white', text: '', cond: false });
    const [ cond, setCond ] = useState(false);
    const [ cartItems, setCardItems ] = useState([]);
    const [ showModal, setShowModal ] = useState({ data:{}, cond:false });
    const [ cartAdd, setCartAdd ] = useState({ data:{}, cond:false });

    useEffect(()=>{
        // config = {width: window.innerWidth, height: window.innerHeight};
        setConfig({width: window.innerWidth, height: window.innerHeight});
        if (typeof window !== 'undefined') {
            function handleResize() {
                const config = {width: window.innerWidth, height: window.innerHeight};
                setConfig(config);
            }
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
        return config;
    },[])

    useEffect(()=>{
        setCardItems(getCookie(process.env.cart));
    },[cond]);

    const alertFunc = (color, text, cond)=>{
        setAlert({ color: color, text: text, cond: cond });
        setTimeout(() => { setAlert({ color: 'white', text: '', cond: false }); }, 4000);
    }

    const HandleModal = (data, cond) =>{
        setShowModal({ data:data, cond:cond });
    }

    const listenCart = (data, count) => {
        listenCart2(data, count, cartItems, setCond, setCartAdd, alertFunc );
    }

    const DeleteHandle = (data) =>{
        DeleteHandle2(data, setCond);
    }


    return(
        <MenuContext.Provider value={{ config, ...props.value, listenCart, cartItems, DeleteHandle, alert, alertFunc, showModal, setShowModal, HandleModal, cartAdd, setCartAdd}} >
            {props.children}
        </MenuContext.Provider>
    )
}


export default MenuContext;