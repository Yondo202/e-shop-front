import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import MenuContext from '../miscs/ContextMenuProvider'


const LeftMenu = () => {
    const { headerMenu } = useContext(MenuContext);
    const router = useRouter()
    const { id, middle, detail } = router.query
    const [ menuData, setMenuData ] = useState({});

    useEffect(()=>{
        setMenuData(...headerMenu?.filter(item=>item.slug===id))
    },[id])
    
    // console.log(`headerMenu`, headerMenu);

    // console.log(`id`, id);
    // console.log(`middle`, middle);
    // console.log(`detail`, detail);

    return (
        <Container>
            <div className="title">Ангилал</div>
            <div className="CatigoryMenus">
                {Test.map((el,ind)=>{
                    return(
                        <div key={ind} className="items"><Link href={router.asPath}><a className="Text">{el.name}</a></Link>  <span>({el.count})</span></div>
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
        .items{
            border-bottom: 1px dashed #f1f1f1;
            .Text{
                text-decoration:none;
                cursor: pointer;
                /* color: #626c84; */
                color: ${props=>props.theme.textColor2};
                border-radius: 0;
                padding: 10px 0;
                display: inline-block;
                font-weight: 400;
                line-height: 24px;
                transition: color 0.15s ease;
                &:hover{
                    color: ${props=>props.theme.textColor};

                }
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