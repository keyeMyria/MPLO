import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../global/Colors';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    bg: {
      width : deviceWidth,
      height : deviceHeight*.52,
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
    },
    hiringMeButton:{
      width:deviceWidth * .889,
      marginLeft:deviceWidth * .055,
      marginTop:deviceHeight*.027,
      backgroundColor:Colors.white,
      borderColor : Colors.appPrimaryDarkColor,
      borderWidth:.5,
    },
    hiringMeButtonText:{
      color:Colors.appPrimaryDarkColor,
    },
});

export default styles;