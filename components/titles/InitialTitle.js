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
    font-size: ${props=>props.theme.fontSize3};
    font-weight: 600;
    text-transform:uppercase;
`
