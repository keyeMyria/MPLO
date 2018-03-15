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
      marginTop : deviceHeight * .06,
      height : deviceHeight * .0278,
      marginLeft : deviceWidth * 0.066,
      flexDirection:'row',
      alignItems:'flex-start',
      backgroundColor:'red',
    },
    crossIcon:{
      height : deviceHeight * .0278,
      width : deviceHeight * .0278,

    },
    HeaderTitle:{
      fontSize : 18,
      textAlign:'center',
      marginLeft:deviceWidth * .31,
    },
    createButton:{
      width:deviceWidth*.704,
      height : deviceHeight * .5,
      backgroundColor : Colors.createProfileButton,
      borderWidth:1,
      borderColor : Colors.createProfileButtonBorder,
      borderRadius:5,
      marginLeft:deviceWidth*.148,
      marginTop:deviceHeight*.11,
    }

});

export default styles;