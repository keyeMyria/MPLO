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

const BarGraph = (props) => {

  const val1 = props.filledValue;
  const val2 = 1 - val1;
  return(
    <View style={styles.barGraphContainer}>
      <View style={[styles.barLeftPart, {flex:val1}]}>
        <Text style={styles.valueText}>{props.filledValue * 100} %</Text>
      </View>
      <View style={[styles.barRightPart, {flex:val2}]}>
      </View>
    </View>
  );
}


BarGraph.propTypes = {
  filledValue : PropTypes.number
};
  
BarGraph.defaultProps = {
}
  
export default BarGraph;