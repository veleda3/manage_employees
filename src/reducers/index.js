import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  Auth: AuthReducer,
  EmployeeForm: EmployeeFormReducer
});
