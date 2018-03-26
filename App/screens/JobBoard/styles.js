import { MediaQueryStyleSheet } from 'react-native-responsive';
import Global from '../../global';
import { Dimensions, Platform } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
  container:{
  },
});

export default styles;