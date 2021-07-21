import React from 'react'
import Root from "@/core/Root";
import styled from 'styled-components';

const cart = () => {
    return (
        <Root>
            <Container className="container">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="items">
                           <div className="title">Миний сагс</div>
                            <div className="products">
                                products
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="items">
                            <div className="title">Захиалгын мэдээлэл</div>

                        </div>
                    </div>
                </div>
            </Container>
        </Root>
    )
}

export default cart


const Container = styled.div`
    padding-top:30px;
    padding-bottom:30px;
    .items{
        background-color:#ffffff;
    }
`