
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
import { responsiveFontSize } from 'react-native-responsive-dimensions';

//import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import Components from '../../global/Components';
import Images from '../../global/Images';
import Icons from '../../global/Icons';

import Colors from '../../global/Colors';

import StarRating from 'react-native-star-rating';
import { StackedBarChart } from 'react-native-svg-charts'
import {BarChart} from 'react-native-charts-wrapper';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const JobListItem = (props) => {
  
  experienceStory = 'We are looking for services of a Graphic Designer Experienced candidates are encouraged to apply.';
  path = 'Location: Sabina Park,New York City';
  rate = '$2000 - $2500';

  return(
    <TouchableOpacity onPress={props.onPress}>
    <View style = {styles.container}>
      <View style={styles.innerContainer1}>
        <View style={styles.textContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Creative Chaos LTD</Text>
            <View style={styles.starContainer}>
              <StarRating
                disabled={true}
                emptyStar={'ios-star'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                starSize = {responsiveFontSize(1.69)}
                rating={props.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                fullStarColor={Colors.starRatingColor}
                emptyStarColor = {Colors.emptyStarColor}
                buttonStyle ={styles.starButtonStyle}
              />
            </View>
          </View>
          <Text style={styles.jobDescription}>{this.experienceStory}</Text>
        </View>
      </View>
      <View style={styles.innerContainer2}>
        <View style={styles.colContainer}>
          <Text style={styles.locationText}>{this.path}</Text>
          <Text style={styles.rateText}>{this.rate}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  )
}

JobListItem.propTypes = {
  onPress : PropTypes.func,
  hasAvatarLoaded : PropTypes.bool,
  starCount : PropTypes.number,
};
  
JobListItem.defaultProps = {
  onPress : ()=>Alert.alert('hello'),
  hasAvatarLoaded : true,
  starCount : 3,
}
export default JobListItem;
