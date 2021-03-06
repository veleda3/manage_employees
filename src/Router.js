import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 62 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please login" />
      </Scene>
      <Scene key="main">
        <Scene
          key="EmployeeList"
          component={EmployeeList}
          title="Employees"
          rightTitle="Add"
          onRight={() => Actions.EmployeeCreate()}
        />
        <Scene key="EmployeeCreate" component={EmployeeCreate} title="Create employee" />
        <Scene key="EmployeeEdit" component={EmployeeEdit} title="Edit employee" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
