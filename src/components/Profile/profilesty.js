import styledComponents from "styled-components"

export const MainProfile = styledComponents.div`
    padding: 50px 0;
    overflow: hidden;
`

export const FirProfile = styledComponents.div`
    width: 50%;
    float: left;
    @media (max-width:700px){
     width:100%;
     text-align:center;
     margin-bottom:30px;
    }
`
export const Title = styledComponents.h2`
font-size: 40px; 
margin:auto;
color:#8f6220;
`
export const TitleSpan = styledComponents.span`
  font-weight:normal;
`
export const Ul = styledComponents.ul`
    list-style: none;
    color:#FFF;
   
`

export const Li = styledComponents.li`
    margin-bottom: 8px
`

export const LiSpan = styledComponents.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const WebSpan = styledComponents.span`
    font-weight: normal;
    color: #eb5424
`

export const Skills = styledComponents.div`
    width: 50%;
    float: left;
    @media (max-width:750px){
        width:100%;
        text-align:center;
        margin-bottom:30px;
       }
`
export const HSkills = styledComponents.h2`
    font-size: 40px; 
    margin:auto;
    color:#8f6220;
`

export const HSpan = styledComponents.span`
    font-weight: normal;
    display: inline;
`

export const PSkills = styledComponents.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
    color:#FFF;
`

export const Bar = styledComponents.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const BarTitle = styledComponents.span`
    float: left;
    color:#FFF;
`

export const BarPerc = styledComponents.span`
    float: right;
    margin-right: 100px;
    color:#FFF;
`

export const BarParent = styledComponents.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const ParentSpan = styledComponents.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => props.width === 1 ? '100%' : props.width === 2 ? '90%' : props.width === 3 ? '80%' : ''};
  
`


