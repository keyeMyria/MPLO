import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../global/Colors';
import { Dimensions, Platform } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default styles = MediaQueryStyleSheet.create({
  container: {
  },
  bubble: {
//    width: 140,
//    height : deviceHeight * .055,
    minHeight : deviceHeight * .055,
    maxWidth : deviceWidth * .8,
    flexDirection: 'row',
    backgroundColor: Colors.appPrimaryRedColor,
    // paddingHorizontal: 20,
    // paddingVertical: 12,
    borderRadius: 6,
    borderColor: '#007a87',
    borderWidth: 0.5,
  },
  columnContainer:{
    flexDirection:'row',
//    backgroundColor : Colors.blue,
    marginLeft : deviceWidth * .01,
    marginTop : '1%',
    marginBottom : '1%',
    alignItems:'center',
    marginRight : deviceWidth * .01,
//    width : '95%',
  },
  distStatContainer:{
    //height : '100%',
    backgroundColor : Colors.white,
    borderRadius : 5,
    alignItems:'center',
    width : deviceWidth * .074,
  },
  timeText:{
    fontSize : responsiveFontSize(1.8),
    fontFamily : 'Roboto-Medium',
    color : Colors.appPrimaryTextDarkColor,
    marginTop : -1 * deviceHeight * .003,
  },
  timeUnitText:{
    fontSize : responsiveFontSize(1.3),
    fontFamily : 'Roboto-Light',
    color : Colors.appPrimaryTextDarkColor,
    marginTop : -1 * deviceHeight * .003,
  },
  title:{
    marginLeft : deviceWidth * .024,
    marginRight : deviceWidth * .01,
    maxWidth : deviceWidth * .56,
    color : Colors.white,
//    maxHeight : '95%',
    //backgroundColor:'white',
    textAlign:'center',
    fontSize :responsiveFontSize (1.7),
  },
  forwardIcon:{
    fontSize : responsiveFontSize (2.5),
    marginRight : deviceWidth * .01,
    color : Colors.white,
  },
  amount: {
    flex: 1,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: Colors.appPrimaryRedColor,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    alignSelf: 'center',
    marginTop: -0.5,
  },
});
