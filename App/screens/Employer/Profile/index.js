
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

import Components from '../../../global/Components';
import Images from '../../../global/Images';
import Icons from '../../../global/Icons';
import Colors from '../../../global/Colors';
import screens from '../../../global/screens';

import StarRating from 'react-native-star-rating';
import { StackedBarChart } from 'react-native-svg-charts'
import {BarChart} from 'react-native-charts-wrapper';

import { navigateToNextScreen } from '../../../../App';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const navigatorStyle = { navBarHidden: true };

class EmpProfileScreen extends Component {
  
  experienceStory = 'Experienced Sales Associate with a demonstrated history of working in the retail industry. Skilled in Management, Teamwork, Leadership, and Project Management.';
  
  constructor(props){
    super(props);
    this.state = { 
        hasAvatarLoaded : true,
        text: this.about, height: 0,
        starCount: 2.5,

        legend: {
          enabled: true,
          textSize: 14,
          form: "SQUARE",
          formSize: 14,
          xEntrySpace: 10,
          yEntrySpace: 5,
          wordWrapEnabled: true
        },
        data: {
          dataSets: [{
            values: [{y:[40, 30, 20], marker: ["row1", "row2", "row3"]}, {y:[10, 20, 10], marker:"second"}, {y:[30, 20, 50], marker:["hello", "world","third"]}, {y:[30, 50, 10], marker:"fourth"}],
            label: 'Stacked Bar dataset',
            config: {
              colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C')],
              stackLabels: ['Engineering', 'Sales', 'Marketing']
            }
          }],
        },
        highlights: [{x: 1, stackIndex: 2}, {x: 2, stackIndex: 1}],
        xAxis: {
          valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4'],
          granularityEnabled: true,
          granularity: 1
  
        }
  
    };
  }

  componentDidMount() {
//    setTimeout(() => {this.navigateToNextScreen()}, 200)
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
  renderBarGraph(val){
    
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
        <StatusBar
          backgroundColor={Colors.appLightBackgroundColor}
          barStyle="dark-content"
        />
        <Components.StatusBar/>
        <Components.MainHeader title="ALENJANDO MARTINEZ" onMenuPress={this.openDrawer.bind(this)}/>

        <TouchableOpacity onPress={ navigateToNextScreen.bind(this,'MPLO.MAPS_SCREEN')}>
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
        </TouchableOpacity>
      </View>
    )
  }
  
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EmpProfileScreen);
