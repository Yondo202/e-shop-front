import React from 'react'
import ReactSlider from "react-slick";
import styled from 'styled-components';
import minimize from "@/miscs/minimize"
import { CustomArrow } from "@/miscs/CustomComp";

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
    const sliderRef = React.useRef();
    return (
        <Container >
            <ReactSlider ref={sliderRef} {...settings}>
                    {/* <div className="ImgPar">
                        <img src="https://cdn5.shoppy.mn/img/73794/2560x0xwebp/Main2.jpg?h=43828d3d39c8764bfd647f4ef4cc7e00509a5739" />
                    </div>
                        <div className="ImgPar">
                        <img src="https://cdn5.shoppy.mn/img/74537/5120x0xwebp/Tusgai-uureg-Main-banner.jpg?h=0f266d55dd9ca631aaa7ab31c092270136cabab6" />
                    </div> */}
                {data.image.map((el,ind)=>{
                    return(
                        <div key={ind} className="ImgPar">
                            <img src={process.env.serverUrl+el.url} alt="slider-photos" />
                        </div>
                    )
                })}
            </ReactSlider>
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
        // height: 41em;
        overflow: hidden;
        outline: none !important;
        img{
            max-height: 41em;
            // max-height:100%;
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
`
