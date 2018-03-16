import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../global/Colors';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
  headerContainer:{
    marginTop : deviceHeight * .03,
    height : deviceHeight * .0278,
    marginLeft : deviceWidth * 0.066,
    flexDirection:'row',
    flex:1,
    alignItems:'flex-start',
//      backgroundColor:'red',
  },
  crossButton:{
    zIndex : 1,
  },
  crossIcon:{
    height : deviceHeight * .0278,
    width : deviceHeight * .0278,
//    backgroundColor:'red',
  },
  HeaderTitle:{
    fontSize : 18,
    textAlign:'center',
    flex:1,
    marginLeft:deviceWidth * -.1,
    fontWeight:'500',
    letterSpacing:1,
  },
});

export default styles;