import React from 'react'
import styled from 'styled-components'

const InitialTitle = ({data}) => {
    return (
        <Container>
           <div className="text">{data}</div>
        </Container>
    )
}

export default InitialTitle

const Container = styled.div`
    padding:3px 0px;
    // font-size: 1.6em;
    font-size: calc(15px + (21 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 500;
    // text-transform:uppercase;
    text-align:center;
    display:flex;
    justify-content:center;
    .text{
        position:relative;
        &:before{
            position: absolute;
            right:-75px;
            content: "";
            width: 60px;
            height: 1px;
            background: rgba(0,0,0,0.6);
            top: 48%;
        }
        &:after{
            left:-75px;
            position: absolute;
            content: "";
            width: 60px;
            height: 1px;
            background: rgba(0,0,0,0.6);
            top: 48%;
        }
        @media (max-width:768px){
            &:before{
                display:none;
            }
            &:after{
                display:none;
            }
        }
    }
    
`
