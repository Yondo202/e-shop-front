import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import LeftMenu from './LeftMenu';
import axios from "axios"
import { useRouter } from 'next/router'
import Link from "next/link"


const CategoryHome = (props) => {
    const router = useRouter()
    const { id, middle, detail } = router.query
    const [ menuData, setMenuData ] = useState({});
    const [ menuMiddle, setMenuMiddle ] = useState(null);
    const [ menuSm, setMenuSm ] = useState(null);

    useEffect(()=>{
        void async function Fetch (){
           let res = await axios.post(`${process.env.serverUrl}/graphql`, { query: `query{ pages(where:{ slug:"${id}" }){ id name slug
               category_middles{ name slug 
                category_details{ id name slug
                products{ id name slug price bogino_tailbar image{ url } }
                } } } }` })
           if(res.data.data.pages.length){
               setMenuData(res.data.data.pages[0]);
           }
       }()
    },[id])

    useEffect(()=>{
        menuData?.category_middles?.forEach(item=>{
            if(middle===item.slug){
                setMenuMiddle(item);
                if(item.category_details.length){
                    item?.category_details.forEach(el=>{
                        if(detail===el.slug){
                            setMenuSm(el);
                        }
                    })
                }
            }
        })
    },[menuData, middle, detail]);


    return (
        <Container className="container">
            <div className="smMenus">
                <Link href="/"><a className="items">Нүүр</a></Link> 
                <Link href={`/p/${menuData?.slug}`}><a className="items">{menuData?.name}</a></Link>
                <Link href={`/p/${menuData?.slug}/${menuMiddle?.slug}`}><a className={`items ${menuMiddle?.name?``:`nulls`}`}>{menuMiddle?.name}</a></Link>
                <Link href={`/p/${menuData?.slug}/${menuMiddle?.slug}/${menuSm?.slug}`}>
                    <a className={`items ${menuSm?.name?``:`nulls`}`}>{menuSm?.name}</a>
                </Link>
            </div>

            <div style={{marginBottom:50}} className="row">
                <div className="col-3"><LeftMenu data={menuData} route={{id:id, middle:middle, detail:detail}} /></div>
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
            text-decoration:none;
            font-weight: 300;
            /* color: ${props=>props.theme.textColor2}; */
            letter-spacing: 0.1px;
            color: #606060;
            cursor: pointer;
            margin-left: .5rem;
            &:hover{
                color:#000000;
            }
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
        .nulls{
            &:before{
                content: "";
                margin-right: .5rem;
            }
        }
    }
`
