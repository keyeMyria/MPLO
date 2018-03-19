//import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
//import configureStore from './app/config/configureStore';
import { registerScreens } from './App/screens/screens';
import screens, { appStyle, tabsStyle } from './App/global/screens';

//import SplashScreen from './app/screens/SplashScreen';

//const store = configureStore();
registerScreens();

const navigatorStyle = { navBarHidden: true }

Navigation.startSingleScreenApp({
  screen:screens.TEMP,
	navigatorStyle 
});

class App extends Component {
  render() {
    return null;
  }
}

export function callNavigationTabApp(){
  
  Navigation.startTabBasedApp({
    tabs: [
        screens.LANDING_PAGE,
        screens.FAVORITE_SCREEN,
        screens.DOWNLOAD_SCREEN,
        screens.RESULT_SCREEN,
        screens.QUERY_SCREEN,
    ],
    tabsStyle, appStyle,
  });

}

export function callSingleScreen(screenName){
  Navigation.startSingleScreenApp({
    screen:screenName,
    navigatorStyle 
  });
}

export function callLoginScreen(){
  Navigation.startSingleScreenApp({
    screen:screens.LOGIN_SCREEN,
    navigatorStyle 
  });
  
}

export default App;