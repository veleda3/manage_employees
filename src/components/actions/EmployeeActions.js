import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  // using redux thunk below to now use the dispatch method
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.EmployeeList({ type: 'reset' });
    });
  };
};

export const employeeSafe = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  // using redux thunk below to now use the dispatch method
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
      Actions.EmployeeList({ type: 'reset' });
    });
  };
};


export const employeeFetch = () => {
  const { currentUser } = firebase.auth();
  // using redux thunk below to now use the dispatch method
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  // using redux thunk below to now use the dispatch method
  return () => {
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.EmployeeList({ type: 'reset' });
      });
    };
};
