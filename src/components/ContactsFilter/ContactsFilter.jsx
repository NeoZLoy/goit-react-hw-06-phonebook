import { Form, Formik, Field } from "formik"
import { StyledFilter, StyledTitle } from "./ContactsFilter.styled"

export const ContactsFilter = ({filter, onNameFilter}) => {
    return(
        <StyledFilter>
            <StyledTitle>Find contacts by name:</StyledTitle>
            <Formik
            initialValues={{
                searchName:"",
            }}
            >
                <Form onChange={(value) => onNameFilter(value.target.value)}>
                    <Field name="searchName" placeholder="Contact name to search..." />
                </Form>
            </Formik>
        </StyledFilter>
        
    )
}