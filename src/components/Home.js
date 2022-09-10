import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Footer from './Footer'


function Home() {
  return (
    <Container>
        <Section
            title = "Model 3"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-3.jpg"
            leftbtnText = "Custom Order"
            rightBtnText= "Existing Inventory"
        />
        <Section
            title = "Model Y"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-y.jpg"
            leftbtnText = "Custom Order"
            rightBtnText= "Existing Inventory"
        />
        <Section
            title = "Model S"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-s.jpg"
            leftbtnText = "Custom Order"
            rightBtnText= "Existing Inventory"
        />
        <Section
            title = "Model X"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-x.jpg"
            leftbtnText = "Custom Order"
            rightBtnText= "Existing Inventory"
        />
        <Section
            title = "Solar Panels"
            description = "Lowest Cost Solar Panels in America"
            backgroundImg = "solar-panel.jpg"
            leftbtnText = "Order Now"
            rightBtnText= "Learn More"
        />
        <Section
            title = "Solar Roof"
            description = "Produces Clean Energy From Your Roof"
            backgroundImg = "solar-roof.jpg"
            leftbtnText = "Order Now"
            rightBtnText= "Learn More"
        />
        <Section
            title = "Accessories"
            description = ""
            backgroundImg = "accessories.jpg"
            leftbtnText = "Shop Now"
        />
        <Footer/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
    scroll-snap-type: y mandatory;
`