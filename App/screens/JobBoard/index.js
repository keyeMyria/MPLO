
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions, Alert, StatusBar,
  AsyncStorage, ActivityIndicator, Text as RNText
} from 'react-native';

import { Container, Header, Left, Body, Right, Button, Icon,
  Title, Content, Input,Item, Form,
  Text } from 'native-base';

//import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import Global from '../../global';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const navigatorStyle = { navBarHidden: true };

class ViewsOptionsScreen extends Component {
  
  tempText = 'Rorem dolorem est vintius est ventilis dolor vanilis vantius dvium';

  constructor(props){
    super(props);
    this.state = { };
  }

  componentDidMount() {
    
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
        <StatusBar/>
        <Global.Components.Header2 title='JOB BOARD'/>
      </View>
    )
  }
  
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewsOptionsScreen);
