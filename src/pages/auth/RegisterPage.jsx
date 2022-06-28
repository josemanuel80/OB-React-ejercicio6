import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Registerformik from '../../components/pure/forms/registerFormik';

const Registerpage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Registerformik></Registerformik>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Registerpage;
