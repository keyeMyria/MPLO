
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image, TextInput,
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

const navigatorStyle = { navBarHidden: true };

class SignIn extends Component {
  
  welomeMessageString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  constructor(props){
    super(props);
    this.state = { hasToken: false, isLoaded: false };
  }

  componentDidMount() {
    
  }

  navigateToNextScreen(name){
    if (name !== null)
    {
      this.props.navigator.push({
        screen: name,
        navigatorStyle
      });
    }
  }

  openDrawer(){
    this.props.navigator.toggleDrawer({
      side: 'left',// the side of the drawer since you can have two, 'left' / 'right'
      animated: true, // does the toggle have transition animation or does it happen immediately (optional)
      to: 'open',
    });
  }

  render() {
    
    return(
      <View style = {styles.container}>
        <Image source = {Images.welcomeBG} style={styles.bg}></Image>
        <Image source = {Images.logoMPLO} style={styles.logo}></Image>
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>SIGN IN</Text>
          </View>

      <View style={styles.form}>
          <Item>
              <Input placeholder="Email" />
            </Item>
            <Item>
              <Input placeholder="Password" />
            </Item>
            </View>
          <Button block style={styles.hireMeButton} onPress={()=>this.navigateToNextScreen('MPLO.EMP_PROFILE_SCREEN')}>
            <Text>LOGIN</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
