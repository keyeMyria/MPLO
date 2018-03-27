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
    marginRight : deviceWidth * .043,
    borderRadius : 5,
    borderTopLeftRadius : 5,
    borderTopRightRadius: 5,
    //borderWidth : 1,
    // shadowOffset:{ height: 20,  },
     elevation:3,
    backgroundColor:Colors.white,
    marginBottom : deviceHeight * .013,
  },
  innerContainer1:{
    height : deviceHeight * .141,
    backgroundColor:Colors.white,
    borderRadius:5,
    elevation:4,
//    shadowOffset:{ height: 20,  },
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
    marginBottom : deviceHeight * .019,
  },
  innerContainer2:{
    height : deviceHeight * .0582,
//    marginTop : deviceHeight * .0267,
    marginLeft : deviceWidth * .031,
    justifyContent:'center',
    marginRight : deviceWidth * .054,
  },
  colContainer:{
    flexDirection : 'row',
    alignItems : 'flex-end',
    justifyContent : 'space-between',
  },
  locationText:{
    color : Colors.jobItemLocation,
    fontFamily : 'Roboto-Medium',
    fontSize : responsiveFontSize(1.44),
    letterSpacing : .6,
  },
  rateText:{
    //fontFamily : 'ProximaNova-Semibold',
    fontSize : responsiveFontSize(1.49),
    //color : Colors.appHeaderDarkColor,
  },


});

export default styles;