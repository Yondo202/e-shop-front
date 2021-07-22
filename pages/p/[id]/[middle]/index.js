import React, { useState, useEffect } from 'react'
import Root from "@/core/Root";
import CategoryHome from "@/components/category/CategoryHome"
import axios from "axios";
import CatigoryCards from "@/components/category/CatigoryCards";

const index = ({data}) => {
    const [ products, setProducts ] = useState([]);

    useEffect(()=>{
        let arr = []
        data.category_details?.forEach(elem=>{
            elem.products?.forEach(el=>{
                arr.push(el);
            })
        })
        setProducts(arr);
    },[data?.slug])

    return (
        <Root>
            <CategoryHome >
                <CatigoryCards title={data?.name} products={products} />
            </CategoryHome>
        </Root>
    )
}

export default index

export async function getServerSideProps({params, req}){
    let res = await axios.post(`${process.env.serverUrl}/graphql`, { query: `query{ 
        categoryMiddles(where:{ slug:"${params.middle}" }){ name slug 
         category_details{ id name slug
         products{ id name slug price bogino_tailbar image{ url } }
    } } }` })

    if(res.data.data.categoryMiddles?.length){
        return {props: {data: res.data.data.categoryMiddles[0]}}
    }else{
        return{props: {data: {}}}
    }
}