import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import '@firebase/auth';
import LoginForm from './components/LoginForm'

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}

export default App;
