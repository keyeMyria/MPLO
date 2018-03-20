/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Alert,
  View, Dimensions
} from 'react-native';
import { connect } from 'react-redux';

import Components from './global/Components';

import MapView, { Marker, ProviderPropType } from 'react-native-maps';

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


class App extends Component<Props> {

  
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
        <Text>Waleed</Text>
        <MapView
          provider={this.props.provider}
          style={{flex:1}}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
        <Marker
            onPress={() => Alert.alert('Marker 1')}
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE + SPACE,
            }}
            centerOffset={{ x: -18, y: -60 }}
            anchor={{ x: 0.69, y: 1 }}
            image={{uri:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'}}
          >
            <Text style={styles.marker}>X</Text>
          </Marker>
          <Marker
            onPress={() => Alert.alert('Marker 2')}
            coordinate={{
              latitude: LATITUDE - SPACE,
              longitude: LONGITUDE - SPACE,
            }}
            centerOffset={{ x: -18, y: -60 }}
            anchor={{ x: 0.69, y: 1 }}
            image={{uri:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'}}
          />
          <Marker
            onPress={() => Alert.alert('Marker 3')}
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE - SPACE,
            }}
//            centerOffset={{ x: -18, y: -60 }}
            anchor={{ x: 0.69, y: 1 }}
            size = {{ x: 100, y : 100 }}
            origin = {{ x: 0, y : 0 }}
            image={{uri:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'}}
          />
        </MapView>
        <Text>Farooqi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

