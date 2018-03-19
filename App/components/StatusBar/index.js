import React, { Component } from 'react';
import {
  View, StyleSheet, Platform, Text
} from 'react-native';
import PropTypes from 'prop-types';

export default StatusBar = (props) => {

  function getStatusBar(){
    if (Platform.OS === 'ios')
    {
      return (<View style={styles.statusBar}/>);
    }
    else
      return null;
  }

  return (
    <View>
      {getStatusBar()}
      </View>
  );
}

const styles = StyleSheet.create({

  statusBar:{
    height:20,
    //backgroundColor:Colors.appStatusBarColor,
  },
});
