import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
height: auto;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: bold;
`

const Announcement = () => {
    return (
        <Container>
            Hurry Up!!! Sale is Live Now
        </Container>
    )
}

export default Announcement
