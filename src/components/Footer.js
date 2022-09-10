import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Foot>
        <a href='/#'>Tesla &copy; 2022</a>
        <a href='/#'>Privacy & Legal</a>
        <a href='/#'>Vehicle Recalls</a>
        <a href='/#'>Contact</a>
        <a href='/#'>Careers</a>
        <a href='/#'>News</a>
        <a href='/#'>Engage</a>
        <a href='/#'>Location</a>
        
    </Foot>
  )
}

export default Footer

const Foot = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
    a{
        font-size:13px;
        padding:12px;
    }


`