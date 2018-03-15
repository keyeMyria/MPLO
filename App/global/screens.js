
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
//   LOGIN_SCREEN: {
//     screen: 'MPLO.LOGIN_SCREEN',
//     title: 'Login Screen',
//     navigatorStyle: hiddenNavigatorStyle,
//     navBarButtonColor: 'blue',
//   },
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
    navBarButtonColor: 'blue',
    buttonFontSize : 10,
  },
//   LANDING_PAGE: {
//     screen: 'MPLO.LANDING_PAGE',
//     title: 'Landing Page',
//     icon: Icons.home2,
//     navigatorStyle: hiddenNavigatorStyle,
//     navBarButtonColor: 'blue',
//     buttonFontSize : 10,
//   },
//   QUERY_SCREEN: {
//     screen: 'MPLO.QUERY_SCREEN',
//     title: 'Query Page',
//     icon: Icons.more,
//     navigatorStyle: hiddenNavigatorStyle,
//     navBarButtonColor: 'blue',
//     buttonFontSize : 10,
//   },
//   RESULT_SCREEN: {
//     screen: 'MPLO.RESULT_SCREEN',
//     title: 'Result Page',
//     icon: Icons.User_icon,
//     navigatorStyle: hiddenNavigatorStyle,
//     navBarButtonColor: 'blue',
//     buttonFontSize : 10,
//   },
//   FAVORITE_SCREEN: {
//     screen: 'MPLO.FAVORITE_SCREEN',
//     title: 'Result Page',
//     icon: Icons.fav2,
// //    selectedIcon: Icons.mailClosed,
//     navigatorStyle: hiddenNavigatorStyle,
//     navBarButtonColor: 'blue',
//     buttonFontSize : 10,
//   },
//   PLAYBOOK_SCREEN: {
//     screen: 'MPLO.PLAYBOOK_SCREEN',
//     title: 'Result Page',
//     icon: Icons.Download_icon,
//     navigatorStyle: hiddenNavigatorStyle,
//     navBarButtonColor: 'blue',
//     buttonFontSize : 10,
//   },
//   CONTENT_SCREEN:{
//     screen: 'MPLO.CONTENT_SCREEN',
//     title: 'Result Page',
//     icon: Icons.User_icon,
//     navigatorStyle: hiddenNavigatorStyle,
//     navBarButtonColor: 'blue',
//     buttonFontSize : 10,
//   },
//   DOWNLOAD_SCREEN: {
//     screen: 'MPLO.DOWNLOAD_SCREEN',
//     title: 'Result Page',
//     icon: Icons.download2,
//     navigatorStyle: hiddenNavigatorStyle,
//     navBarButtonColor: 'blue',
//     buttonFontSize : 10,
//   },
//   PLAYBOOKLIST_SCREEN: {
//     screen: 'MPLO.PLAYBOOKLIST_SCREEN',
//     title: 'Result Page',
//     icon: Icons.Download_icon,
//     navigatorStyle: hiddenNavigatorStyle,
//     navBarButtonColor: 'blue',
//     buttonFontSize : 10,
//   },
//   COMMUNICATON_SCREEN: {
//     screen: 'MPLO.COMMUNICATON_SCREEN',
//     title: 'Communication Page',
//     icon: Icons.Download_icon,
//     navigatorStyle: hiddenNavigatorStyle,
//     navBarButtonColor: 'blue',
//     buttonFontSize : 10,
//   },
//   VIDEO_SCREEN: {
//     screen: 'MPLO.VIDEO_SCREEN',
//     title: 'SPLASH',
//     icon: Icons.Download_icon,
//     navigatorStyle: hiddenNavigatorStyle,
//     navBarButtonColor: 'blue',
//     buttonFontSize : 10,
//   },
//   AUDIO_SCREEN: {
//     screen: 'MPLO.AUDIO_SCREEN',
//     title: 'SPLASH',
//     icon: Icons.Download_icon,
//     navigatorStyle: hiddenNavigatorStyle,
//     navBarButtonColor: 'blue',
//     buttonFontSize : 10,
//   },
//   PDF_SCREEN: {
//     screen: 'MPLO.PDF_SCREEN',
//     title: 'PDF VIEWER',
//     icon: Icons.Download_icon,
//     navigatorStyle: hiddenNavigatorStyle,
//     navBarButtonColor: 'blue',
//     buttonFontSize : 10,
//   },
  
};
