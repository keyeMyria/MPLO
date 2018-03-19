import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../global/Colors';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
  

  barGraphContainer:{
    height : deviceHeight * .02,
    flexDirection:'row',
  },
  barLeftPart:{
    backgroundColor:'#2ecc71',
    alignItems:'flex-end',
    justifyContent:'center',
  },
  barRightPart:{
    backgroundColor: '#f2f2f1',
  },
  valueText:{
    fontSize:8,
    fontFamily : 'Roboto-Bold',
    color : Colors.white,
    marginRight : deviceWidth * .02,
  },
});

export default styles;