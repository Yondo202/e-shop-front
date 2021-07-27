import React, { useEffect, useState } from 'react';
const MenuContext = React.createContext();
import { setCookie, getCookie } from "@/miscs/useCookie";

// const MenuProvider = MenuContext.Provider
// const MenuConsumer = MenuContext.Consumer

// export {MenuProvider, MenuConsumer, MenuContext}

export const MenuStore = (props) =>{
    const [ cond, setCond ] = useState(false);
    const [ cartItems, setCardItems ] = useState([]);

    useEffect(()=>{
        setCardItems(getCookie(process.env.cart));
    },[cond]);

    const listenCart = (data, count) => {
        if(cartItems.length){
            let result = [];
            let cond = true;
            cartItems.forEach(el=>{
                if(el.id===data.id){
                    el.count +=count;
                    cond = false;
                }
                result.push(el);
           })
           if(cond){
            setCookie(process.env.cart, [{ id: data.id, count:count},...cartItems ]);
            setCond(prev=>!prev);
           }else{
            setCookie(process.env.cart, result);
            setCond(prev=>!prev);
           }
        }else{
            setCookie(process.env.cart, [{ id: data.id, count:count}]);
            setCond(prev=>!prev);
        }
    }

    const DeleteHandle = (data) =>{
        let arr = []
        getCookie(process.env.cart).forEach(item=>{
            if(item.id!==data.id){
                arr.push(item);
            }
        });
        setCookie(process.env.cart, arr);
        setCond(prev=>!prev);
    }


    return(
        <MenuContext.Provider value={{ ...props.value, listenCart, cartItems, DeleteHandle}} >
            {props.children}
        </MenuContext.Provider>
    )
}


export default MenuContext;