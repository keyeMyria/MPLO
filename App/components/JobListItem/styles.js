import { MediaQueryStyleSheet } from 'react-native-responsive';
import Colors from '../../global/Colors';
import { Dimensions } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = MediaQueryStyleSheet.create({
  container : {
    width : deviceWidth * .912,
    marginLeft : deviceWidth * .045,
    borderRadius : 5,
    elevation:1,
  },
  innerContainer1:{
    height : deviceHeight * .141,
//    backgroundColor:Colors.pink,
    elevation:10,
  },
  textContainer:{
    marginTop : deviceHeight * .0267,
    marginLeft : deviceWidth * .049,
    width : deviceWidth * .819,
//    backgroundColor:'pink',
  },
  title:{
    fontFamily : 'Roboto-Medium',
    color : Colors.appHeaderDarkColor,
  },
  jobDescription:{
    fontSize : responsiveFontSize(1.4),
    color : Colors.jobDescription,
    fontFamily : 'Roboto-Medium',
    marginTop : deviceHeight * .028,
  },
  innerContainer2:{
    height : deviceHeight * .0582,
    marginTop : deviceHeight * .0267,
    marginLeft : deviceWidth * .031,
    justifyContent:'center',

  },
  colContainer:{
    flexDirection : 'row',
  },
  locationText:{
    color : Colors.jobItemLocation,
  },


});

export default styles;