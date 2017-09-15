import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router'


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBY3ycnhKJeZv-MBqBlpt8U6K6YCjQZWjQ',
      authDomain: 'employee-management-aa3f3.firebaseapp.com',
      databaseURL: 'https://employee-management-aa3f3.firebaseio.com',
      projectId: 'employee-management-aa3f3',
      storageBucket: '',
      messagingSenderId: '162734149306'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
