import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../global/Colors';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
  container: {
    flex: 1,
//    backgroundColor: Colors.appPrimaryDarkColor,
  },
  backgroundImage:{
    flex:1,
    zIndex:-1,
    position:'absolute',
  },
  matchText:{
    fontSize : 29,
    fontFamily:'Roboto-Medium',
    color:Colors.appPrimaryRedColor,
    textAlign:'center',
    marginTop : deviceHeight * .085,
    letterSpacing:4.9,
    
  },
  infoText:{
    fontFamily:'Roboto-Regular',
    fontSize:12,
    textAlign: 'center',
    color : Colors.white,
    marginTop : deviceHeight * .026,
  },
  avatarRowContainer:{
    flexDirection:'row',
    width : deviceWidth * .464,
    justifyContent:'space-between',
    marginLeft: deviceWidth * .268,
  },
  avatarContainer:{
    width : deviceWidth * .18,
    height : deviceWidth * .18,
    marginTop : deviceHeight * .0563,
  },
  buttonsContainer:{
    width : deviceWidth * .652,
    marginLeft : deviceWidth * .174,
  },
  continueButton:{
    backgroundColor:Colors.appPrimaryRedColor,
    height : deviceHeight * .058,
    marginTop : deviceHeight * .336,
    elevation:0,
  },
  continueText:{
    fontFamily : 'Roboto-Medium',
    fontSize : 12,
    color:'white',
  },
  keepButton:{
    backgroundColor:Colors.white,
    height : deviceHeight * .058,
    marginTop : deviceHeight * .028,
    elevation:0,
  },
  keepText:{
    fontFamily : 'Roboto-Medium',
    fontSize : 12,
    color : Colors.keepSwipingTextColor,
  }
});

export default styles;