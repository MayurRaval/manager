import { EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,LOGIN_USER } from './types';
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

  dispatch({ type : LOGIN_USER });

  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => loginUserSuccess(dispatch,user))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user => loginUserSuccess(dispatch,user))
            .catch(() => loginUserfail(dispatch));
         })
  };
};

const loginUserfail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const loginUserSuccess = (dispatch,user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
