// Trying out the two main ways to work with Formik. As component and as higher-order component.
import React, { Fragment } from 'react'
import { Formik, withFormik } from 'formik'

import Nav from '../../components/nav/Nav'
import MyForm from './Form'
import { initialValues, validate, onSubmit } from './formActions'

import './Formik.css'

// Composing MyForm using HOC `withFormic`
const MyFormikForm = withFormik({
  mapPropsToValues: () => initialValues,
  onSubmit,
  validate
})(MyForm)

export default () => (
  <Fragment>
    <Nav />

    <div className="Formik-Wrapper">
      {/* Formik as component.
          This is probably the easiest method. It gives less options in MyForm itself and it's
          a bit more verbose in the JSX here, but it probably works for most situations.
      */}
      <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
        <MyForm id="form1" />
      </Formik>

      {/* Formik as HOC
          This gives more fine-tuning abilities in MyForm itself and keeps JSX clean.
          But you need to do more yourself and config is a bit more verbose.
       */}
      <MyFormikForm id="form2" />
    </div>
  </Fragment>
)
