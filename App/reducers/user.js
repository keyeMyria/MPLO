import { SET_FIRST_NAME, SET_LAST_NAME, SET_USER_EMAIL, SET_TOKEN, SET_USER_LOGIN_INFO,
    USER_START_AUTHORIZING, USER_AUTHORIZED, USER_NO_EXIST, LOGIN_FAILED, LOG_OUT}  from '../actions/user';
 
 const initialState = {
   email: null,
   firstName: null,
   lastName: null,
   auth_token: null,  
 
   authorizing: false,
   authorized: false
 };
 
 export default function(state = initialState, action) {
 
   
   switch(action.type) {
 
     case SET_USER_LOGIN_INFO:
       return Object.assign({}, state, {
         email: action.userLogin.email,
         firstName : action.userLogin.firstName,
         lastName : action.userLogin.lastName,
         auth_token : action.userLogin.auth_token,
       });
 
     case SET_USER_EMAIL:
       return {
         ...state,
         email: action.email
       };
 
     case SET_FIRST_NAME:
       return {
         ...state,
         firstName: action.firstName
       };
 
     case SET_LAST_NAME:
       return {
         ...state,
         lastName: action.lastName
       };
 
     case SET_TOKEN:
       return {
         ...state,
         auth_token: action.auth_token
       };
 
     case USER_START_AUTHORIZING:
       return Object.assign({}, state, {
           authorizing: true
     });
     
     case USER_AUTHORIZED:
       return Object.assign({}, state, {
         authorizing: false,
         authorized: true
       });
     case USER_NO_EXIST:
       return Object.assign({}, state, {
           authorizing: false,
           authorized: false
       });
 
     case LOG_OUT:
       return initialState;
     //     //TO be asked
     // case REHYDRATE:
     //   const savedUser = action.payload.user || state;
     //   return {
     //     ...state,
     //     auth_token: savedUser.auth_token,
     //     profile: savedUser.profile,
     //     payment: savedUser.payment,
     //   };
 
     default:
       return state;
   }
 };