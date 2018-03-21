//import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
//import configureStore from './app/config/configureStore';
import { registerScreens } from './App/screens/screens';
import screens, { appStyle, tabsStyle } from './App/global/screens';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

//import SplashScreen from './app/screens/SplashScreen';

//const store = configureStore();
registerScreens();

const navigatorStyle = { navBarHidden: true }

Navigation.startSingleScreenApp({
  screen:screens.PROFILE_MATCHED,
  drawer: {
    // optional, add this if you want a side menu drawer in your app
    left: {
      // optional, define if you want a drawer from the left
      screen: 'MPLO.LEFT_DRAWER_MENU', // unique ID registered with Navigation.registerScreen
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
      disableOpenGesture: false, // can the drawer be opened with a swipe instead of button (optional, Android only)
      fixedWidth: deviceWidth * 0.828, // a fixed width you want your left drawer to have (optional)
    },
  }
  }
);

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