
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
        <Global.Components.Header2 title='Layout'/>
        <View style={styles.contentContainer}>
        <View style={styles.optionButtonContainer}>
          {/* Button1 */}
          <Image style={styles.optButtonIcon} source={Global.Icons.Forma}></Image>
          <Text style={styles.mapTitle}>Map View</Text>
          <Text style={styles.description}>{this.tempText}</Text>
          <Button style={styles.optInnerButton}>
            <RNText style={styles.optInnerButtonText}>Continue</RNText>
          </Button>
        </View>
        <View style={styles.optionButtonContainer2}>
          {/* Button1 */}
          <Image style={styles.optButtonIcon2} source={Global.Icons.OptIcon}></Image>
          <Text style={styles.mapTitle}>Map View</Text>
          <Text style={styles.description2}>{this.tempText}</Text>
          <Button style={styles.optInnerButton2}>
            <RNText style={styles.optInnerButtonText2}>Continue</RNText>
          </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewsOptionsScreen);
