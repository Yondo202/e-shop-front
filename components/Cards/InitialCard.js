import React,{ useState } from 'react'
import styled from 'styled-components'
import minimize from "@/miscs/minimize"
import { NumberComma } from "components/miscs/NumberComma"
import { useRouter } from 'next/router';

const InitialCard = ({data, center, catigory}) => {
    const router = useRouter();
    const [mouseMoved, setMouseMoved] = useState(false);

    const handleClick =(el) =>{
        if (!mouseMoved) {
            router.push(el);
        }
    }

    return (
        <Container>
            <div className={catigory?`Parent ParentCat`:`Parent`}>
                <div className={`content ${center?`Center`:``} ${catigory?`Catigory`:``}` } 
                    onMouseMove={() => setMouseMoved(true)}
                    onMouseDown={() => setMouseMoved(false)}
                    onMouseUp={() => handleClick(process.env.productUrl + data?.id, data?.name)}
                >
                    <div className="imgPar">
                        <img src={catigory?process.env.serverUrl+data.image[0]?.url:minimize(data.image[0], "thumbnail")} alt="initialCard" />
                    </div>
                    <div className={`textPar`}>
                        <div className="titles">{data?.name}</div>
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
        transform:scale(1.1);
    }
    .Parent{
        // padding-right:18px;
        height: 16rem;
        margin-bottom:15px;
        .content{
            text-decoration: none;
            height: 100%;
            cursor: pointer;
            border:1px solid rgba(0,0,0, 0.157);
            border-radius: 4px;
            box-shadow:1px 1px 10px -8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background-color: #ffffff;
            padding: 8px 0px;
            .imgPar{
                img{
                    width: 100%;
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
        height:16.5rem;
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
       }
    }
`
