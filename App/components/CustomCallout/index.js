import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet, Dimensions,
  View, Text as RNText
} from 'react-native';

import { Container, Header, Left, Body, Right, Button, Icon,
  Title, Content, Input,Item, Form,
  Text } from 'native-base';

import styles from './styles';

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

maxHeight =  deviceHeight * .055;

const CustomCallout = (props) => {

  function updateSize(height){
    maxHeight = height;
  }

    return (
      <View style={styles.container}>
        <View style={styles.bubble}>
          <View style={styles.columnContainer}>
            <View style={styles.distStatContainer}>
              <Text style={styles.timeText}>8</Text>
              <Text style={styles.timeUnitText}>MIN</Text>
            </View>
            <Text style={styles.title}
             multiline={true} adjustsFontSizeToFit={true}>
             Berkshire Insurance Group Berkshire Insurance Group
             Berkshire Insurance Group   Berkshire Insurance Group </Text>
            <Icon name='md-arrow-forward' style={styles.forwardIcon}></Icon>
          </View>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    );

}

CustomCallout.propTypes = propTypes;

export default CustomCallout;