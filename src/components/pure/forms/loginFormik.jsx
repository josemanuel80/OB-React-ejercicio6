import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import { DataContext } from '../../../context/provider';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Loginformik = () => {
  const { dataRegister, setLoggedIn } = useContext(DataContext);
  const [incorrectLogin, setIncorrectLogin] = useState(false);

  const initialCredentials = {
    email: '',
    password: '',
  };

  /* Function for validate the user */
  const validateUser = (values) => {
    const found = dataRegister.find((e) => {
      return e.email === values.email && e.password === values.password;
    });
    if (found) {
      setLoggedIn(true);
      history.push('/');
    } else {
      setIncorrectLogin(true);
    }
  };

  const history = useHistory();

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        // *** Initial values that the form will take
        initialValues={initialCredentials}
        // *** Yup Validation Schema ***
        validationSchema={loginSchema}
        // ** onSubmit Event
        onSubmit={(values) => {
          /*  await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          // We save the data in the localstorage
          await localStorage.setItem('credentials', values); */
          validateUser(values);
          /*     history.push('/profile'); */
        }}
      >
        {/* We obtain props from Formik */}
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
            />

            {/* Email Errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            {/* Password Errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}
            <button type="submit">Login</button>
            {/*  {isSubmitting ? <p>Login your credentials...</p> : null} */}

            {/* Manage if the login user is incorrect */}
            {incorrectLogin && <p>The user don't exist, please register.</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Loginformik;
