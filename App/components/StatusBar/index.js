import React, { Component } from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export default StatusBar = (props) => {
    return (
        <View style={styles.statusBar}/>
    );
}

const styles = StyleSheet.create({

    statusBar:{
        height:20,
//        backgroundColor:Colors.appStatusBarColor,
    },
});