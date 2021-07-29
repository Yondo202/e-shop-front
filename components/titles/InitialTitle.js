import React from 'react'
import styled from 'styled-components'

const InitialTitle = ({data}) => {
    return (
        <Container>
            {data}
        </Container>
    )
}

export default InitialTitle

const Container = styled.div`
    padding:3px 0px;
    // font-size: 1.6em;
    font-size: calc(15px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 500;
    // text-transform:uppercase;
`
