
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
import PropTypes from 'prop-types';

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




const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


const ProfileCard = (props) => {
  
  experienceStory = 'Experienced Sales Associate with a demonstrated history of working in the retail industry. Skilled in Management, Teamwork, Leadership, and Project Management.';

  function getAvatar(){
    if (props.hasAvatarLoaded === true)
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

  function drawLine(){
    return(
      <View style = {styles.lineDraw}></View>
    );
  }
       
  return(
    <View style = {styles.container}>

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
            <TouchableOpacity style={styles.addAvatarButtonContainer}>
                <Image source={Icons.Star} style={styles.addAvatarButtonIcon}></Image>
              </TouchableOpacity>
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
              disabled={true}
              emptyStar={'ios-star'}
              fullStar={'ios-star'}
              halfStar={'ios-star-half'}
              iconSet={'Ionicons'}
              maxStars={5}
              starSize = {16}
              rating={props.starCount}
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
        {drawLine()}


        <View style={styles.skillsContainer}>
          <View style={styles.skillItemContainer}>
            <Text style={styles.skillHeading}>PRESENTATION SKILLS</Text>
            <Components.BarGraph filledValue={0.7}/>
          </View>
          <View style={styles.skillItemContainer}>
            <Text style={styles.skillHeading}>PRODUCT KNOWLEDGE</Text>
            <Components.BarGraph filledValue={0.8}/>
          </View>
          <View style={styles.skillItemContainer}>
            <Text style={styles.skillHeading}>TERRITORY MANAGMENT</Text>
            <Components.BarGraph filledValue={0.9}/>
          </View>
          <View style={styles.skillItemContainer}>
            <Text style={styles.skillHeading}>PROSPECTING SKILLS</Text>
            <Components.BarGraph filledValue={0.7}/>
          </View>
        </View>
      </View>

    </View>
  )

  
}

ProfileCard.propTypes = {
  hasAvatarLoaded : PropTypes.bool,
  starCount : PropTypes.number,
};
  
ProfileCard.defaultProps = {
  hasAvatarLoaded : true,
  starCount : 3,
}
export default ProfileCard;
