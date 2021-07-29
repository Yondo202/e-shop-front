import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { MdKeyboardArrowRight } from "react-icons/md"

const LeftMenu = ({ data, route }) => {
    return (
        <Container>
            <div className="title">{data?.name}</div>
            <div className="CatigoryMenus">
                {data?.category_middles?.map((el,ind)=>{
                    return(
                        <div key={ind} className="itemParent">
                            <div className={`items ${route.middle===el.slug?`Active`:``}`}>
                                <span className="svg"><MdKeyboardArrowRight /></span>
                                <Link href={`/p/${route.id}/${el.slug}`}>
                                    <a className={`Text`}>{el.name} </a>
                                </Link>
                                {/* <span>({el.category_details?.length})</span> */}
                            </div>

                            {route.middle===el.slug?el.category_details.length?<div>
                                    {el.category_details.map((item,index)=>{
                                        return(
                                            <div key={index} className={`items itemMiddle ${route.detail===item.slug?`Active`:``}`}>
                                                <span className="svg">
                                                    {/* <MdKeyboardArrowRight /> */}
                                                </span>
                                                <Link href={`/p/${route.id}/${route.middle}/${item.slug}`}>
                                                    <a className="Text">{item.name} </a>
                                                </Link>
                                                {/* <span> ({el.products?.length})</span> */}
                                            </div>
                                        )
                                    })}
                                </div>:null:null}
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default LeftMenu

const Container = styled.div`
    background-color: #ffffff;
    padding: 0px 20px;
    padding-bottom: 40px;
    color: ${props=>props.theme.textColor};
    .title{
        font-weight: 500;
        font-size: 17px;
        padding: 15px 0px;
    }

    .CatigoryMenus{
        color: #626c84;
        .itemParent{
            .items{
                display:flex;
                align-items:center;
                border-bottom: 1px dashed #f1f1f1;
                .svg{
                    transition:transform 0.3s ease;
                    font-size:18px;
                    width:18px;
                    margin-right:8px;
                }
                .Text{
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    text-decoration:none;
                    cursor: pointer;
                    /* color: #626c84; */
                    color: ${props=>props.theme.textColor2};
                    border-radius: 0;
                    padding: 10px 0;
                    padding-right:8px;
                    display: inline-block;
                    font-weight: 400;
                    line-height: 24px;
                    transition: color 0.15s ease;
                    &:hover{
                        color: ${props=>props.theme.textColor};
    
                    }
                }
                
            }
            .Active{
                .svg{
                    transform: rotate(90deg);
                }
                .Text{
                    color: ${props=>props.theme.textColor};
                    font-weight:500;
                }
            }
            .itemMiddle{
                padding-left:18px;
            }
        }
        
    }
`


const Test = [
    { name: 'Витамин', count: 67 },
    { name: 'Гэр ахуйн бараа', count: 12 },
    { name: 'Дагалдах хэрэгсэл', count: 20 },
    { name: 'Зуны гутал, пүүз худалдаа ', count: 26 },
    { name: 'Ном', count: 100 },
    { name: 'Хүүхдийн бэлгийн багц', count: 7 },
    { name: 'Дагалдах хэрэгсэл', count: 20 },
    { name: 'Зуны гутал, пүүз худалдаа ', count: 26 },
    { name: 'Ном', count: 100 },
]