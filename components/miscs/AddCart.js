import { setCookie, getCookie } from "@/miscs/useCookie";

export const listenCart2 = (data, count, cartItems, setCond, setCartAdd, alertFunc) => {
    
    if(cartItems.length!==0){
        let result = [];
        let cond = true;
        let notf = true
        
        cartItems.forEach(el=>{
            if(parseInt(el.id)===data.id){
                if(el.count<data.stock){
                    el.count +=count;
                }else{
                    alertFunc('orange', 'Барааны үлдэгдэл хүрэлцэхгүй байна.', true);
                    notf = false;
                }
                cond = false;
            }
            result.push(el);
       })

       if(cond){
            setCookie(process.env.cart, [{ id: data.id, count:count, stock: data.stock}, ...cartItems ]);
            setCond(prev=>!prev);
            if(notf){
                setCartAdd({ data:data, cond:true });
            }
       }else{
            setCookie(process.env.cart, result);
            setCond(prev=>!prev);
            if(notf){
                setCartAdd({ data:data, cond:true });
            }
       }
    }else{
        if(data.stock!== "0"){
            setCookie(process.env.cart, [{ id: data.id, stock: data.stock, count:count}]);
            setCond(prev=>!prev);
            setCartAdd({ data:data, cond:true });
        }else{
            alertFunc('orange', 'Барааны үлдэгдэл хүрэлцэхгүй байна.', true);
        }

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


