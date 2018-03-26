/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, TouchableOpacity,
  Text, Alert, AsyncStorage, Button,
  View, Dimensions
} from 'react-native';
import { connect } from 'react-redux';

import Global from './global';

import LinkedinLogin from 'react-native-linkedin-login';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class App extends Component<Props> {

  
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }
  componentWillMount() {    
  }

  render() {
   return(
     <View>
       <Global.Components.JobListItem/>
     </View>
   ) 
  
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

