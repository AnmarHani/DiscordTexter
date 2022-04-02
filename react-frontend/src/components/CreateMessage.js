import React from 'react'

import { Formik, Form, Field, ErrorMessage } from "formik";

import { gql } from "graphql-request";

import { useMutation } from "react-query";

import axios from "axios"

import { useNavigate } from 'react-router-dom';

import styled from 'styled-components'

const FormWrapper = styled.div`
    margin-top:10em;
`

const ButtonsWrapper = styled.div`
    margin: 2em;
    display:flex;
    justify-content: space-between;
`;

const CreateMessage = () => {
    let navigate = useNavigate();

    const mutation = useMutation(query => {
        return axios({
            url: "https://discord-texter-backend.herokuapp.com/graphql/",
            method: "POST",
            data: {
              query: query
            }
          }).then(response => response.data.data).catch(error => error)
    })

    return (
        <div>
            <Formik
                initialValues={{ body: "", responses: ""}}
                validate={(values) => {
                    const errors = {};
                    if (!values.body) {
                    errors.body = "Required";
                    }

                    if (!values.responses) {
                        errors.responses = "Required";
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    const CREATE_MESSAGE_MUTATION = gql`
                        mutation CreateMessage {
                            createMessage(message: {
                            body: "${values.body}",
                            response: "${values.responses}"
                            }) {
                                id
                                body
                                response
                            }
                        }
                    `
                    mutation.mutate(CREATE_MESSAGE_MUTATION)
                    navigate('/messages')
                }}
            >
                {({ isSubmitting, dirty, handleReset }) => (
                    <FormWrapper>
                        <h1 class="display-5 mb-5">Create A Message</h1>
                        <Form>
                            <div class="mb-3">
                                <label class="form-label" htmlFor="body">Message</label>
                                <Field type="text" name="body" class="form-control"/>
                                <ErrorMessage name="body" component="span" class="form-text text-danger"/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label" htmlFor="responses">Response</label>
                                <Field type="text" name="responses" class="form-control"/>
                                <ErrorMessage name="responses" component="span" class="form-text text-danger"/>
                            </div>
                            <ButtonsWrapper>
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    disabled={!dirty || isSubmitting}
                                    class="btn btn-outline-primary btn-lg"
                                >
                                    Reset
                                </button>
                                <button type="submit" disabled={isSubmitting} class="btn btn-primary btn-lg">
                                    Submit
                                </button>
                            </ButtonsWrapper>
                        </Form>
                    </FormWrapper>
                )}
            </Formik>
        </div>
    )
}

export default CreateMessage