// import {HOST} from '../global/ApiUrls';
// import {normalizeProfile} from '../utils/normalize';
import {BackHandler} from 'react-native';
//import login from '../dummyData/login';

import {Alert, AsyncStorage} from 'react-native';
import {callNavigationTabApp} from '../../App';

import { callLoginScreen } from '../../App';

export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER_LOGIN_INFO = 'SET_USER_LOGIN_INFO';
export const USER_START_AUTHORIZING = 'USER_START_AUTHORIZING';
export const USER_AUTHORIZED = 'USER_AUTHORIZED';
export const USER_NO_EXIST = 'USER_NO_EXIST';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOG_OUT = 'LOG_OUT';

export function setUserLoginInfo(userLogin) {
  return {type: SET_USER_LOGIN_INFO, userLogin};
}

export function setUserEmail(email) {
  return {type: SET_USER_EMAIL, email};
}
export function setauthToken(auth_token) {
  return {type: SET_ACCESS_TOKEN, auth_token};
}
export function setFirstName(firstName) {
  return {type: SET_FIRST_NAME, firstName};
}
export function setLastName(lastName) {
  return {type: SET_ACCESS_TOKEN, lastName};
}

export function loginFailed(message) {
  return {type: LOGIN_FAILED, message};
}

export function logOut2() {
  return {type: LOG_OUT};
}

export function logOut() {

  return (dispatch) => {
    dispatch(logOut2());
    callLoginScreen();
  }
}

export function loginWithEmail(email, sso_key) {

  return (dispatch) => {
    // var details = {     'email': `${email}`,     'password': `${sso_key}`, };

    // // var details = {
    // //   'email': 'rvogt@nuvasive.com',
    // //   'password': '1222'
    // // };

    // var formBody = [];
    // for (var property in details) {
    //   var encodedKey = encodeURIComponent(property);
    //   var encodedValue = encodeURIComponent(details[property]);
    //   formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");

    // fetch('http://nuvasiveinsightmobile.com/local/wsnuvasive/api.php?type=login', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   body: formBody
    // }).then((response) => response.json()).then(json => {
    //   console.log('in json Login');
    //   console.log(json);
    //   //userLogin = json.result.id;

    //   resultCode = json.meta.code;

    //   if (resultCode == 200) {
    //     userLogin = {
    //       email: json.result.email,
    //       firstName: json.result.firstname,
    //       lastName: json.result.lastname,
    //       auth_token: json.result.auth_token
    //     }

    //     dispatch(setUserLoginInfo(userLogin));
    //   } else if (resultCode == 401) {
    //     Alert.alert(json.meta.message);
    //   }

    // })
  };
}

