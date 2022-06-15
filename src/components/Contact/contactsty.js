import styledComponents from 'styled-components';


export const Drop = styledComponents.div`
    padding: 50px 0;
    text-align: center;
    border-top:1px solid #888;
`

export const DropTitle = styledComponents.h2`
    font-size: 60px;
    margin-bottom: 30px;
    color:#8f6220;
`

export const Span = styledComponents.span`
    font-weight: normal
`

export const Form = styledComponents.form`
    width: 70%;
    margin: auto;
`

export const Input = styledComponents.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
`

export const FormInput = styledComponents.div`
    overflow: hidden
`

export const InputText = styledComponents(Input)`
    float: left;
    width: 49%;
`

export const InputEmail = styledComponents(Input)`
    float: right;
    width: 49%;
`

export const InputExp = styledComponents(Input)`
    width: 100%;
`

export const TextArea = styledComponents.textarea`
    width: 100%;
    outline: 0;
    background: #ccc
`

export const InputSub = styledComponents(Input)`
    width: 60%;
    background:#FF9800;
    border: 1px solid #ccc;
    color: #fff;
    cursor: pointer
`
