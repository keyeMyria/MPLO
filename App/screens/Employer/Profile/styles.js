import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../../global/Colors';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bg:{
    width: deviceWidth,
    height : deviceHeight * .292,
    marginTop : deviceHeight * .024,
  },
  statInfoContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:deviceWidth * .883,
    marginLeft: deviceWidth * .06,
//    marginTop : deviceHeight * .034,
    height : deviceHeight * .114,
//    backgroundColor:'red',
//    borderBottomWidth:1,

  },
  hourStatContainer:{
    alignItems:'center',
    width: deviceWidth * .176,
//    backgroundColor:'pink',
    marginTop : deviceHeight * .03,
    height : deviceHeight * .084,
    justifyContent : 'space-between',
  },
  jobsStatContainer:{
    alignItems:'center',
    width : deviceWidth * .204,
//    backgroundColor:'pink',
    marginTop : deviceHeight * .03,
    height : deviceHeight * .084,
    justifyContent : 'space-between',
  },
  statTitle:{
    fontSize:16,
    color : Colors.appHeaderDarkColor,
    fontFamily : 'Roboto-Medium',
  },
  statText:{
    fontSize : 10,
    color : Colors.jobStatTextColor,
    fontFamily : 'Roboto-Medium',
  },
  avatarContainer:{
    position : 'absolute',
    bottom:0,
    zIndex:3,
//    alignItems:'center',
    marginLeft : (deviceWidth * .44) - (deviceWidth * .2),
    borderRadius : deviceWidth * .2,
    backgroundColor : Colors.createProfileButton,
  },
  avatar:{
    height : deviceHeight * .228,
    width : deviceWidth * .4,
    borderRadius : deviceWidth * .2,
//    backgroundColor : Colors.createProfileButton,
  },
  moreInfoContainer:{
//    backgroundColor:'pink',
    alignItems:'center',
    marginTop : deviceHeight * .019,
  },
  jobTitleText:{
    fontSize:12,
    color : Colors.appPrimaryTextDarkColor,
    fontFamily : 'Roboto-Medium',
  },
  positionText:{
    fontSize:7,
    fontFamily : 'Roboto-Bold',
    color : Colors.jobLocationTextColor,
    marginTop : deviceHeight * .008,
  },
  starContainer:{
    marginTop : deviceHeight * .015,
  },
  starButtonStyle:{
    width: deviceWidth * .057,
  },
  experienceText:{
    fontSize:12,
    fontFamily : 'Roboto-Regular',
    letterSpacing:1,
    width : deviceWidth * .868,
    marginLeft: deviceWidth * .085,
    textAlign:'left',
  },
  lineDraw:{
    height:deviceHeight * .002,
    width : deviceWidth,
    backgroundColor: Colors.emptyLine,
    marginTop : deviceHeight * .0168,
  }
});

export default styles;