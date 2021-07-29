import React, { useRef, useEffect, useState  } from 'react'
import styled from 'styled-components';
import ReactSlider from "react-slick";
import InitialTitle from "components/titles/InitialTitle"
import InitialCard from "components/Cards/InitialCard"
import { CustomArrow } from "@/miscs/CustomComp";
import Axios from 'axios';




const SameProducts = ({ data }) => {
    const sliderRef = useRef();
    const [ Data, setData ] = useState([])

    useEffect(()=>{
        Go();
    },[data])

    const settings = {
        dots: true,
        infinite: Data.length > 5,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        dots:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    const Go = async () =>{
        await Axios.get(`${process.env.serverUrl}/category-middles/${data?.category_middles[0]?.id}`).then(res=>{
            if(res.data.products.length!==0){
                setData(res.data.products.filter(item=>item.id!==data.id));
            }
        })
    }

    console.log(`data`, data);

    return (
        <Container >
            {/* <div className="title">{data.name}</div> */}
            <InitialTitle data={`Ижил төстэй бүтээгдэхүүн`} />
            <div className="sliderParent">
                <ReactSlider ref={sliderRef} {...settings}>
                    {Data.reverse().map((el,ind)=>{
                        return(
                            <InitialCard key={ind} data={el} />
                        )
                    })}
                </ReactSlider>
                <CustomArrow sliderRef={sliderRef} />
            </div>
        </Container>
    )
}

export default SameProducts


const Container = styled.div`
    margin-bottom:20px;
    .sliderParent{
        position:relative;
        .slick-slider{
            margin-left:-18px;
            margin-right:-18px;
            .slick-list{
                padding: 15px 0px;
                .slick-track{
                    display:flex;
                    gap:18px;
                }
               
            }
        }
        @media (max-width:768px){
            .slick-slider{
                margin-left:0px;
                margin-right:0px;
                .slick-list{
                    .slick-track{
                        display:flex;
                        gap:0px;
                    }
                }
            }
            
        }
    }
`