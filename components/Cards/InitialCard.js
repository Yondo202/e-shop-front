import React,{ useState } from 'react'
import styled from 'styled-components'
import minimize from "@/miscs/minimize"
import { NumberComma } from "components/miscs/NumberComma"
import { useRouter } from 'next/router';
import { AiOutlineSearch } from "react-icons/ai"
import { FiHeart } from "react-icons/fi"

const InitialCard = ({data, center, catigory}) => {
    const router = useRouter();
    const [mouseMoved, setMouseMoved] = useState(false);

    const handleClick =(el) =>{
        if (!mouseMoved) {
            router.push(el);
        }
    }
    const AddCart = () =>{
        console.log("bbbbbbbbb");
    }

    return (
        <Container>
            <div className={catigory?`Parent ParentCat`:`Parent`}>
                <div className={`content ${center?`Center`:``} ${catigory?`Catigory`:``}` } 
                >
                    <div className="imgPar">
                        <img src={catigory?process.env.serverUrl+data.image[0]?.url:minimize(data.image[0], "thumbnail")} alt="initialCard"
                            onMouseMove={() => setMouseMoved(true)}
                            onMouseDown={() => setMouseMoved(false)}
                            onMouseUp={() => handleClick(process.env.productUrl + data?.id, data?.name)} />
                        <div onClick={AddCart} className="addCard">Сагсанд хийх</div>
                        <div className="rightIcons">
                            <div className="iconPar"><AiOutlineSearch /></div>
                            <div className="iconPar"><FiHeart /></div>
                        </div>
                    </div>
                    <div className={`textPar`}>
                        <div className="titles" 
                            onMouseMove={() => setMouseMoved(true)}
                            onMouseDown={() => setMouseMoved(false)}
                            onMouseUp={() => handleClick(process.env.productUrl + data?.id, data?.name)}
                        >{data?.name}</div>
                        {/* <div className="desc">{data?.bogino_tailbar}</div> */}
                        <div className="priceSector">
                            <div className="price">{NumberComma(data?.price)}</div>
                            <div className="salePrice">{NumberComma(data?.sale_price)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        
    )
}

export default InitialCard

const Container = styled.div`
    transition:all 0.3s ease;
    &:hover{
        // transform:scale(1.1);
        .Parent{
            .content{
                .imgPar{
                    .addCard{
                        opacity:1;
                        bottom:0px;
                    }
                    .rightIcons{
                        opacity:1;
                        .iconPar{
                            transform:scale(1);
                        }
                    }
                }
            }
        }
    }
    .Parent{
        // padding-right:18px;
        height: 18rem;
        margin-bottom:15px;
        .content{
            position:relative;
            z-index:1;
            text-decoration: none;
            height: 100%;
            cursor: pointer;
            // border:1px solid rgba(0,0,0, 0.157);
            // box-shadow:1px 1px 10px -8px;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background-color: #ffffff;
            padding: 8px 0px;
            .imgPar{
                width:100%;
                position:relative;
                overflow:hidden;
                display:flex;
                align-items:center;
                justify-content:center;
                min-height:200px;
                .addCard{
                    transition: all 0.3s ease;
                    opacity:0;
                    position:absolute;
                    bottom:-10px;
                    left:0;
                    background-color:rgba(0,0,0,0.8);
                    width:100%;
                    text-align:center;
                    color:#fff;
                    padding:10px 0px;
                    font-weight:500;
                    &:hover{
                        background-color:rgba(0,0,0,1);
                    }
                }
                .rightIcons{
                    z-index:3;
                    transition:opacity 0.3s ease;
                    opacity:0;
                    transition: all 0.3s ease;
                    position:absolute;
                    top:15px;
                    right:15px;
                    display:flex;
                    flex-direction:column;
                    gap:10px;
                    .iconPar{
                        transition:all 0.3s ease;
                        transform:scale(0.8);
                        border-radius:50%;
                        padding:8px;
                        background-color:#fff;
                        box-shadow:0 0 15px -7px;
                        svg{
                            font-size:20px;
                        }
                        &:hover{
                            background-color:black;
                            svg{
                                color:#fff;
                            }
                        }
                    }
                    
                }
                img{
                    width: 70%;
                    height: auto;
                    object-fit: contain;
                }
                
            }
            .textPar{
                width:100%;
                background-color: #ffffff;
                padding: 6px 12px;
                align-self: flex-start;
                .titles{
                    transition:all 0.3s ease;
                    margin-bottom: 8px;
                    width: 100%;
                    font-weight: 600;
                    color: ${props=>props.theme.textColor3};
                    font-size: ${props=>props.theme.fontSize2};
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    text-transform: uppercase;
                    line-height: normal;
                    &:hover{
                        color: ${props=>props.theme.mainColor};
                    }
                }
                .desc{
                    line-height: normal;
                    color:#666666;
                    font-size: 12px;
                    margin-bottom: 8px;
                }
                .priceSector{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: ${props=>props.theme.fontSize2};
                    font-weight: 500;
                    .salePrice{
                        color: rgb(119, 119, 119);
                        font-weight: 400;
                        margin-left: 12px;
                        text-decoration: line-through;
                        font-size: ${props=>props.theme.fontSize};
                    }
                }
            }
        
        }
        .Catigory{
            .textPar{
                .titles{
                    font-size: 13px;
                }
            }
        }

        .Center{
            .textPar{
                text-align:center;
                align-self: center;
                .priceSector{
                    justify-content: center;
                    .salePrice{
                        display:none;
                    }
                }
            }
        }
    }
    .ParentCat{
        padding-right:0;
        height:17rem;
        .content{
            .imgPar{
                width:100%;
                display:flex;
                align-items:center;
                justify-content:center;
                img{
                    width: 80%;
                    height: auto;
                    object-fit: contain;
                }
            }
        }
        @media (max-width:480px){
            height:14rem;
        }
    }
    @media (max-width:480px){
       .Parent{
            padding-right:0px;
            height: 16.5rem;
       }
    }
`
