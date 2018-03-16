import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../../global/Colors';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bg:{
    width: deviceWidth,
    height : deviceHeight * .292,
    marginTop : deviceHeight * .024,
  },
  statInfoContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:deviceWidth * .883,
    marginLeft: deviceWidth * .06,
    marginTop : deviceHeight * .034,
  },
  hourStatContainer:{
    alignItems:'center',
    width: deviceWidth * .176,
    height : deviceHeight * .068,
    backgroundColor:'red',
  },
  jobsStatContainer:{
    alignItems:'center',
    width : deviceWidth * .204,
  }
});

export default styles;