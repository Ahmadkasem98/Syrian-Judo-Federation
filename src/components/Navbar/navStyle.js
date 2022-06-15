import styledComponents from "styled-components";

export const NavSec = styledComponents.div`
`
export const ContainerNav = styledComponents.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
margin: auto;
`

export const Logo = styledComponents.div`
width: 50%;
font-size: 23px;
font-family: sans-serif;
color:#FFF;
`

export const HLogo = styledComponents.h2`
`

export const UlList = styledComponents.ul `
display: none;
@media (min-width:892px){
    display:flex;
   }
`
export const ListItem = styledComponents.li`
margin-right: 20px;
cursor: pointer;
`

export const LinkItem = styledComponents.a`
text-decoration: none;
color: #FFF;
font-size: 20px;


&:hover {
    color: #8f6220;
}
`
export const Input = styledComponents.input`
position: absolute;
display:block;
top: 13px;
right: 25px;
display: none

@media (min-width:892px){
    display:none;

}
&:checked ~ UlList {
    display: block;
  }
`
export const Label = styledComponents.label`
  position: absolute;
  top: 25px;
  right: 25px;
  display: block;
  width: 15px;
  height: 15px;
  background: url('../images/Navbar/open.png') no-repeat ;
  background-size: cover;
  padding: 20px;
  cursor: pointer;

  @media (min-width:892px){
    display:none;

}
`
