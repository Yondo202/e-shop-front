import React from 'react'
import styled from 'styled-components'
import HamburgerMenu from "react-hamburger-menu"
import Link from 'next/link'

export const MainMenu = ({open, menu, setOpen}) => {

    console.log(`menu`, menu);
    return (
        <Container>
            <div className={`MobMenu ${open?``:`Animate`}`}>
                <div className="menuSector">
                    <div className="Header">
                       <span>Үндсэн ангилал</span> 
                       <div>
                        <HamburgerMenu
                                isOpen={open}
                                menuClicked={()=>setOpen(prev=>!prev)}
                                width={20}
                                height={16}
                                strokeWidth={1.3}
                                rotate={0}
                                color='black'
                                borderRadius={0}
                                animationDuration={0.5}
                            />
                       </div>
                    </div>
                    <div className="itemsPar">
                        {menu.map((el,ind)=>{
                            return(
                                <Link key={ind} href={`/p/${el.slug}`} >
                                    <a onClick={()=>setOpen(prev=>!prev)} className="Big">{el.name}</a>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Container>
    )
}


const Container = styled.div`
    .MobMenu{
        transition:all 0.3s ease;
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100vh;
        background-color:rgba(0,0,0,0.4);
        z-index:99;
        display:flex;
        justify-content:flex-end;
        opacity:1;
        .menuSector{
            background-color:#ffffff;
            height:100%;
            max-height:100vh;
            width:80%;
            overflow-y:scroll;
            &::-webkit-scrollbar {
                width: 4px !important;
                color:#aaa;
            }
            &::-webkit-scrollbar-thumb {
                background: #aaa;
                border-radius: 10px;
            }
            .itemsPar{
                padding:15px 0px;
                font-size:14px;
                display:flex;
                flex-direction:column;
                .Big{
                    width:100%;
                    text-decoration:none;
                    padding:12px 16px;
                    border-bottom:1px solid rgba(0,0,0,0.2);
                    border-bottom-style:dashed;
                    &:hover{
                        background-color:${props=>props.theme.bodyColor};
                        color:${props=>props.theme.textColor2};
                    }
                }
            }
            .Header{
                position:sticky;
                top:0;
                background-color:#fff;
                height:60px;
                border-bottom:1px solid rgba(0,0,0,0.2);
                display:flex;
                align-items:center;
                justify-content:space-between;
                padding:0px 16px;
                font-weight:500;
                font-size:14px;
            }
        }
    }
    .Animate{
        left:100%;
        opacity:0;
    }
`