import React from 'react'
import styled from 'styled-components'
import Comment from "@/components/product/Comment"
import ProductInfo from "@/components/product/ProductInfo"

const Information = () => {
    return (
        <Container className="row">
            <div className="col-md-6">
                <div className="Title"><div className="text">Бүтээгдхүүний мэдээлэл</div></div>
                <ProductInfo />
            </div>
            <div className="col-md-6">
                <div className="Title"><div className="text">Сэтгэгдэл үлдээх</div></div>
                <Comment />
            </div>
        </Container>
    )
}

export default Information


const Container = styled.div`
    margin-top: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #ffffff;
    .Title{
        position:relative;
        text-align:center;
        font-size:${props=>props.theme.fontSize2};
        font-weight:500;
        margin-bottom:20px;
        font-size:16px;
        display:flex;
        justify-content:center;
        .text{
            padding:0px 15px;
            z-index:2;
            background-color:#fff;
        }
        &:after{
            content:"";
            z-index:0;
            height:1px;
            width:100%;
            background-color:rgba(0,0,0,0.2);
            position:absolute;
            left:0;
            top:50%;
        }
    }
`