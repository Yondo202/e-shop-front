import React from 'react'
import styled from 'styled-components';
import ReactSlider from "react-slick";
import InitialTitle from "components/titles/InitialTitle"
import InitialCard from "components/Cards/InitialCard"

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
    dots:false
};

const Productslider = ({ data }) => {
    return (
        <Container className="container-xl">
            {/* <div className="title">{data.name}</div> */}
            <InitialTitle data={data.name} />
            <ReactSlider {...settings}>
                {data.products.map((el,ind)=>{
                    return(
                        <InitialCard key={ind} data={el} />
                    )
                })}
            </ReactSlider>
        </Container>
    )
}

export default Productslider


const Container = styled.div`
    margin-bottom:20px;
    .slick-list{
        padding: 15px 0px;
    }
`

