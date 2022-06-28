import React from 'react';
import { Link } from 'react-router-dom';
import Loginformik from '../../components/pure/forms/loginFormik';

const Loginpage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Loginformik></Loginformik>

      <Link to={'/register'}>Register</Link>
    </div>
  );
};

export default Loginpage;
