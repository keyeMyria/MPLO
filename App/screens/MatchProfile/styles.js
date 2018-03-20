import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../global/Colors';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appPrimaryDarkColor,
  },
  swipeCardContainer:{
    marginLeft: deviceWidth * .098,
    flex:1,
  },
  bottomContainer:{
    flexDirection:'row',
    width : deviceWidth * .583,
    justifyContent: 'space-between',
    marginLeft : deviceWidth * .205,
    alignItems:'center',
    marginBottom: deviceHeight * .062,
  },
  buttonIcon:{
    width : deviceWidth * .139,
    height : deviceWidth * .139,
  },
  messageButtonIcon:{
    width : deviceWidth * .102,
    height : deviceWidth * .102,
  },

});

export default styles;