
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity, TouchableHighlight,
  Image, StatusBar, processColor,
  Dimensions, Alert, TextInput,
  AsyncStorage, ActivityIndicator, 
} from 'react-native';

import { Container, Header, Left, Body, Label, Right, Button, Icon,
  Title, Content, Input,Item, Form, Textarea,
  Text } from 'native-base';

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

import { openDrawer } from '../../../App';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
 
  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

class MatchProfile extends Component {
    
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
        <StatusBar
          backgroundColor={Colors.appPrimaryDarkColor}
          barStyle="light-content"
        />
        <Components.StatusBar/>
        <Components.MainHeader isDarkTheme = {true} onMenuPress={openDrawer.bind(this)} />

        <View style={styles.swipeCardContainer}>
          <SwipeCards
          cards={this.state.cards}
          renderCard={(cardData) => <Components.ProfileCard />}
          renderNoMoreCards={() => <NoMoreCards />}

          showYup = {false} showNope = {false}
          stack={true}
          stackOffsetX={0}
          stackOffsetY = {12}
          />
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={()=> this.props.navigator.pop()}>
            <Image source={Icons.crossFilled} style={styles.buttonIcon}/>
          </TouchableOpacity>
          <Image source={Icons.message} style={styles.messageButtonIcon}/>
          <Image source={Icons.dollarButton} style={styles.buttonIcon}/>
        </View>

      </View>
    )
  }
  
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchProfile);
