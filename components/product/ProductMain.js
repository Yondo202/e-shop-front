import React from 'react'
import styled from 'styled-components';
import Products from "components/product/Products"
import Information from "@/components/product/Information"

const ProductMain = ({data}) => {

    return (
        <Container className="container-xl">
            <Products data={data} />
            <Information />
        </Container>
    )
}

export default ProductMain

const Container = styled.div`

`
