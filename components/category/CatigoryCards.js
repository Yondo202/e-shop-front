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

    const [ load, setLoad ] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setLoad(true);
        }, 400)
    },[])

    useEffect(()=>{
        setLoad(false);
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
        <ContainerCards>
            <div className="title">{myTitle} <span className="total">{datas.length} бүтээгдэхүүн</span></div>
            <div className="row">
                {load!==false || datas.length!==0?datas.map((el,ind)=>{
                    return(
                        <div key={ind} className="col-md-3 col-sm-6 col-6">
                            <InitialCard  center={false} data={el} catigory={true} />
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
        </ContainerCards>
    )
}

export default CatigoryCards

export const ContainerCards = styled.div`
    background-color: #ffffff;
    padding: 0px 20px;
    padding-bottom: 40px;
    color: ${props=>props.theme.textColor};
    .col-6{
        padding:0px 5px;
    }
    .title{
        font-weight: 500;
        font-size: 17px;
        padding: 20px 0px;
        .total{
            font-weight:400;
            margin-left:10px;
            font-size:14px;
            color:${props=>props.theme.textColor2};
        }
    }
`

