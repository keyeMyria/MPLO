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
    headerContainer:{
      marginTop : deviceHeight * .05,
      height : deviceHeight * .0278,
      marginLeft : deviceWidth * 0.066,
      flexDirection:'row',
      alignItems:'flex-start',
//      backgroundColor:'red',
    },
    crossIcon:{
      height : deviceHeight * .0278,
      width : deviceHeight * .0278,

    },
    HeaderTitle:{
      fontSize : 18,
      textAlign:'center',
      marginLeft:deviceWidth * .31,
      fontWeight:'500',
      letterSpacing:1,
    },
    createButtonContainer:{
      width:deviceWidth*.704,
      height : deviceHeight * .449,
      backgroundColor : Colors.createProfileButton,
      borderWidth:1,
      borderColor : Colors.createProfileButtonBorder,
      borderRadius:5,
      marginLeft:deviceWidth*.148,
      marginTop:deviceHeight*.11,
    },
    createButton:{
      width : deviceWidth * .377,
      height : deviceWidth * .377,
      marginLeft : deviceWidth * .164,
      marginTop : deviceHeight * .12,
    },
    connectButton:{
      width : deviceWidth * .704,
      marginLeft:deviceWidth*.148,
      marginTop:deviceHeight*.225, 
      backgroundColor:Colors.linkedInButton,     
    },
    connectButtonIcon:{},
    connectButtonText:{
      fontFamily : 'Roboto-Regular',
//      height : deviceHeight * .031,
      fontSize:18,
      marginTop:2,
      paddingLeft:-10,
//      backgroundColor:'red',
    },
    signInContainer:{
      flexDirection:'row',
      marginLeft:deviceWidth*.148,
      marginTop:deviceHeight*.019,
    },
    alreadyText:{
      color : Colors.appHeaderLightColor,
      fontSize:14,
      fontFamily : 'Roboto-Medium',
    },
    signInButton:{},
    signInText:{
      fontSize:16,
      fontFamily: 'Roboto-Medium',
      fontWeight:'900',
      color:'#000',
      marginTop:-2,
    },
});

export default styles;