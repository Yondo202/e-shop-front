import React from "react";
import Root from "@/core/Root";
import checkLanguage from '@/miscs/checkLanguage';
import decrease from "@/components/miscs/decrease";
import ProductsMain from "components/product/ProductMain"
// import Axios from "axios";

const Blog = ({data, other}) => {
    return (
        <Root seo={{title: data.name, description: decrease(data.bogino_tailbar, 120), thumb: data.image[0]?.url }}>
            <ProductsMain data={data} />
        </Root>
    );
};

export default Blog;

export async function getServerSideProps({params, req}){
    console.log(`params.id`, params.id)
    let data = await checkLanguage(`/products/${params.id}`, req, true);
    // let data = Axios.get(`/products/${params.id}`);
    return {props: { data: data.data }}
}
