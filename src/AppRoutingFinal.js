import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from './context/provider';

import Loginpage from './pages/auth/LoginPage';
import Dashboardpage from './pages/dashboard/DashBoard';
import Notfoundpage from './pages/404/NotFoundPage';
import RegisterPage from './pages/auth/RegisterPage';

function AppRoutingFinal() {
  const { loggedIn } = useContext(DataContext);
  // TODO: Change to value from sessionStorage (or something dinamic)
  console.log('logedin', loggedIn);
  return (
    <Router>
      {/* Route Switch */}
      <Switch>
        {/* Redirections to protect our routes */}
        <Route exact path="/">
          {loggedIn ? (
            <Redirect from="/" to="/dashboard" />
          ) : (
            <Redirect from="/" to="/login" />
          )}
        </Route>
        {/* Login Route */}
        <Route exact path="/login" component={Loginpage} />
        {/* DashBoard Route */}
        <Route exact path="/dashboard">
          {loggedIn ? <Dashboardpage /> : <Redirect from="/" to="/login" />}
        </Route>
        <Route exact path="/register" component={RegisterPage}></Route>
        <Route component={Notfoundpage} />
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
