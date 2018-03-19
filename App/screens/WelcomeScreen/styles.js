import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../global/Colors';
import { Dimensions, Platform } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    bg: {
      width : deviceWidth,
      height : Platform.OS === 'ios' ? deviceHeight*.52 : ((deviceHeight * .52)-20),
      resizeMode : 'cover',
    },
    logo:{
      position:'absolute',
      top : deviceHeight * .148,
      left: deviceWidth * .3,
      width : deviceWidth * .4,
      height : deviceWidth * .4,
    },
    bottomContainer:{
      marginTop: deviceHeight*.032,
    },
    textContainer:{
//      backgroundColor:'blue',
    },
    
    heading:{
      fontFamily:'Roboto-Medium',
      fontSize: 22,
      color:Colors.appPrimaryRedColor,
      textAlign:'center',
//      backgroundColor:'blue',
//      height:deviceHeight*.022,
    },
    welcomeMessage:{
      fontFamily : 'Roboto-Regular',
      fontSize:16,
      marginTop: deviceHeight * .026,
      width:deviceWidth * .863,
      marginLeft : deviceWidth * .069,
      textAlign:'center',
      height:deviceHeight*.091,
    },

    hireMeButton:{
      width:deviceWidth * .889,
      marginLeft:deviceWidth * .055,
      marginTop : deviceHeight * .091,
      backgroundColor : Colors.appPrimaryDarkColor,
      elevation: 0,
    },
    hiringMeButton:{
      width:deviceWidth * .889,
      marginLeft:deviceWidth * .055,
      marginTop:deviceHeight*.027,
      backgroundColor:Colors.white,
      borderColor : Colors.appPrimaryDarkColor,
      borderWidth:.5,
      elevation: 0,
    },
    hiringMeButtonText:{
      color:Colors.appPrimaryDarkColor,
    },
});

export default styles;