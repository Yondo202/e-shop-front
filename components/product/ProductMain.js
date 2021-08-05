import React from 'react'
import styled from 'styled-components';
import Products from "components/product/Products"
import SameProduct from "components/product/SameProducts"
import Information from "@/components/product/Information";


const ProductMain = ({data}) => {
    return (
        <Container className="container-xxl">
            <Products data={data} />
            <Information data={data} />
            <SameProduct data={data} />
        </Container>
    )
}

export default ProductMain

const Container = styled.div`

`
