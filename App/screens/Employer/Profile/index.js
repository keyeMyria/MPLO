
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

import StarRating from 'react-native-star-rating';
import { StackedBarChart } from 'react-native-svg-charts'




const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


class EmpProfileScreen extends Component {
  
  experienceStory = 'Experienced Sales Associate with a demonstrated history of working in the retail industry. Skilled in Management, Teamwork, Leadership, and Project Management.';
  
  constructor(props){
    super(props);
    this.state = { 
        hasAvatarLoaded : true,
        text: this.about, height: 0,
        starCount: 2.5
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
            <View>
            <Image source={Icons.plusIcon} style={styles.addButton}></Image>
            </View>
            
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

  onStarRatingPress(rating){
    this.setState({
      starCount: rating
    });
  }
  drawLine(){
    return(
      <View style = {styles.lineDraw}></View>
    );
  }

  render() {
    const data = [
      {
          month: new Date(2015, 0, 1),
          apples: 3840,
          bananas: 1920,
      },
      {
          month: new Date(2015, 1, 1),
          apples: 1600,
          bananas: 1440,
      },
      {
          month: new Date(2015, 2, 1),
          apples: 640,
          bananas: 960,
      },
      {
          month: new Date(2015, 3, 1),
          apples: 3320,
          bananas: 480,
      },
  ]

  const colors = [ '#7b4173', '#a55194', ]
  const keys   = [ 'apples', 'bananas',]    
    return(
      <View style = {styles.container}>
        <StatusBar/>
        <Components.StatusBar/>
        <Components.MainHeader title="Alejandro Martinez"/>

        <Image style={styles.bg} source={Images.Bg3}/>
        <View style={styles.bottomContainer}>
          <View style={styles.statInfoContainer}>
            <View style={styles.hourStatContainer}>
              <Text style={styles.statTitle} >$12/hr</Text>
              <Text style={styles.statText}>+</Text>
              <Text style={styles.statText}>Commission</Text>
            </View>
            <View style={styles.avatarContainer}>
              <Image source={{uri:Images.avatarURL}} resizeMode="cover" style={styles.avatar}></Image>
            </View>
            <View style={styles.jobsStatContainer}>
              <Text style={styles.statTitle}>22</Text>
              <Text style={styles.statText}>Number of Jobs</Text>
            </View>
          </View>
          <View style={styles.moreInfoContainer}>
            <Text style={styles.jobTitleText}>Sales Associate</Text>
            <Text style={styles.positionText}>Compton,California,USA</Text>
            <View style={styles.starContainer}>
              <StarRating
                disabled={false}
                emptyStar={'ios-star'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                starSize = {16}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                fullStarColor={Colors.starRatingColor}
                emptyStarColor = {Colors.emptyStarColor}
                buttonStyle ={styles.starButtonStyle}
              />
            </View>
          </View>
          <View>
            <Text style={styles.experienceText}>{this.experienceStory}</Text>
          </View>
          {this.drawLine()}
          <View>
          <StackedBarChart
                style={ { height: 200 } }
                keys={ keys }
                colors={ colors }
                data={ data }
                showGrid={ false }
                contentInset={ { top: 30, bottom: 30 } }
            />
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
