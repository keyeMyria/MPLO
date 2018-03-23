
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity, TouchableHighlight,
  Image, StatusBar,
  Dimensions, Alert, PermissionsAndroid,
  AsyncStorage, ActivityIndicator, 
} from 'react-native';

import { Container, Header, Left, Body, Right, Button, Icon,
  Title, Content, Input,Item, Form,
  Text } from 'native-base';

import LinkedinLogin from 'react-native-linkedin-login';

//import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import Components from '../../../global/Components';
import Images from '../../../global/Images';
import Icons from '../../../global/Icons';
import screens from '../../../global/screens';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const navigatorStyle = { navBarHidden: true };

class EmpCreateProfile extends Component {
  
  welomeMessageString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  constructor(props){
    super(props);
    this.state = { hasToken: false, isLoaded: false };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
//    setTimeout(() => {this.navigateToNextScreen()}, 200)
  }

  async requestLocationPermission() {
    const chckLocationPermission = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert("You've access for the location");
    } else {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Cool Location App required Location permission',
                    'message': 'We required Location permission in order to get device location ' +
                        'Please grant us.'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              Alert.alert("You've access for the location");
            } else {
              Alert.alert("You don't have access for the location");
            }
        } catch (err) {
          Alert.alert(err)
        }
    }
  };

  
  getLinkedInLogin(){
    LinkedinLogin.login().then((user) => {
      console.log('User logged in: ', user);

      // recieved auth token
      // this.setState({ user });
    
      // AsyncStorage.setItem('user', JSON.stringify(user), () => {
      //       this.getUserProfile();
      //   });
        
        this.navigateToNextScreen('MPLO.EMP_PROFILE_SCREEN');
    }).catch((e) => {
      var err = JSON.parse(e.description);
      alert("ERROR: " + err.errorMessage);
      console.log('Error', e);
    });
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


  render() {

    return(
      <View style = {styles.container}>
        <StatusBar/>
        <Components.StatusBar/>
        <Components.Header2 title='Create'/>

        <TouchableOpacity style={styles.createButtonContainer} onPress={()=>this.navigateToNextScreen('MPLO.EMP_REGISTER_SCREEN')}>
          <Image source={Icons.create} style={styles.createButton}></Image>
        </TouchableOpacity>

        <Button block style={styles.connectButton} onPress={this.getLinkedInLogin.bind(this)}>
          <Icon name='logo-linkedin' style={styles.connectButtonIcon}></Icon>
          <Text style={styles.connectButtonText}>Connect LinkedIn</Text>
        </Button>

        <View style={styles.signInContainer}>
          <Text style={styles.alreadyText}>ALREADY HAVE AN ACCOUNT?  </Text>
          <TouchableOpacity style={styles.signInButton} onPress={()=>this.navigateToNextScreen('MPLO.SIGNIN_SCREEN')}>
            <Text style={styles.signInText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EmpCreateProfile);
