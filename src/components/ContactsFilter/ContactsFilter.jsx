import { Form, Formik, Field } from "formik"
import { StyledFilter, StyledTitle } from "./ContactsFilter.styled"
import { useDispatch, } from "react-redux"
import { nameFilter } from "redux/filtersSlice";

export const ContactsFilter = () => {
     
    const dispatch = useDispatch();

    return(
        <StyledFilter>
            <StyledTitle>Find contacts by name:</StyledTitle>
            <Formik
            initialValues={{
                searchName: "",
            }}
            >
                <Form onChange={(value) => dispatch(nameFilter(value.target.value))}>
                    <Field name="searchName" placeholder="Contact name to search..." />
                </Form>
            </Formik>
        </StyledFilter>
        
    )
}