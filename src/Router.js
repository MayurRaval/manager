import React from 'react';
import { Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return(
      <Router>
        <Scene key="root">
          <Scene key="Login" component={LoginForm} title="Please Login" initial/>
          <Scene key="employeelist" component={EmployeeList} title="List of employee"/>
        </Scene>
      </Router>
  );
};

export default RouterComponent;
