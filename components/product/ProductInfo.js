import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Parser } from "html-to-react";
const parser = new Parser();

const ProductInfo = ({ data }) => {
    const [ contents, setContents ] = useState(1);

    const switchHandle = (el) =>{
        setContents(el)
    }

    return (
        <Container>
           <div className="Headers">
               <div onClick={()=>switchHandle(1)} className={`items ${contents===1?`Active`:``}`}>
                   <div className="text" >Бүтээгдэхүүний тайлбар</div>
                   <div className="line" />
                </div>
               <div onClick={()=>switchHandle(2)} className={`items ${contents===2?`Active`:``}`}>
                   <div className="text">Хэрэглэх заавар</div>
                   <div className="line" />
                </div>
               <div  onClick={()=>switchHandle(3)} className={`items ${contents===3?`Active`:``}`}>
                   <div className="text">Анхааруулга</div>
                   <div className="line" />
               </div>
           </div>
           
            <div className="contentParent">
                {contents===1&&<div className={`${contents===1?`Activer`:``}`}>{parser.parse(data?.buteegdehuun_tailbar)}</div>}
                {contents===2&&<div className={`${contents===2?`Activer`:``}`}>{parser.parse(data?.heregleh_zaawar)}</div>}
                {contents===3&&<div className={`${contents===3?`Activer`:``}`}>{parser.parse(data?.anhaaruulga)}</div>}
            </div>
        </Container>
    )
}

export default ProductInfo

const animate = keyframes`
    0%{ opacity:0; transform:translateY(-10px); }
    100%{ opacity:1;transform:translateY(0px); }
`

const Container = styled.div`
    margin-bottom:30px;
    height:20rem;
    width:100%;
    .contentParent{
        width:100%;
        padding:10px;
    }
    .Activer{
        animation:${animate} 0.4s ease;
    }
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
        .Active{
            color:${props=>props.theme.textColor3};
            .line{
                width:100%;
                left:0%;
            }
        }
    }
`
