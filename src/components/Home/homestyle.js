import styledComponents from 'styled-components'

export const HomePape = styledComponents.div`
height: 500px;
background: url('images/Home/1.jpg');
background-size: cover;
background-position: center;
text-align: center;
position: relative;
`

export const Overlay = styledComponents.div`
background-color: rgba(0,0,0, 0.6);
position: absolute;
width: 100%;
height: 100%;
left: 0;
top: 0;

`

export const HomeInformation = styledComponents.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
color: white;
text-align: center;
width: 95%;
`

export const HomeTitle = styledComponents.h2 `
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px

`
export const Span = styledComponents.span `
color:#8f6220;
`
export const HomeInfo = styledComponents.h4 `
    font-size: 35px;
    margin-bottom: 40px;
    color:#999;
`

export const HomeDesc = styledComponents.p `
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 10px;

    @media (max-width:700px){
        display:none;
       }


`

export const SpanDesc = styledComponents.span `
    color: #000
`

export const HomeBtn = styledComponents.button `
    background:#8f6220;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold

    &:hover {
    background: #fff;
    color: #eb5424
    }
`