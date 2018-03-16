
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity, TouchableHighlight,
  Image, StatusBar,
  Dimensions, Alert, TextInput,
  AsyncStorage, ActivityIndicator, 
} from 'react-native';

import { Container, Header, Left, Body, Label, Right, Button, Icon,
  Title, Content, Input,Item, Form, Textarea,
  Text } from 'native-base';

//import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import Components from '../../../global/Components';
import Images from '../../../global/Images';
import Icons from '../../../global/Icons';
import Colors from '../../../global/Colors';
import screens from '../../../global/screens';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


class EmpProfileScreen extends Component {
  
  welomeMessageString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  about = 'Arkotech has been in business since 2001 and has been serving clients both on the East Coast and West Coast of U.S. since then it has maintained a perfect rating and client relationship throughout.';

  constructor(props){
    super(props);
    this.state = { 
        hasAvatarLoaded : true,
        text: this.about, height: 0,
    };
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

  getAvatar(){
    if (this.state.hasAvatarLoaded === true)
    {
      return(
        <View style={[styles.avatarContainer, {backgroundColor : Colors.appLightBackgroundColor}]}>
          <Image resizeMode="contain"
            source={{uri:'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-teacher-312a499a08079a12-512x512.png'}} style={styles.avatarImage}/>
          <Button style={styles.addButtonContainer}>
            <Image source={Icons.plusIcon} style={styles.addButton}></Image>
          </Button>
        </View>
      );
    }
    else
    {
      return(
        <View style={styles.avatarContainer}>
          <Image source={Icons.avatarIcon} resizeMode="contain" style={styles.avatarIcon}/>
          <Button style={styles.addButtonContainer}>
            <Image source={Icons.plusIcon} style={styles.addButton}></Image>
          </Button>
          <Text style={styles.avatarText}>Add Photo</Text>
        </View>
      );
    }
  }

  render() {
    
    return(
      <View style = {styles.container}>
        <StatusBar/>
        <Components.StatusBar/>
        <Components.MainHeader/>

        <Image style={styles.bg} source={Images.Bg3}/>
        <View style={styles.bottomContainer}>
          <View style={styles.statInfoContainer}>
            <View style={styles.hourStatContainer}>
              <Text>$12/hr</Text>
              <Text>+</Text>
              <Text>Commission</Text>
            </View>
            <View style={styles.jobsStatContainer}>
              <Text>$12/hr</Text>
              <Text>+</Text>
              <Text>Number of Jobs</Text>
            </View>
          </View>
        </View>

      </View>
    )
  }
  
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EmpProfileScreen);
