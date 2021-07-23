import React from 'react'
import Root from "@/core/Root";
import CategoryHome from "@/components/category/CategoryHome"

const index =_=> {
    return (
        <Root><CategoryHome /></Root>
    )
}

export default index

// export async function getServerSideProps({params, req}){
//     let res = await axios.post(`${process.env.serverUrl}/graphql`, { query: `query{ 
//         categoryMiddles(where:{ slug:"${params.middle}" }){ name slug 
//          category_details{ id name slug
//          products{ id name slug price bogino_tailbar image{ url } }
//     } } }` })

//     if(res.data.data.categoryMiddles?.length){
//         return {props: {data: res.data.data.categoryMiddles[0]}}
//     }else{
//         return{props: {data: {}}}
//     }
// }