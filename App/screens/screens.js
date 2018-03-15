import { Navigation } from 'react-native-navigation';

import Temp from '../index';
import SplashScreen from './SplashScreen';
import WelcomeScreen from './WelcomeScreen';
import CreateProfile from './CreateProfile';

import configureStore from '../configureStore';
import { Provider } from 'react-redux';

const confStore = configureStore();

export function registerScreens() {

    Navigation.registerComponent('MPLO.TEMP', () => Temp, confStore.store, Provider);
    Navigation.registerComponent('MPLO.SPLASH_SCREEN', () => SplashScreen, confStore.store, Provider);
    Navigation.registerComponent('MPLO.WELCOME_SCREEN', () => WelcomeScreen, confStore.store, Provider);
    Navigation.registerComponent('MPLO.CREATE_PROFILE', () => CreateProfile, confStore.store, Provider);

}
