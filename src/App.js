import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import '@firebase/auth';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm'
import Router from './Router';

class App extends Component<Props> {

  componentWillMount(){
    const config = {
       apiKey: 'AIzaSyB4ZzZE2qMyPBjjUf8YxxzidM9c6Viszq0',
       authDomain: 'manager-59ef7.firebaseapp.com',
       databaseURL: 'https://manager-59ef7.firebaseio.com',
       projectId: 'manager-59ef7',
       storageBucket: 'manager-59ef7.appspot.com',
       messagingSenderId: '586694789203'
     };

     firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
