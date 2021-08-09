import React, { useEffect, useRef, useState, useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import Ctx from "@/miscs/ContextMenuProvider"
import { getCookie } from "@/miscs/useCookie";
import { VscClose } from "react-icons/vsc"
import Link from 'next/link'
import Axios from 'axios'
import { NumberComma } from "components/miscs/NumberComma";
import minimize from "@/miscs/minimize"

const SavedProducts = ({ setSaved, userInfo }) => {
    const { setSavesCond } = useContext(Ctx);
    const reff = useRef()
    const [ cName, setCname ] = useState(false);
    const [ datas, setDatas ] = useState([]);
    const [ fetchs, setFetch ] = useState([]);

    const CloseHandle = (e) =>{
        if(reff.current===e.target){
            setCname(true);
            setTimeout(() => {
                setSaved(false);
            }, 470)
        }
    }

    const CloseESC = () =>{
        setCname(true);
        setTimeout(() => {
            setSaved(false);
        }, 470)
    }

    useEffect(()=>{
        setDatas([]);
        let jwt = getCookie(`jwt`);
        (async function get(){
           await Axios.get(`${process.env.serverUrl}/users/${userInfo.id}`, { headers:{ Authorization:`bearer ${jwt}` } }).then(res=>{
                if(res.data.product_id){
                    setDatas(JSON.parse(res.data.product_id));
                }
            })
        })()
    },[])

    useEffect(()=>{
        setFetch([]);
        if(datas.length!==0){
            datas.forEach(item=>{
                finalFetchs(item);
            })
        }
    },[datas])

    const finalFetchs = async (item) =>{
        await Axios.get(`${process.env.serverUrl}/products/${parseInt(item)}`).then(res=>{
            if(res.data.length!==0){
                setFetch(prev=>[...prev,res.data]);
            }
        })
    }

    const DeleteHandle = (id) =>{
        let jwt = getCookie(`jwt`);
        Axios.put(`${process.env.serverUrl}/users/${userInfo.id}`, { product_id: JSON.stringify([...datas.filter(item=>parseInt(item)!==parseInt(id))]) },  { headers:{ Authorization:`bearer ${jwt}` } }).then(_=>{
            setFetch(prev=>prev.filter(items=>items.id!==id));
            setSavesCond(prev=>!prev);
        })
    }

    return (
        <Container ref={reff} onClick={CloseHandle}>
            <div className={`Contents ${cName?`Close`:``}`}>
                <div className="titles">
                    <h6>Хадгалсан бүтээгдэхүүн</h6>
                    <div onClick={CloseESC} className="svgPar">
                        <VscClose />
                    </div>
                </div>

                <div className="contentSector">
                    {fetchs.map((el,ind)=>{
                        return(
                            <div key={ind} className="items">
                                <div className="imgs">
                                    <img src={minimize(el.image[0], "thumbnail")} alt="saved-products" />
                                </div>
                                <div className="textPar">
                                    <Link href="/">
                                        <a className="title">{el.name}</a>
                                    </Link>
                                    <div className="price">{NumberComma(el.price)}</div>
                                </div>
                                <div onClick={()=>DeleteHandle(el.id)} className="close" ><VscClose /></div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </Container>
    )
}

export default SavedProducts

const animate = keyframes`
    0%{ opacity:0; transform:translateX(35px); }
    100%{ opacity:1; transform:translateX(0px); }
`
const animate2 = keyframes`
    0%{ opacity:1; transform:translateX(0px); }
    100%{ opacity:0; transform:translateX(35px); }
`

const Container = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.3);
    z-index:1000;
    top:0;
    left:0;
    display:flex;
    align-items:start;
    justify-content:flex-end;
    .Contents{
        animation:${animate} 0.5s ease;
        background:#fff;
        width:25rem;
        height:100%;
        .titles{
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding: 20px 32px;
            border-bottom:1px solid #e8e8e8;
            h5{
                font-weight: 500;
            }
            .svgPar{
                transition:all 0.3s ease;
                background-color:#f6f6f6;
                font-size:25px;
                border-radius:50%;
                width: 40px;
                height: 40px;
                display:flex;
                align-items:center;
                justify-content:center;
                cursor:pointer;
                &:hover{
                    transform:rotate(90deg);
                }
            }
        }
        .contentSector{
            max-height:80%;
            overflow-y:scroll;
            padding: 20px 32px;
            &::-webkit-scrollbar {
                width: 0px !important;
            }
            .items{
                padding:14px 0px;
                width:100%;
                height:100%;
                position:relative;
                display:flex;
                .close{
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    width: 2rem;
                    height: 2rem;
                    top:0.4rem;
                    right: -.4rem;
                    border-radius: 50%;
                    background-color: #fff;
                    color: #222;
                    font-size: 1.2rem;
                    border: 1px solid #f5f5f5;
                    cursor:pointer;
                    svg{
                        color:#666666;
                        font-size:16px;
                    }
                    &:hover{
                        border: 1px solid red;
                        svg{
                            color:red;
                        }
                    }
                }
                .textPar{
                    padding-left:12px;
                    .price{
                        padding-top:8px;
                        font-size:14px;
                        color:#151515;
                    }
                    .title{
                        font-size:14px;
                        text-decoration:none;
                        cursor:pointer;
                        color:#666666;
                        font-weight:500;
                        &:hover{
                            color:${props=>props.theme.mainColor};
                        }
                    }
                }
                .imgs{
                    width: 70px;
                    img{
                        width:100%;
                        max-width: 100%;
                        height:auto;
                    }
                }
            }
        }
    }
    .Close{
        animation:${animate2} 0.5s ease;
    }
`
