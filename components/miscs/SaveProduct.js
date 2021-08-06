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
            setSaveProduct(prev=>[...prev, data.id])
        }else{
            setSaveProduct(prev=>prev);
        }
    }else{
        setSaveProduct([data.id]);
    }

    
    
}

