import axios from "axios";
import { getCookie } from "@/miscs/useCookie";

export const SaveProduct = (data, saveProduct, setSaveProduct) => {
    
    if(saveProduct.length!==0){
        let cond = true;
        saveProduct.forEach(item=>{
            if(item===data.id){
                cond = false
            }
        })
        
        if(cond){
            setSaveProduct(prev=>[...prev, data.id]);
            UpdateHandle([...saveProduct, data.id]);
        }else{
            setSaveProduct(prev=>prev);
        }
    }else{
        setSaveProduct([data.id]);
        UpdateHandle([data.id]);
    }
}

const UpdateHandle = async (data) =>{
   let jwt = getCookie(`jwt`);
   let user = getCookie(`user_info`);
   await axios.put(`${process.env.serverUrl}/users/${user.id}`, {product_id: JSON.stringify(data)}, { headers:{
        Authorization:`bearer ${jwt}`
   } })
}

