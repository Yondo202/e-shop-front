import React, { useEffect, useState } from 'react'
import InitialCard from "@/components/Cards/InitialCard"
import styled from 'styled-components'
import axios from 'axios';
import DocumentTitle from "@/miscs/DocumentTitle"
import { SkeletonCard } from "@/miscs/CustomComp"

const CatigoryCards = ({ title, data, route }) => {
    const [ myTitle, setMyTitle ] = useState('');
    const [ datas, setDatas ] = useState([]);
    DocumentTitle(myTitle);

    useEffect(()=>{
        setMyTitle(title);
        setDatas([]);
        if(data?.id){
            if(route.id && !route.middle && !route.detail){
                let arr = []
                data.category_middles.forEach(el=>{
                    arr.push(parseInt(el.id));
                });
                if(arr.length){ FetchAll(arr) }
            }else if(route.middle && !route.detail){
                let arr = []
                data.category_middles.forEach(el=>{
                    if(route.middle===el.slug){
                        arr.push(parseInt(el.id));
                        setMyTitle(el.name);
                    }
                });
                if(arr.length){FetchAll(arr)}
            }else if(route.detail){
                let arr = []
                data.category_middles.forEach(el=>{
                    if(route.middle===el.slug){
                        el.category_details.forEach(item=>{
                            if(route.detail===item.slug){
                                arr.push(parseInt(item.id));
                                setMyTitle(item.name);
                            }
                        })
                    }
                });
                if(arr.length){FetchDetail(arr)}
            }
        }
    },[data?.id, route.id, route.middle, route.detail]);

    const FetchAll = async (arr) =>{
        let data = await axios.post(`${process.env.serverUrl}/graphql`, { query: `query{ products(where:{ category_middles:{ id: [${arr}] } }){
            id name slug price bogino_tailbar image{ url } 
            }}` } )

        setDatas(data?.data?.data?.products);
    }

    const FetchDetail = async (arr) =>{
        let data = await axios.post(`${process.env.serverUrl}/graphql`, { query: `query{ products(where:{ category_details:{ id: [${arr}] } }){
            id name slug price bogino_tailbar image{ url } 
            }}` } )
        setDatas(data?.data?.data?.products);
    }

    return (
        <Container>
            <div className="title">{myTitle}</div>
            <div className="row">
                {data?.id&&datas.length!==0?datas.map((el,ind)=>{
                    return(
                        <div key={ind} className="col-md-3 col-sm-4 col-6">
                            <InitialCard  center={true} data={el} catigory={true} />
                        </div>
                    )
                }):(
                    <>
                        <div className="col-md-3 col-sm-4 col-6">
                            <SkeletonCard />
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <SkeletonCard />
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <SkeletonCard />
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <SkeletonCard />
                        </div>
                    </>
                )}
            </div>
            
        </Container>
    )
}

export default CatigoryCards

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
`

