import styledComponents from 'styled-components'


export const Creative = styledComponents.div`
    height: 500px;
    background: url('images/creative/2.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow:hidden;
    position:relative;
`
export const Overlay = styledComponents.div`
background-color: rgba(0,0,0, 0.4);
position: absolute;
width: 100%;
height: 100%;
left: 0;
top: 0;
`
export const Info = styledComponents.div`
    padding-top: 30px;
    margin: auto 0;
    width: 50%;
    float: right;

`

export const Title = styledComponents.h2`
    font-weight: bold;
    font-size: 50px;
    color:#8f6220;

`

export const SpanTitle = styledComponents.span`
    font-weight: normal;
    color:#FFF;
`

export const Desc = styledComponents.p`
    color: #999;
    margin-bottom: 15px;
    line-height: 1.8;
    @media (max-width:700px){
        font-size:15px;
        margin-bottom:50px;
       }
`
export const SecDesc = styledComponents.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
    @media (max-width:700px){
        display:none;
       }
`