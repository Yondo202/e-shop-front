import React from 'react'
import Link  from 'next/link';
import styled from 'styled-components'

const Header = ({ menu }) => {

    return (
        <Container>
            <div className="menusPar container-xl">
                {menu?.map((el,ind)=>{
                    return( 
                        <Link key={ind} href={`/p/`+el.slug}>
                            <a className="menus">
                                <div className="text">{el.name}</div>
                                <div className="line"/>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background-color: #ffffff;
    .menusPar{
        display: flex;
        align-items: center;
        gap: 25px;
        .menus{
            text-decoration:none;
            text-transform: uppercase;
            cursor: pointer;
            font-size: 14px;
            text-align: center;
            position: relative;
            font-weight: 600;
            padding:16px 0px 12px 0px;
            color: ${props=>props.theme.textColor2};
            // &:first-child{
            //     padding:16px 20px 12px 0px;
            // }
            .line{
                transition: all 0.3s ease;
                bottom: 0px;
                left: 0;
                position: absolute;
                height: 3.5px;
                width: 0%;
                background-color: ${props=>props.theme.mainColor};
            }
            &:hover{
                .line{
                    width: 100%;
                }
            }
        }
    }
`