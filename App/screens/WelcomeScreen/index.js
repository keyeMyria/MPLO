
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions, Alert,
  AsyncStorage, ActivityIndicator, 
} from 'react-native';

import { Container, Header, Left, Body, Right, Button, Icon,
  Title, Content, Input,Item, Form,
  Text } from 'native-base';

//import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import Images from '../../global/Images';
import screens from '../../global/screens';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


class WelcomeScreen extends Component {
  
  welomeMessageString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  constructor(props){
    super(props);
    this.state = { hasToken: false, isLoaded: false };
  }

  componentDidMount() {
//    setTimeout(() => {this.navigateToNextScreen()}, 200)
  }

  navigateToNextScreen(){
//      callSingleScreen(screens.WELCOME_SCREEN);
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
        <Image source = {Images.welcomeBG} style={styles.bg}></Image>
        <Image source = {Images.logoMPLO} style={styles.logo}></Image>
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Welcome To MPLO</Text>
            <Text style={styles.welcomeMessage}>{this.welomeMessageString}</Text>
          </View>

          <Button block style={styles.hireMeButton} onPress={()=>Alert.alert('Hire Me')}>
            <Text>Hire Me</Text>
          </Button>
          <Button block style={styles.hiringMeButton} onPress={()=>Alert.alert('Hire Me')}>
            <Text style={styles.hiringMeButtonText} >I’m Hiring</Text>
          </Button>
        </View>


      </View>
    )
  }
  
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
