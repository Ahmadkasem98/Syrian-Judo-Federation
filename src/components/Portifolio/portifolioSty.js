import styledComponents from 'styled-components';

export const Portfolio = styledComponents.div`
    padding-top: 20px; 
    overflow: hidden;
`

export const H2 = styledComponents.h2`
    text-align: center;
    font-size: 35px;
    color:#8f6220;
`

export const Ul = styledComponents.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0
`

export const Li = styledComponents.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    background:${props => props.active ? "#FF9800 " : ''};
    color:#fff;
`
export const Box = styledComponents.div`

`

export const DivBox = styledComponents.div`
    width: 25%;
    height:220px;
    float: left;
    font-size: 0;
    position: relative;
    &:hover > p {
        opacity: 1
    }
    @media (max-width:800px){
        width:50%;
    }
    
`

export const Img = styledComponents.img`
    width: 100%;
    height:100%;
`

export const Overlay = styledComponents.p`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background:#8888885d;
    transition: 0.3s;
    opacity: 0
`

export const OverlaySpan = styledComponents.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #888;
    font-size: 15px;
`
