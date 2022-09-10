import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Section({title, description, leftbtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage= {backgroundImg}>
        
          <ItemText>
              <Fade bottom>
                <h1>{title}</h1>
              </Fade>
              <Fade bottom>
                <p>{description}</p>
              </Fade>
          </ItemText>
        
        <Buttons>
            <ButtonGroup>
                <Slide left>
                    <LeftButton>
                      {leftbtnText}
                    </LeftButton>
                </Slide>
                <Slide right>
                  {rightBtnText && 
                      <RightButton>
                      {rightBtnText}
                  </RightButton>
                  }
                </Slide>
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image: url("/images/model-3.jpg");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}

    h1{
      font-weight:900;
      letter-spacing: 0.6px;
      margin-top: 35px;
    }
    p{
      margin-top:6px;
      
    }
    z-index:1;
    scroll-snap-align:start;
`

const ItemText = styled.div`
    padding-top:20vh;
    text-align: center;

`
const Buttons = styled.div`
    display:flex;
    flex-direction: column;
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px;
    @media (max-width: 600px){
      flex-direction:column;
      
    }

`
const LeftButton = styled.div`
    background-color: #171a20;
    height: 40px;
    width: 256px;
    color:#fff;
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius: 100px;
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: auto 12px;

    @media (max-width: 840px){
      width: 200px;
    }
    @media (max-width: 600px){
      margin: 8px auto;
    }

  
`
const RightButton = styled(LeftButton)`
    background-color: #f4f4f4;
    color: #393c41;
    font-weight:bold;
`

const DownArrow = styled.img`
    margin-top:20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    
`