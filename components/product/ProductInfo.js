import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'

const ProductInfo = () => {
    return (
        <Container>
           <div className="Headers">
               <div className="items">
                   <div className="text">Бүтээгдэхүүний тайлбар</div>
                   <div className="line" />
                </div>
               <div className="items">
                   <div className="text">Хэрэглэх заавар</div>
                   <div className="line" />
                </div>
               <div className="items">
                   <div className="text">Анхааруулга</div>
                   <div className="line" />
               </div>
           </div>
        </Container>
    )
}

export default ProductInfo

const Container = styled.div`
    width:90%;
    .Headers{
        display:flex;
        gap:20px;
        // padding:10px 0px;
        border-bottom:1px solid rgba(0,0,0,0.1);
        .items{
            position:relative;
            cursor:pointer;
            font-weight:500;
            padding-top:10px;
            .text{
                padding-bottom:15px;
            }
            color:${props=>props.theme.textColor2};
            &:hover{
                color:${props=>props.theme.textColor3};
                .line{
                    width:100%;
                    left:0%;
                }
            }
            .line{
                transition:all 0.3s ease;
                position:absolute;
                bottom:-1px;
                left:50%;
                width:0%;
                height:2px;
                background-color:${props=>props.theme.mainColor};
            }
        }
    }
`
