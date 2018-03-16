/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Alert,
  View, Image, KeyboardAvoidingView, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import { Container, Header, Left, Body, Right, Button, Icon,
    Title, Content, Input,Item, Form,
    Text } from 'native-base';
  
  //import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Colors from '../../global/Colors';
import Images from '../../global/Images';
import Icons from '../../global/Icons';
import screens from '../../global/screens';

const MainHeader = (props) => {

    function getBellName(){
      if (props.notificationsOff)
      {
        return 'ios-notifications-off'
      }
      else
      {
        return 'ios-notifications'
      }
    }

    function getIconTheme(){
      if (props.isDarkTheme === true)
      {
        return { color : Colors.white}
      }
      else
      {
        return { color : Colors.appHeaderDarkColor,}
      }
    }

    function getHeaderBody(){
      if (props.title === null)
      {
        return(
          <Image source={Icons.MPLOLogoHolo} style={styles.logoStyle}/>
        )
      }

      else
      {
        return(
          <Text>{props.title}</Text>
        )
      }
    }

    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress = {props.onMenuPress}>
          <Icon name='menu' style={[styles.iconStyles, getIconTheme()]}></Icon>
        </TouchableOpacity>
        <View style={styles.headerBody}>
          {getHeaderBody()}
        </View>
        <TouchableOpacity onPress={props.onNotificationpress}>
          <Icon name={getBellName()} style={[styles.iconStyles, getIconTheme()]}/>
        </TouchableOpacity>
      </View>
    );
}


MainHeader.propTypes = {
  title : PropTypes.string,
  notificationsOff : PropTypes.bool,
  isDarkTheme : PropTypes.bool,
  titleURL : PropTypes.string,
  onMenuPress : PropTypes.func,
  onNotificationpress : PropTypes.func,
};
  
MainHeader.defaultProps = {
  title : null,
  notificationsOff : false,
  isDarkTheme : false,
  onMenuPress : () => Alert.alert('onpress'),
  onNotificationpress : () => Alert.alert('onpress'),
}
  
export default MainHeader;