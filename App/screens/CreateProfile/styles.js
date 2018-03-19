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
      elevation : 0,     
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
      marginTop:deviceHeight*.019,
      marginBottom : Platform.OS === 'ios' ? 0 : deviceHeight*.01,
      justifyContent:'center',
    },
    alreadyText:{
      color : Colors.appHeaderLightColor,
      fontSize:11,
      fontFamily : 'Roboto-Medium',
    },
    signInButton:{},
    signInText:{
      fontSize:11,
      fontFamily: 'Roboto-Medium',
      fontWeight:'900',
      color:'#000',
    },
    
});

export default styles;