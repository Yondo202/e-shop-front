import React, { useRef  } from 'react'
import styled from 'styled-components';
import ReactSlider from "react-slick";
import InitialTitle from "components/titles/InitialTitle"
import InitialCard from "components/Cards/InitialCard"
import { CustomArrow } from "@/miscs/CustomComp";

const Productslider = ({ data }) => {
    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: data?.products > 5,
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
                infinite: data?.products > 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                infinite: data?.products > 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll:2,
                infinite: data?.products > 2,
              }
            }
        ]
    };

    return (
        <Container className="container-xxl">
            {/* <div className="title">{data.name}</div> */}
            <InitialTitle data={data.name} />
            <div className="sliderParent">
                <ReactSlider ref={sliderRef} {...settings}>
                    {data.products.reverse().map((el,ind)=>{
                        return(
                            <InitialCard center={true} key={ind} data={el} />
                        )
                    })}
                </ReactSlider>
                <CustomArrow sliderRef={sliderRef} />
            </div>
        </Container>
    )
}

export default Productslider


const Container = styled.div`
    margin-bottom:30px;
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
        
    }
    @media (max-width:768px){
        .sliderParent{
            .slick-slider{
                margin-left:0px;
                margin-right:0px;
                .slick-list{
                    .slick-track{
                        display:flex;
                        gap:5px;
                    }
                }
            }
        }
    }
`