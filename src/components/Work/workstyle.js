import styledComponents from "styled-components";

export const WorkPage = styledComponents.div`
    height: auto;
    padding: 50px 0;
    overflow: hidden;
   
`

export const H2 = styledComponents.h2`
    font-size: 60px; 
    text-align:center;
    color:#8f6220;
`

export const Span = styledComponents.span `
    font-weight: normal
`

export const WorkPart = styledComponents.div `
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: ${ props => props.first === 1 ? '0' : "5%" }
`
export const Icone = styledComponents.i`
    color: #888;
    margin-bottom: 20px;
`

export const PartTitle = styledComponents.h4`
    font-size: 25px;
    color:#FF9800 ;
    margin-bottom: 20px
`

export const Hr = styledComponents.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const PartDesc = styledComponents.p`
    font-size: 14px;
    color: #888;
    padding: 20px
`