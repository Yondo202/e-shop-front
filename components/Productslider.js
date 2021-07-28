import React, { useRef  } from 'react'
import styled from 'styled-components';
import ReactSlider from "react-slick";
import InitialTitle from "components/titles/InitialTitle"
import InitialCard from "components/Cards/InitialCard"
import { CustomArrow } from "@/miscs/CustomComp";

const settings = {
    // className: "center",
    // centerMode: true,
    dots: true,
    infinite: true,
    speed: 600,
    // fade: true,
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


const Productslider = ({ data }) => {
    const sliderRef = useRef();
    return (
        <Container className="container-xxl">
            {/* <div className="title">{data.name}</div> */}
            <InitialTitle data={data.name} />
            <div className="sliderParent">
                <ReactSlider ref={sliderRef} {...settings}>
                    {data.products.reverse().map((el,ind)=>{
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

export default Productslider


const Container = styled.div`
    margin-bottom:20px;
    .sliderParent{
        position:relative;
        .slick-list{
            padding: 15px 0px;
            .slick-active{
                padding-right:18px;
            }
        }
    }
`