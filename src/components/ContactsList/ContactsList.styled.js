import { styled } from "styled-components";

const StyledList = styled.ul`
padding: 0;
margin: 0;
`

const StyledContactItem = styled.li`
display: flex;
align-items: center;
gap: 4px;
margin-bottom: 8px;

:nth-child(1){
    font-size: 16px;
}
:nth-child(2){
    font-weight: 700;
}
`

const StyledDeleteButton = styled.button`
border: none;
background-color: #FF6666;
margin-left: 8px;
height: 30px;
cursor: pointer;
`


export { StyledContactItem, StyledDeleteButton, StyledList }