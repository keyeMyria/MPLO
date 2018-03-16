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
  avatarContainer:{
    width: deviceWidth*.362,
    height : deviceWidth * .362,
    backgroundColor : Colors.createProfileButton,
    borderRadius: deviceWidth * .18,
    marginLeft:deviceWidth*.32,
    marginTop:deviceHeight*.036,
  },
  avatarImage:{
      flex:1,
      // width:'undefined',
      // height:'undefined',
      borderRadius: deviceWidth * .18,
  },
  avatarIcon:{
//        backgroundColor:'red',
    width:deviceWidth * .12,
    height: deviceHeight * 0.08,
    marginTop : deviceHeight * .052,
    marginLeft : deviceWidth * .12,
  },
  avatarText:{
    fontFamily : 'Roboto-Medium',
    textAlign : 'center',
    marginTop:deviceHeight*.012,
    color : Colors.appPrimaryTextDarkColor,
    letterSpacing: -0.4,

  },
  addButtonContainer:{
    position:'absolute',
    right: deviceWidth *.016,
    top: deviceHeight * .008,
    backgroundColor:'red',
    width : deviceWidth * .08,
    height : deviceWidth * .08,
    borderRadius : deviceWidth * .04,
    alignItems:'center',
    justifyContent:'center',
  },
  addButton:{
    height:deviceWidth * .034,
    width:deviceWidth * .034,
  },
  formStyle:{
    width:deviceWidth * .836,
    marginLeft : deviceWidth * .082,
    marginTop : deviceHeight * .011,
  },
  labelTextStyle:{
    fontFamily:'Roboto-Medium',
    letterSpacing:1,
    fontSize:9,
//    height:deviceHeight * .014,
    color : Colors.appHeaderLightColor,
    marginTop : deviceHeight * .031,
  },
  inputTextStyle:{
    color : Colors.appPrimaryTextDarkColor,
    fontFamily : 'Roboto-Regular',
    letterSpacing:1,
    height: deviceHeight * .057,
    width:'100%',
    fontSize:11,
    borderBottomWidth:1,
    borderBottomColor : Colors.appPrimaryRedColor,
//        marginTop:deviceHeight * .01,
      //flex:1,

  },
  aboutInputContainer:{
//    backgroundColor:'blue',
    borderBottomWidth:1,
    borderBottomColor : Colors.appPrimaryRedColor,
    paddingBottom : deviceHeight * .012,
  },
  aboutInputTextStyle:{
    color : Colors.appPrimaryTextDarkColor,
    fontFamily : 'Roboto-Regular',
    letterSpacing:1,
    width:'100%',
    fontSize:11,
//    borderBottomWidth:5,
//    borderBottomColor : Colors.appPrimaryRedColor,
    marginTop:deviceHeight*.01,
     paddingBottom : deviceHeight * .015,
//    backgroundColor:'red',
  },
  inputText:{
    height:100,
    height: deviceHeight * .057,
    backgroundColor : 'red',
  },



  createButton:{
    width : deviceWidth * .377,
    height : deviceWidth * .377,
    marginLeft : deviceWidth * .164,
    marginTop : deviceHeight * .12,
  },
  createButton:{
    marginTop : deviceHeight * .027,
    backgroundColor:Colors.appPrimaryDarkColor,     
  },
  createButtonText:{
    fontFamily : 'Roboto-Regular',
//      height : deviceHeight * .031,
    fontSize:18,
    marginTop:2,
    paddingLeft:-10,
//      backgroundColor:'red',
  },
  signInContainer:{
    flexDirection:'row',
    marginTop:deviceHeight*.019,
    justifyContent:'center',
  },
  alreadyText:{
    color : Colors.appHeaderLightColor,
    fontSize:11,
    fontFamily : 'Roboto-Medium',
  },
  signInButton:{},
  signInText:{
    fontSize:11,
    fontFamily: 'Roboto-Medium',
    fontWeight:'900',
    color:'#000',
  },
  
});

export default styles;