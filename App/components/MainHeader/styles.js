import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../global/Colors';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
  headerContainer:{
    height : deviceHeight * .0637,
    marginLeft : deviceWidth * 0.051,
    marginRight:deviceWidth * .049,
    flexDirection:'row',
    alignItems:'center',
  //  backgroundColor:'red',
  },
  title:{
    fontFamily : 'Roboto-Medium',
    color : Colors.appHeaderDarkColor,
  },
  iconStyles:{
    fontSize:20,
    color:Colors.white,
  },
  logoStyle:{
    width : deviceWidth * .052,
    height: deviceHeight * .025,
  },
  headerBody:{
    width:deviceWidth * .825,
    alignItems:'center',
  }
});

export default styles;