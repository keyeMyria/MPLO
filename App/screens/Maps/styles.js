import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../global/Colors';
import { Dimensions, Platform } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  mapBackground:{
    height : Platform.OS === 'ios' ? deviceHeight * .712 : (deviceHeight  * .712) - 20,
    width : deviceWidth,
    position:'absolute',
    zIndex:-1,
    backgroundColor:Colors.blue,
  },
  menuButton:{
    width : deviceWidth * .1,
    height : deviceWidth * .1,
    justifyContent: "center",
    alignItems:'center',
    backgroundColor:Colors.white,
    borderWidth:0,

    position : 'absolute',
    zIndex:1,
    top : Platform.OS === 'ios' ? deviceHeight * .032 : (deviceHeight * .032),
    left : deviceWidth * .038,
  },
  menuButtonIcon:{
    fontSize : responsiveFontSize(3.2),
    textAlign:'center',
    width : deviceWidth * .1,
    color : Colors.appPrimaryDarkColor,
  },
  infoContainer:{
    width : deviceWidth * .945,
    height : deviceHeight * .0786,
    backgroundColor : Colors.white,
    borderRadius : 5,
    elevation : 2,

    position : 'absolute',
    top : Platform.OS === 'ios' ? deviceHeight * .104 : (deviceHeight * .104),
    left : deviceWidth * .027,
    zIndex : 1,
  },
  columnContainer:{
    flexDirection:'row',
    //backgroundColor:'red',
    marginTop : deviceHeight * .007,
    marginLeft : '5%',
    marginBottom : deviceHeight * .03,
    height: deviceHeight * .0564,
    alignItems:'center',
  },
  infoTextContainer:{
    marginLeft : deviceWidth * .0748,
    height: deviceHeight * .0564,
    alignItems:'center',
  },
  locationText:{
    fontFamily : 'Roboto-Medium',
    fontSize : responsiveFontSize(1.5),
    color : Colors.locationTextColor,
  },
  address:{
    fontFamily : 'Roboto-Regular',
    fontSize : responsiveFontSize (2.3),
    letterSpacing : 1.7,
    color : Colors.locationAddressColor,
    marginTop : deviceHeight * .005,
  },
  
  searchIcon:{
    width : deviceWidth * .0394,
    height : deviceWidth * .0394,
    marginTop : deviceHeight * .009,
  },
  mapContainer:{
    height : Platform.OS === 'ios' ? deviceHeight * .712 : (deviceHeight  * .712) - 20,
    width : deviceWidth,
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
  blockButton:{
    height : deviceHeight * .08,
    backgroundColor : Colors.appPrimaryDarkColor,
    width : deviceWidth * .891,
    marginLeft : deviceWidth * .059,
    marginTop : deviceHeight * .052,
    elevation : 0,
  },
  blockButtonText:{
    color : Colors.white,
    fontSize: responsiveFontSize(1.9),
  },
  cancelButton:{
    height : deviceHeight * .08,
    backgroundColor : Colors.white,
    width : deviceWidth * .891,
    marginLeft : deviceWidth * .059,
    marginTop : deviceHeight * .0266,
    marginBottom : deviceHeight * .034,
    elevation : 0,
    borderColor : '#2d3750',
    borderWidth : 1,
  },
  cancelButtonText:{
    color : Colors.keepSwipingTextColor,
    fontSize: responsiveFontSize(1.9),
  },
});

export default styles;