
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image, StatusBar,
  Dimensions, Alert,
  AsyncStorage, ActivityIndicator, 
} from 'react-native';

import { Container, Header, Left, Body, Right, Button, Icon,
  Title, Content, Input,Item, Form,
  Text } from 'native-base';

//import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import Images from '../../global/Images';
import Icons from '../../global/Icons';
import screens from '../../global/screens';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


class CreateProfile extends Component {
  
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
        <StatusBar/>
        <View style={styles.headerContainer}>
          <Image source={Icons.cross} style={styles.crossIcon}></Image>
          <Text style={styles.HeaderTitle}>Create</Text>
        </View>

        <View style={styles.createButton}>
        
        </View>
      </View>
    )
  }
  
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
