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
  
import Images from '../../global/Images';
import Icons from '../../global/Icons';
import screens from '../../global/screens';

const Header2 = (props) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.crossButton} onPress={props.onPress}>
        <Image source={Icons.cross} style={styles.crossIcon}></Image>
      </TouchableOpacity>
      <Text style={styles.HeaderTitle}>{props.title}</Text>
    </View>
  );
}


Header2.propTypes = {
  title : PropTypes.string,
  onPress : PropTypes.func,
};
  
Header2.defaultProps = {
  title : 'HEADER'
}
  
export default Header2;