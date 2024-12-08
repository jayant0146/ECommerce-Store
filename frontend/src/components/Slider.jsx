import React, { useState } from 'react'
import { styled } from 'styled-components'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { sliderItems } from '../data';

const Container = styled.div`
padding: 1rem;
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5; 
z-index: 2;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${(props) => props.sliderIndex * -100}vw);
transition: all 1s ease;
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`

const ImgContainer = styled.div`
flex:1;
height: 100%;
`
const Image = styled.img`
height: 80%;
`

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`

const Title = styled.h1`
font-size: 60px;
`
const Desc = styled.p`
font-size: 20px;
margin: 70px 0px;
letter-spacing: 4px;
font-weight: bold;
`
const Button = styled.button`
padding: 10px;
border-radius: 10%;
font-size: 20px;
cursor: pointer;
`

const Slider = () => {
    const [sliderIndex, setsliderIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setsliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2)
        } else {
            setsliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}> <KeyboardArrowLeftIcon /></Arrow>
            <Wrapper sliderIndex={sliderIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} style={{ width: "100%", height: "80%" }} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title> {item.title}</Title>
                            <Desc> {item.desc}</Desc>
                            <Button> SHOP NOW </Button>
                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}> <KeyboardArrowRightIcon /></Arrow>
        </Container>
    )
}

export default Slider
