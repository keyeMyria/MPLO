
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity, TouchableHighlight,
  Image, StatusBar, ScrollView,
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

const navigatorStyle = { navBarHidden: true };

class UserRegisterScreen extends Component {
  
  welomeMessageString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  about = 'Arkotech has been in business since 2001 and has been serving clients both on the East Coast and West Coast of U.S. since then it has maintained a perfect rating and client relationship throughout.';

  constructor(props){
    super(props);
    this.state = { 
        hasAvatarLoaded : true,
        text: ' ', height: 0,
    };
  }

  componentDidMount() {
//    setTimeout(() => {this.navigateToNextScreen()}, 200)
  }

  navigateToNextScreen(name){
    if (name !== null)
    {
      this.props.navigator.push({
        screen: name,
        navigatorStyle,
      });
    }
  }

  getAvatar(){
    if (this.state.hasAvatarLoaded === true)
    {
      return(
        <View style={[styles.avatarContainer]}>
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
        <Components.Header2 onPress={()=>{this.props.navigator.pop()}}/>

        <ScrollView>
        {this.getAvatar()}

        <Form style={styles.formStyle}>
          <Text style={styles.labelTextStyle}>Name</Text>
          <TextInput underlineColorAndroid="transparent" maxLength={30} style={styles.inputTextStyle}/>
          
          <Text style={styles.labelTextStyle}>Location</Text>
          <TextInput underlineColorAndroid="transparent" maxLength={25} style={styles.inputTextStyle}/>

          <Text style={styles.labelTextStyle}>Nature of Work</Text>
          <TextInput underlineColorAndroid="transparent" style={styles.inputTextStyle}/>
          
          <Text style={styles.labelTextStyle}>About</Text>
          <View style={styles.aboutInputContainer}>
            <TextInput
                {...this.props}
                multiline={true} maxLength = {250}
                onChangeText={(text) => {
                this.setState({ text })
                underlineColorAndroid="transparent"
              }}
              onContentSizeChange={(event) => {
                  this.setState({ height: event.nativeEvent.contentSize.height + 8 })
              }}
              style={[styles.aboutInputTextStyle, {height: Math.max(deviceHeight * .03, this.state.height)}]}
              value={this.state.text}
            />
          </View>

          <Button block style={styles.createButton} onPress={()=>this.navigateToNextScreen('MPLO.EMP_PROFILE_SCREEN')}>
            <Text style={styles.createButtonText}>CREATE</Text>
          </Button>
          <View style={styles.signInContainer}>
            <Text style={styles.alreadyText}>ALREADY HAVE AN ACCOUNT?  </Text>
            <TouchableOpacity style={styles.signInButton} onPress={()=>this.navigateToNextScreen('MPLO.SIGNIN_SCREEN')}>
              <Text style={styles.signInText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </Form>
        </ScrollView>

      </View>
    )
  }
  
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRegisterScreen);
