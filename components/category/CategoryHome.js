import React from 'react'
import styled from 'styled-components';
import LeftMenu from './LeftMenu';

const CategoryHome = (props) => {
    return (
        <Container className="container">
            <div className="smMenus">
                <div className="items">Нүүр</div>
                <div className="items">Гоо сайхан</div>
                <div className="items">Эм</div>
                <div className="items">Бүтээгдэхүүн</div>
            </div>

            <div style={{marginBottom:50}} className="row">
                <div className="col-3"><LeftMenu /></div>
                <div className="col-9">
                    {props.children}
                </div>
            </div>
        </Container>
    )
}

export default CategoryHome

const Container = styled.div`
    .smMenus{
        display: flex;
        margin: 20px 0px;
        .items{
            font-weight: 300;
            /* color: ${props=>props.theme.textColor2}; */
            letter-spacing: 0.1px;
            color: #606060;
            cursor: pointer;
            margin-left: .5rem;
            &:first-child{
                margin-left: 0rem;
                &:before{
                    display: none;
                }
            }
            &:before{
                content: "/";
                margin-right: .5rem;
            }
        }
    }
`
