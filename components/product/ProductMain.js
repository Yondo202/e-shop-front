import React from 'react'
import styled from 'styled-components';
import Products from "components/product/Products"
import SameProduct from "components/product/SameProducts"

const ProductMain = ({data}) => {

    return (
        <Container className="container-xxl">
            <Products data={data} />
            <SameProduct data={data} />
        </Container>
    )
}

export default ProductMain

const Container = styled.div`

`
