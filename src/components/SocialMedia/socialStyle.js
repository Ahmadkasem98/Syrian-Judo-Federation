import styledComponents from 'styled-components'


export const SocialMedian = styledComponents.div`
    height: auto;
    overflow: hidden;
`

export const Social = styledComponents.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props => props.item === 1 ? '#FF9800' : props.item === 2 ? '#8f6220' : props.item === 3 ? '#9f6330' : ''};

    @media (max-width:700px){
        width:100%;
        text-align:center;
       }
`

export const Icon = styledComponents.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top:23px;
`

export const P = styledComponents.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    float:left;
`

export const Span = styledComponents.span`
    display: block;
    margin-bottom: 8px;

`

export const Info = styledComponents.span`
    font-weight: normal;
    text-transform: capitalize;
`