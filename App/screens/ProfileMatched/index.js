
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity, TouchableHighlight,
  Image, StatusBar, processColor, Text,
  Dimensions, Alert, TextInput,
  AsyncStorage, ActivityIndicator, 
} from 'react-native';

import { Container, Header, Left, Body, Label, Right, Button, Icon,
  Title, Content, Input,Item, Form, Textarea, Text as NBText
 } from 'native-base';

//import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import Components from '../../global/Components';
import Images from '../../global/Images';
import Icons from '../../global/Icons';
import Colors from '../../global/Colors';
import screens from '../../global/screens';

import StarRating from 'react-native-star-rating';
import { StackedBarChart } from 'react-native-svg-charts'
import {BarChart} from 'react-native-charts-wrapper';

import SwipeCards from 'react-native-swipe-cards';



const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class ProfileMatched extends Component {
    
  constructor(props){
    super(props);
    this.state = { 
      hasAvatarLoaded : true,
      cards: [
        {text: 'Tomato', backgroundColor: 'red'},
        {text: 'Aubergine', backgroundColor: 'purple'},
        {text: 'Courgette', backgroundColor: 'green'},
        {text: 'Blueberry', backgroundColor: 'blue'},
        {text: 'Umm...', backgroundColor: 'cyan'},
        {text: 'orange', backgroundColor: 'orange'},
      ]
    };
  }

  componentDidMount() {
//    setTimeout(() => {this.navigateToNextScreen()}, 200)
  }

  render() {
       
    return(
      <View style = {styles.container}>
        <Image source={Images.Bg} resizeMode="cover" style={styles.backgroundImage}/>
        <StatusBar
          backgroundColor={Colors.appPrimaryDarkColor}
          barStyle="light-content"
        />
        <Components.StatusBar/>
        <Components.MainHeader isDarkTheme = {true}/>

        <Text style={styles.matchText}>It’s a Match!</Text>
        <NBText style={styles.infoText}>Arkotech Corporation and Alejandro Martinez</NBText>

        <View style={styles.avatarRowContainer}>
          <Image source={Icons.dollarButton} style={styles.avatarContainer}></Image>
          <Image source={Icons.dollarButton} style={styles.avatarContainer}></Image>
        </View>

        <View style={styles.buttonsContainer}>
          <Button style={styles.continueButton} block>
            <Text style={styles.continueText}>Continue</Text>
          </Button>
          <Button style={styles.keepButton} block>
            <Text style={styles.keepText}>Keep Swiping</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMatched);
