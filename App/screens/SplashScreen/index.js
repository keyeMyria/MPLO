
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions, Alert,
  AsyncStorage, ActivityIndicator, 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Images from '../../global/Images';
import screens from '../../global/screens';
import { callSingleScreen } from '../../../App';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 27,
    color: '#E2E2E2',
    marginBottom: 30,
    alignSelf: 'center',
  },
    logo: {
        alignSelf:'center',
        width:'80%',
        resizeMode : 'contain',
  },
 
});

class SplashScreen extends Component {
  
  constructor(props){
    super(props);
    this.state = { hasToken: false, isLoaded: false };
  }

  componentDidMount() {
    setTimeout(() => {this.navigateToNextScreen()}, 200)
  }

  navigateToNextScreen(){
    callSingleScreen(screens.WELCOME_SCREEN);

    // if (typeof this.props.userLogin.auth_token !== 'undefined' && this.props.userLogin.auth_token !== null)
    // {
    //   callNavigationTabApp();
    // }

    // else
    // {
    //   callLoginScreen();
    // }
  }

  render() {
    
    return(
      <View style = {styles.container}>
        <Image source = {Images.logoSplash} style={styles.logo}></Image>
      </View>
    )
  }
  
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
