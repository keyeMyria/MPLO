import { MediaQueryStyleSheet } from 'react-native-responsive';
import Global from '../../global';
import { Dimensions, Platform } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
  container:{
  },
  contentContainer:{
    marginTop : deviceHeight * .046,
    alignItems:'center',
    paddingBottom:20,
  },
  optionButtonContainer:{
    width : deviceWidth * .498,
    height : deviceHeight * .365,
    borderWidth : 1,
    borderColor : Global.Colors.appPrimaryRedColor,
    alignItems:'center',
    backgroundColor:Global.Colors.white,
  }, 
  optButtonIcon:{
    width : deviceWidth * .18,
    height : deviceHeight * .104,
    marginTop : deviceHeight * .0262,
  },
  mapTitle:{
    fontFamily : 'Roboto-Medium',
    fontSize : responsiveFontSize(1.49),
    color : Global.Colors.mapViewColor,
    marginTop : deviceHeight * .033,
  },
  description:{
    fontSize : responsiveFontSize(1.1),
    textAlign:'center',
    width : deviceWidth * .358,
    marginTop:deviceHeight * .02,
    color : Global.Colors.optDescriptionText,
  },
  optInnerButton:{
    width : deviceWidth * .185,
    height : deviceHeight * .039,
    backgroundColor:Global.Colors.appPrimaryRedColor,
    marginTop : deviceHeight * .042,
    marginLeft : deviceWidth * .15,
    elevation : 0,
  },
  optInnerButtonText:{
    height : deviceHeight * .0195,  
    width : deviceWidth * .185,
    fontSize : responsiveFontSize(1.2),
    textAlign : 'center',
    color : Global.Colors.white,
    fontFamily:'Roboto-Medium',
  },

  optionButtonContainer2:{
    width : deviceWidth * .498,
    height : deviceHeight * .365,
    alignItems:'center',
    backgroundColor:Global.Colors.white,
    marginTop : deviceHeight * .0656,
    elevation:2,
  }, 
  optButtonIcon2:{
    width : deviceWidth * .1489,
    height : deviceHeight * .0733,
    marginTop : deviceHeight * .046,
  },
  mapTitle2:{
    fontFamily : 'Roboto-Medium',
    fontSize : responsiveFontSize(1.49),
    color : Global.Colors.mapViewColor,
    marginTop : deviceHeight * .033,
  },
  description2:{
    fontSize : responsiveFontSize(1.1),
    textAlign:'center',
    width : deviceWidth * .358,
//    backgroundColor:'red',
    marginTop:deviceHeight * .0326,
    color : Global.Colors.optDescriptionText,
  },
  optInnerButton2:{
    width : deviceWidth * .185,
    height : deviceHeight * .039,
    backgroundColor:Global.Colors.transparent,
    borderColor : Global.Colors.appPrimaryDarkColor,
    borderWidth : 1,
    marginTop : deviceHeight * .042,
    marginLeft : deviceWidth * .15,
    elevation : 0,
    alignItems:'center',
    justifyContent : 'center',
  },
  optInnerButtonText2:{
    height : deviceHeight * .0195, 
    width : deviceWidth * .185,
    fontSize : responsiveFontSize(1.2),
    textAlign : 'center',
    color : Global.Colors.optButtonText,
    fontFamily:'Roboto-Medium',
  },

});

export default styles;