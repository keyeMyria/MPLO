
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

import Images from '../../../global/Images';
import Icons from '../../../global/Icons';
import Colors from '../../../global/Colors';
import screens from '../../../global/screens';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


class EmpRegisterScreen extends Component {
  
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
        <View style={styles.headerContainer}>
          <Image source={Icons.cross} style={styles.crossIcon}></Image>
          <Text style={styles.HeaderTitle}>Sign up</Text>
        </View>

        {this.getAvatar()}

        <Form style={styles.formStyle}>
          <Text style={styles.labelTextStyle}>Company Name</Text>
          <TextInput maxLength={30} style={styles.inputTextStyle}/>
          
          <Text style={styles.labelTextStyle}>Location</Text>
          <TextInput maxLength={25} style={styles.inputTextStyle}/>

          <Text style={styles.labelTextStyle}>Tax ID</Text>
          <TextInput style={styles.inputTextStyle}/>
          
          <Text style={styles.labelTextStyle}>About</Text>
          <View style={styles.aboutInputContainer}>
            <TextInput
              {...this.props}
              multiline={true} maxLength = {250}
              onChangeText={(text) => {
                  this.setState({ text })
              }}
              onContentSizeChange={(event) => {
                  this.setState({ height: event.nativeEvent.contentSize.height + 8 })
              }}
              style={[styles.aboutInputTextStyle, {height: Math.max(deviceHeight * .03, this.state.height)}]}
              value={this.state.text}
            />
          </View>

          <Button block style={styles.createButton}>
            <Text style={styles.createButtonText}>CREATE</Text>
          </Button>
          <View style={styles.signInContainer}>
            <Text style={styles.alreadyText}>ALREADY HAVE AN ACCOUNT?  </Text>
            <TouchableOpacity style={styles.signInButton} onPress={()=>{Alert.alert('sign in')}}>
              <Text style={styles.signInText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </Form>


      </View>
    )
  }
  
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EmpRegisterScreen);
