import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../global/Colors';
import { Dimensions, Platform } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width * 0.828;

const styles = MediaQueryStyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      zIndex:5,
    },
    backgroundImage:{
      flex:1,
      zIndex:-1,
      position:'absolute',
    },
    avatar:{
      width : deviceWidth * .16,
      height : deviceWidth * .16,
      borderRadius : deviceWidth * .08,
    },
    companyInfoContainer:{
      flexDirection:'row',
      marginLeft:deviceWidth * .065,
      marginTop : deviceHeight * .069,
    },
    companyTitleContainer:{
      marginLeft:deviceWidth * .049,
    },
    name:{
      color : Colors.appPrimaryRedColor,
      fontSize: 16,
      fontFamily : 'Roboto-Medium',
    },
    id:{
      color : Colors.white,
      fontSize:12,
    },
    menuContainer:{
      marginLeft:deviceWidth * .0625,
      marginTop : deviceHeight * .008,
      height : deviceHeight * .024,
    },
    menuItemContainer:{
      flexDirection:'row',
//      backgroundColor:'red',
//      alignItems:'center',
      marginTop : deviceHeight * .03,
    },
    menuItemIcon:{
      width : deviceWidth * .051,
      height : deviceWidth * .051,
      marginTop:deviceHeight * .005,

    },
    menuItemTitle:{
      width : deviceWidth * .53,
      color : Colors.white,
      marginLeft : deviceWidth * .09,
      fontFamily : 'Roboto-Regular',
      fontSize : 14,
      letterSpacing:5,
      paddingBottom : deviceHeight * .032,
      borderBottomWidth:1,
      borderBottomColor:'white',
    }
});

export default styles;