import { styled } from "styled-components";
import { Field, Form, ErrorMessage} from 'formik';

const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 8px;
`

const StyledField = styled(Field)`
width: 155px;
`

const StyledLabel = styled.label`
:nth-child(1){
margin-right: 4px;

}
`

const StyledButton = styled.button`
border: none;
background-color: #86E9FF;
width: 150px;
height: 40px;
`
const StyledError = styled(ErrorMessage)`
color: red;
margin-left: 4px;
`

export {StyledForm, StyledField, StyledLabel, StyledButton, StyledError}