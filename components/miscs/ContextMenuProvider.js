import React, { useEffect, useState } from 'react';
const MenuContext = React.createContext();
import { setCookie, getCookie } from "@/miscs/useCookie";

// const MenuProvider = MenuContext.Provider
// const MenuConsumer = MenuContext.Consumer

// export {MenuProvider, MenuConsumer, MenuContext}

export const MenuStore = (props) =>{
    const [ alert, setAlert ] = useState({ color: 'white', text: '', cond: false });
    const [ cond, setCond ] = useState(false);
    const [ cartItems, setCardItems ] = useState([]);

    useEffect(()=>{
        setCardItems(getCookie(process.env.cart));
    },[cond]);

    const alertFunc = (color, text, cond)=>{
        setAlert({ color: color, text: text, cond: cond });
        setTimeout(() => { setAlert({ color: 'white', text: '', cond: false }); }, 4000);
    }

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
                alertFunc("green", "Сагсанд нэмэгдлээ", true);
           }else{
                setCookie(process.env.cart, result);
                setCond(prev=>!prev);
                alertFunc("green", "Сагсанд нэмэгдлээ", true);
           }
        }else{
            setCookie(process.env.cart, [{ id: data.id, count:count}]);
            setCond(prev=>!prev);
            alertFunc("green", "Сагсанд нэмэгдлээ", true);
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
        <MenuContext.Provider value={{ ...props.value, listenCart, cartItems, DeleteHandle, alert, alertFunc}} >
            {props.children}
        </MenuContext.Provider>
    )
}


export default MenuContext;