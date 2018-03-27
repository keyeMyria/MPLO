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
    height : deviceHeight * .282,
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
    fontSize:20,
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
    height : deviceWidth * .4,
    width : deviceWidth * .4,
    borderRadius : deviceWidth * .2,
//    backgroundColor : Colors.createProfileButton,
  },
  addAvatarButtonContainer:{
    width : deviceWidth * .1,
    height : deviceWidth * .1,
    borderRadius : deviceWidth * .05,
    backgroundColor:Colors.appPrimaryRedColor,
    position:'absolute',
    zIndex:3,
    right:0,
    top:0,
    alignItems:'center',
    justifyContent:'center',
  },
  addAvatarButtonIcon:{
    width : deviceWidth * .039,
    height : deviceWidth * .039,
//    backgroundColor:'blue',
  },

  moreInfoContainer:{
//    backgroundColor:'pink',
    alignItems:'center',
    marginTop : deviceHeight * .016,
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
    marginTop : deviceHeight * .002,
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
    marginTop : deviceHeight * .017,
  },
  lineDraw:{
    height:deviceHeight * .002,
    width : deviceWidth,
    backgroundColor: Colors.emptyLine,
    marginTop : deviceHeight * .016,
  },
  skillsContainer:{
//    backgroundColor:'pink',
    marginTop : deviceHeight * .013,
    width : deviceWidth * .647,
    marginLeft : deviceWidth * .13,
  },
  skillItemContainer:{
//    backgroundColor:Colors.blue,
    marginTop : deviceHeight * .019,
  },
  skillHeading:{
    fontFamily : 'Roboto-Bold',
    fontSize : 9,
    marginBottom : deviceHeight * .01,
  }
});

export default styles;