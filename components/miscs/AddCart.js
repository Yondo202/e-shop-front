import { setCookie, getCookie } from "@/miscs/useCookie";

export const listenCart2 = (data, count, cartItems, setCond, setCartAdd) => {
    
    if(cartItems.length!==0){
        let result = [];
        let cond = true;
        cartItems.forEach(el=>{
            if(parseInt(el.id)===data.id){
                el.count +=count;
                cond = false;
            }
            result.push(el);
       })
       if(cond){
            setCookie(process.env.cart, [{ id: data.id, count:count},...cartItems ]);
            setCond(prev=>!prev);
            setCartAdd({ data:data, cond:true });
       }else{
            setCookie(process.env.cart, result);
            setCond(prev=>!prev);
            setCartAdd({ data:data, cond:true });
       }
    }else{
        setCookie(process.env.cart, [{ id: data.id, count:count}]);
        setCond(prev=>!prev);
        setCartAdd({ data:data, cond:true });
    }

    setTimeout(() => {
        setCartAdd({ cond:false });
    }, 4000)
    
}

export const DeleteHandle2 = (data, setCond) =>{
    let arr = []
    getCookie(process.env.cart).forEach(item=>{
        if(parseInt(item.id)!==data.id){
            arr.push(item);
        }
    });
    setCookie(process.env.cart, arr);
    setCond(prev=>!prev);
}