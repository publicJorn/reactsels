import React from 'react'
import { Form, Field, FieldArray, ErrorMessage } from 'formik'

const MyForm = ({ id }) => (
  <Form className="Formik-Form">
    {/* <FieldArray>
      <label>
        <Field name="Gender" type="radio" value="F" /> Ms.
      </label>
      <label>
        <Field name="Gender" type="radio" value="M" /> Mr.
      </label>
    </FieldArray> */}

    <div className="Formik-Field">
      <label htmlFor={`${id}-name`} className="Formik-Label">
        Name
      </label>
      <Field name="name" />
      <ErrorMessage name="name" component="div" className="Formik-Error" />
    </div>

    <div className="Formik-Field">
      <label htmlFor={`${id}-email`} className="Formik-Label">
        E-mail *
      </label>
      <Field name="email" type="email" />
      <ErrorMessage name="email" component="div" className="Formik-Error" />
    </div>

    <div className="Formik-Field">
      <label>
        <Field name="agree" type="checkbox" className="Formik-Checkbox" /> I agree to all the things
      </label>
      <ErrorMessage name="agree" component="div" className="Formik-Error" />
    </div>

    <button type="submit">Go!</button>
  </Form>
)

export default MyForm
