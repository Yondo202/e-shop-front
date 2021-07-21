import React, {useEffect, useState} from "react";
import Root from "@/core/Root";
import CategoryHome from "@/components/category/CategoryHome"
import CatigoryCards from "@/components/category/CatigoryCards";
import axios from "axios";

const Index = ({ data }) => {
    // let {Layout} = data
    const [loaded, setLoaded] = useState(false);
    const [ products, setProducts ] = useState([]);


    useEffect(()=>{
        setLoaded(true);
        let arr = []
        data.category_middles?.forEach(item=>{
            item.category_details?.forEach(elem=>{
                elem.products?.forEach(el=>{
                    arr.push(el);
                })
            })
        })
        
        setProducts(arr);
    },[data?.id])

    return (
        <Root>
            {/* {loaded && <ResolveComponent data={Layout}/>} */}
            <CategoryHome >
                <CatigoryCards title={data?.name} products={products} />
            </CategoryHome>
        </Root>
    );
};

export default Index;

export async function getServerSideProps({params, req}){
    let res = await axios.post(`${process.env.serverUrl}/graphql`, { query: `query{ pages(where:{ slug:"${params.id}" }){ id name slug
        category_middles{ name slug 
         category_details{ id name slug
         products{ id name slug price bogino_tailbar image{ url } }
         } } } }` })
    if(res.data.data.pages?.length){
        return {props: {data: res.data.data.pages[0]}}
    }else{
        return{props: {data: {}}}
    }
}