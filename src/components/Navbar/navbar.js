import React from 'react'
import { Link } from 'react-router-dom';
import {NavSec , ContainerNav , Logo , Input , Label , HLogo , UlList , ListItem , LinkItem} from './navStyle'

const Navbar = () => {
  
  return (
    <NavSec>
              
    <ContainerNav>
        
        <Logo>
            <HLogo>Ultra Profile</HLogo>
        </Logo>
        <Label for="nav"></Label>
        
        <UlList>
            <ListItem><Link to="/" className='navLink'>Home</Link></ListItem>
            <ListItem><LinkItem to="#">News</LinkItem></ListItem>
            <ListItem><LinkItem to="#">Gallery</LinkItem></ListItem>
            <ListItem><LinkItem to="#">Resume</LinkItem></ListItem>
            <ListItem><LinkItem to="#">About</LinkItem></ListItem>
            <ListItem><Link to="/contact" className='navLink'>Contact</Link></ListItem>
        </UlList>
        
    </ContainerNav>
    
<script src='../../../public/js/main.js'></script>
</NavSec>
  );
}

export default Navbar;
