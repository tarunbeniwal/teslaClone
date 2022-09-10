import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';


function Header() {
    const [SideBarStatus, setSideBarStatus] = useState(false);
return (
    
    <Container>
        <Top>
            <a id='top' href='/#'>Read Tesla's 2021 Impact Report</a>
        </Top>
        <Main>
            <a href="/#">
                <img id='logo' src='\images\logo.svg' alt='TESLA'/>
            </a>
            <Menu>
                <p><a href='/#'>Model 3</a></p>
                <p><a href='/#'>Model Y</a></p>
                <p><a href='/#'>Model S</a></p>
                <p><a href='/#'>Model X</a></p>
                <p><a href='/#'>Solar Roof</a></p>
                <p><a href='/#'>Solar Panels</a></p>
            </Menu>
            <RightMenu>
                <a href="/#">Shop</a>
                <a href="/#">Account</a>
                <button onClick = {() =>setSideBarStatus(true)}>Menu</button>
            </RightMenu>
            <SideBar show={SideBarStatus}>
                <CloseWrapper>
                    <CustomClose onClick= {() => setSideBarStatus(false)} />
                </CloseWrapper>
                <List>
                    <li><a href='/#'>Existing Inventory</a></li>
                    <li><a href='/#'>Used Inventory</a></li>
                    <li><a href='/#'>Trade-In</a></li>
                    <li><a href='/#'>Test Drive</a></li>
                    <li><a href='/#'>Insurance</a></li>
                    <li><a href='/#'>Cybertruck</a></li>
                    <li><a href='/#'>Roadster</a></li>
                    <li><a href='/#'>Semi</a></li>
                    <li><a href='/#'>Charging</a></li>
                    <li><a href='/#'>Powerwall</a></li>
                    <li><a href='/#'>Commercial Energy</a></li>
                    <li><a href='/#'>Utilities</a></li>
                    <li><a href='/#'>Find Us</a></li>
                    <li><a href='/#'>Support</a></li>
                    <li><a href='/#'>Investor Relations</a></li>
                </List>
            </SideBar>
        </Main>
    </Container>
  )
}

export default Header

const Container = styled.div`
    position:fixed;
    z-index:1;
`
const Top = styled.div`
    background-color:#fff;
    width:100vw;
    text-align:center;
    padding: 14px;
    text-decoration:underline;
    font-size:15px;
    
`
const Main = styled.div`
    

    display:flex;
    min-width: 60px;
    position: fixed;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    padding-top:16px;
    left:0;
    right:0;
    z-index:10000;

    img{
        width:120px;
        height:16px;
    }


`
const Menu = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    flex:1;
    padding-left:120px;
    
    
    p{  
        font-size:14px;
        font-weight:600;
        padding: 0 16px;
        flex-wrap: nowrap;
        letter-spacing:1.02px;
    }
    @media (max-width: 1200px){
        a{
            display:none;
        }
    }
`

const RightMenu = styled.div`

    a{
        font-weight:600;
        padding: 0 10px;
        letter-spacing:1.02px;
        margin-right:10px;
        flex-wrap: nowrap;
        font-size:14px;
    }
    @media (max-width: 1200px){
        a{
            display:none;
        }
    }
    button{
        font-weight:600;
        background-color:transparent;
        border:none;
        font-size: 14px;
        cursor:pointer;
    }

`
const SideBar = styled.div`
    overflow-y:scroll;
    
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    background:#fff;
    width:300px;
    list-style: none;
    padding:30px 20px 120px 50px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s ease;
    li{
        padding: 13px 0;
        font-size: 13px;
        font-weight:600;
        letter-spacing: 1.02px;
    }

    


`
const CustomClose = styled(CloseIcon)`
        cursor:pointer;
        
        
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;

`

const List = styled.div`
    margin-top: 25px;
    z-index:100;
`