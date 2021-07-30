import React from 'react'
import Axios from "axios";
import Root from "@/core/Root";
import MainSearch from "@/components/search/MainSearch"

const Result = ({ data }) => {
    console.log(`data`, data)
    return (
        <Root>
            <MainSearch data={data} />
        </Root>
    )
}

export default Result


export async function getServerSideProps({ params, req }){
    let url = encodeURI(`${process.env.serverUrl}/products?name_contains=${params.result}`);
    let res = await Axios.get(url);
    return {props: { data: res.data}}
}