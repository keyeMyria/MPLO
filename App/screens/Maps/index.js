/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,Alert, Image,
  View, Dimensions, Text, StatusBar,
} from 'react-native';
import { connect } from 'react-redux';

import { Container, Header, Left, Body, Right, Button, Icon,
  Title, Content, Input,Item, Form, Text as NBText
 } from 'native-base';

import Components from '../../global/Components';
import styles from './styles';

import MapView, { Marker, Callout, ProviderPropType } from 'react-native-maps';
import Icons from '../../global/Icons';

import { navigateToNextScreen, openDrawer } from '../../../App';


const flagBlueImg = {uri:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png'};
const flagPinkImg =  {uri:'https://pre00.deviantart.net/a18a/th/pre/f/2015/161/a/e/itunes_13_icon__png__ico__icns__by_loinik-d8wqjzr.png'};

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};



const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;


class Maps extends Component<Props> {

  
  constructor(props){
    super(props);
    this.state = { 
      marker1: true,
      marker2: false,
      region : {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers : [
        {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          title: 'Waleed Farooqi',
          subtitle: '1234 Foo Drive'
        }
      ],
    };
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  
  onRegionChange(_region) {
    this.setState({ region : _region });
  }
  


  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <View style={styles.mapBackground}/>
        <Button info style={styles.menuButton} onPress={openDrawer.bind(this)}>
          <Icon name='menu' style={styles.menuButtonIcon}/>
        </Button>

        <View style={styles.infoContainer}>
          <View style={styles.columnContainer}>
            <Image source={Icons.search} style={styles.searchIcon}/>
            <View style={styles.infoTextContainer}>
              <NBText style={styles.locationText}>LOCATION</NBText>
              <NBText style={styles.address}>994 Colin Gateway Suite 981</NBText>
            </View>
          </View>
        </View>
        <MapView
          provider={this.props.provider}
          style={styles.mapContainer}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE + SPACE,
            }}
            centerOffset={{ x: -18, y: -60 }}
            anchor={{ x: 0.69, y: 1 }}
            image={Icons.mapPointer}
          >
          <Callout tooltip style={styles.customView}>
              <Components.CustomCallout>
              </Components.CustomCallout>
            </Callout>

          </Marker>
          <Marker
            coordinate={{
              latitude: LATITUDE - SPACE,
              longitude: LONGITUDE - SPACE,
            }}
            centerOffset={{ x: -18, y: -60 }}
            anchor={{ x: 0.69, y: 1 }}
            image={Icons.mapPointer}
          >
          <Callout tooltip style={styles.customView}>
              <Components.CustomCallout>
              </Components.CustomCallout>
            </Callout>
          </Marker>

          <Marker
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE - SPACE,
            }}
//            centerOffset={{ x: -18, y: -60 }}
            anchor={{ x: 0.69, y: 1 }}
            size = {{ x: 100, y : 100 }}
            origin = {{ x: 0, y : 0 }}
            image={Icons.mapPointer}
          >
          
          <Callout tooltip style={styles.customView} onPress={()=>console.log('a')}>
              <Components.CustomCallout>
              </Components.CustomCallout>
            </Callout>
          </Marker>
        </MapView>

        <Button block style={styles.blockButton} onPress={navigateToNextScreen.bind(this,'MPLO.MATCH_PROFILE')}>
          <Text style={styles.blockButtonText}>MATCH</Text>
        </Button>
        <Button block style={styles.cancelButton} onPress={()=> this.props.navigator.pop()}>
          <Text style={styles.cancelButtonText}>CANCEL</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Maps);

