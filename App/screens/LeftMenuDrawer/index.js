
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity, TouchableHighlight,
  Image, StatusBar,
  Dimensions, Alert,
  AsyncStorage, ActivityIndicator, Text
} from 'react-native';

import { Container, Header, Left, Body, Right, Button, Icon,
  Title, Content, Input,Item, Form,
 } from 'native-base';

//import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import Components from '../../global/Components';
import Images from '../../global/Images';
import Icons from '../../global/Icons';
import screens from '../../global/screens';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width * 0.828;


class LeftMenuDrawer extends Component {

  render() {
    
    return(
      <View style = {styles.container}>
        <Image source={Images.Bg} resizeMode="cover" style={styles.backgroundImage}/>
        <StatusBar/>
        <Components.StatusBar/>

        <View style={styles.companyInfoContainer}>
          <Image source={{uri:Images.avatarURL}} style={styles.avatar}></Image>
          <View style={styles.companyTitleContainer}>
            <Text style={styles.name}>Arkotech Corporation</Text>
            <Text style={styles.id}>@ARKO</Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <View style={styles.menuItemContainer}>
            <Image source={Icons.meter} style={styles.menuItemIcon} />
            <Text style={styles.menuItemTitle}>Create new job</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <Image source={Icons.graph} style={styles.menuItemIcon} />
            <Text style={styles.menuItemTitle}>Change / Delete job</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <Image source={Icons.sun} style={styles.menuItemIcon} />
            <Text style={styles.menuItemTitle}>Edit Profile</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <Image source={Icons.board} style={styles.menuItemIcon} />
            <Text style={styles.menuItemTitle}>On board Employees</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <Image source={Icons.files} style={styles.menuItemIcon} />
            <Text style={styles.menuItemTitle}>Contacts</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <Image source={Icons.files} style={styles.menuItemIcon} />
            <Text style={styles.menuItemTitle}>Layout</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <Image source={Icons.files} style={styles.menuItemIcon} />
            <Text style={styles.menuItemTitle}>Track Jobs</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <Image source={Icons.fourOptions} style={styles.menuItemIcon} />
            <Text style={styles.menuItemTitle}>Sign out</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuDrawer);
