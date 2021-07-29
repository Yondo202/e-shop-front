import React, { useState, useEffect } from 'react'
import ReactSlider from "react-slick";
import styled from 'styled-components';
import minimize from "@/miscs/minimize"
import { CustomArrow, SkeletonHome } from "@/miscs/CustomComp";


const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    // fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    arrows: false,
    dots:false,
    autoplay: true,
    autoplaySpeed: 3000
};

const Slider = ({ data }) => {
    const [ time, setTime ] = useState(false);
    const sliderRef = React.useRef();
    useEffect(()=>{
        setTimeout(() => {
            setTime(true);
        }, 700)
    },[])
    return (
        <Container >
            {time?<ReactSlider ref={sliderRef} {...settings}>
                {data.image.map((el,ind)=>{
                    return(
                        <div key={ind} className="ImgPar">
                            <img src={process.env.serverUrl+el.url} alt="slider-photos" />
                        </div>
                    )
                })}
            </ReactSlider>:<SkeletonHome />}
            <CustomArrow sliderRef={sliderRef} />
        </Container>
    )
}

export default Slider

const Container = styled.div`
    width:100%;
    margin-bottom: 3rem;
    cursor:grab;
    position:relative;
    .ImgPar{
        width: 100%;
        overflow: hidden;
        outline: none !important;
        img{
            max-height: 41em;
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
`
