import { MediaQueryStyleSheet } from 'react-native-responsive';
import Global from '../../global';
import { Dimensions, Platform } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
  container:{
    backgroundColor : Global.Colors.appSemiWhiteBackground,
    flex:1,
    
  },
  flatListContainer:{
    backgroundColor : Global.Colors.appSemiWhiteBackground,
  },
  flatList:{
    flex:1,
    paddingTop : deviceHeight * .015,
    backgroundColor : Global.Colors.appSemiWhiteBackground,
  },
});

export default styles;