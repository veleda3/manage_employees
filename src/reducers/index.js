import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  Auth: AuthReducer,
  EmployeeForm: EmployeeFormReducer,
  Employees: EmployeeReducer
});
