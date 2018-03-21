/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Alert,
  View, Dimensions
} from 'react-native';
import { connect } from 'react-redux';

import Components from './global/Components';
import Colors from './global/Colors';

import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import SwipeCards from 'react-native-swipe-cards';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};



const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

 
class App extends Component<Props> {

  
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Components.CustomCallout/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop : 20,
    marginLeft : 20,
    height : deviceHeight * .6,
    backgroundColor : Colors.blue,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height : 100
  },
  noMoreCardsText: {
    fontSize: 22,
  }
});

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

