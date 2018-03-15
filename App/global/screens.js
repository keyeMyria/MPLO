
import React, { Component } from 'react';
//import Colors from './Colors';
import { Platform } from 'react-native';
//import Images from './AssetsImages';
//import Icons from './Icons';
import { Image } from 'react-native';

import { StyleSheet, Dimensions } from 'react-native';


export const styles = StyleSheet.create({

  icon:{
    width:10,
    height:10,
    backgroundColor:'blue',
    marginTop:10,
  },
  tabBar:{
    marginTop:10,
    backgroundColor:'blue',

  }
});


export const tabsStyle = {
  tabBarButtonColor:'#333',
//  tabBarButtonColor: Colors.appTabBorderColor,
//  tabBarLabelColor: Colors.BitNationLightBlue,
//  tabBarSelectedLabelColor: Colors.appPrimaryColor,
  // tabBarSelectedButtonColor: Colors.appTabActiveTintColor,
  // tabBarBackgroundColor: Colors.appTabBackgroundColor,
  forceTitlesDisplay: true,
  marginTop : 10,
  iconStyle: styles.icon,
  style: styles.tabBar,
};

export const appStyle = {
  ...tabsStyle
};

export const navigatorStyle = {
  statusBarTextColorScheme: 'light',
  statusBarColor: Platform.OS === 'ios' ? 'transparent' : 'black',
  navBarTransparent: true,
  navBarTranslucent: true,
  navBarNoBorder: true,
  drawUnderNavBar: true,
  drawUnderStatusBar: false,
  navBarTextColor : '#fff',
//  navBarTextColor: Colors.white,
  screenBackgroundColor: 'transparent',
  rootBackgroundImageName: 'background',
};

export const hiddenNavigatorStyle = {
  statusBarTextColorScheme: 'light',
  statusBarColor: Platform.OS === 'ios' ? 'transparent' : 'black',
  navBarHidden: true,
  drawUnderStatusBar: false,
  screenBackgroundColor: 'transparent',
  rootBackgroundImageName: 'background',
};

export default {
  TEMP: {
    screen: 'MPLO.TEMP',
    title: 'Temp',
    navigatorStyle: hiddenNavigatorStyle,
    navBarButtonColor: 'blue',
  },
  SPLASH_SCREEN: {
    screen: 'MPLO.SPLASH_SCREEN',
    title: 'SPLASH',
//    icon: Icons.Download_icon,
    navigatorStyle: hiddenNavigatorStyle,
  },
  WELCOME_SCREEN: {
    screen: 'MPLO.WELCOME_SCREEN',
    title: 'WELCOME',
    navigatorStyle: hiddenNavigatorStyle,
  },
  
};
