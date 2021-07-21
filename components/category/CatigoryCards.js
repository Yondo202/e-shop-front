import React from 'react'
import InitialCard from "@/components/Cards/InitialCard"
import styled from 'styled-components'

const CatigoryCards = ({ title, products }) => {
    return (
        <Container>
            <div className="title">{title}</div>
            <div className="row">
                {products.map((el,ind)=>{
                    return(
                        <div className="col-md-3 col-sm-4 col-6">
                            <InitialCard key={ind} center={true} data={el} catigory={true} />
                        </div>
                    )
                })}
            </div>
            
        </Container>
    )
}

export default CatigoryCards

const Container = styled.div`
    background-color: #ffffff;
    padding: 0px 20px;
    padding-bottom: 40px;
    color: ${props=>props.theme.textColor};
    .title{
        font-weight: 500;
        font-size: 17px;
        padding: 15px 0px;
    }
`
