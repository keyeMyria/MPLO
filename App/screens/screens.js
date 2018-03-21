import { Navigation } from 'react-native-navigation';

import Temp from '../index';
import SplashScreen from './SplashScreen';
import WelcomeScreen from './WelcomeScreen';
import CreateProfile from './CreateProfile';
import MatchProfile from './MatchProfile';
import ProfileMatched from './ProfileMatched';
import LeftMenuDrawer from './LeftMenuDrawer';
import Maps from './Maps';



import EmpRegisterScreen from './Employer/Registeration';
import EmpProfileScreen from './Employer/Profile';

import configureStore from '../configureStore';
import { Provider } from 'react-redux';

const confStore = configureStore();

export function registerScreens() {

    Navigation.registerComponent('MPLO.TEMP', () => Temp, confStore.store, Provider);
    Navigation.registerComponent('MPLO.SPLASH_SCREEN', () => SplashScreen, confStore.store, Provider);
    Navigation.registerComponent('MPLO.WELCOME_SCREEN', () => WelcomeScreen, confStore.store, Provider);
    Navigation.registerComponent('MPLO.CREATE_PROFILE', () => CreateProfile, confStore.store, Provider);
    Navigation.registerComponent('MPLO.MATCH_PROFILE', () => MatchProfile, confStore.store, Provider);
    Navigation.registerComponent('MPLO.PROFILE_MATCHED', () => ProfileMatched, confStore.store, Provider);
    Navigation.registerComponent('MPLO.LEFT_DRAWER_MENU', () => LeftMenuDrawer, confStore.store, Provider);
    Navigation.registerComponent('MPLO.MAPS_SCREEN', () => Maps, confStore.store, Provider);

    
    Navigation.registerComponent('MPLO.EMP_REGISTER_SCREEN', () => EmpRegisterScreen, confStore.store, Provider);
    Navigation.registerComponent('MPLO.EMP_PROFILE_SCREEN', () => EmpProfileScreen, confStore.store, Provider);

}
