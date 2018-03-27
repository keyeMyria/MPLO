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
  screen:screens.JOB_BOARD,
  drawer: screens.DRAWER
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

export function navigateToNextScreen(name){
  if (name !== null)
  {
    this.props.navigator.push({
      screen: name,
      navigatorStyle
    });
  }
}

export function openDrawer(){
  this.props.navigator.toggleDrawer({
    side: 'left',// the side of the drawer since you can have two, 'left' / 'right'
    animated: true, // does the toggle have transition animation or does it happen immediately (optional)
    to: 'open',
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