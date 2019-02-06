import { EMAIL_CHANGED,PASSWORD_CHANGED } from './types';
import firebase from '@firebase/app';
import '@firebase/auth';

export const emailChanged = (text) =>{
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChange = (text) =>{
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then( user => console.log(user));
};
