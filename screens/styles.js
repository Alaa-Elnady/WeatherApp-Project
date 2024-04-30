// MARK:Imports
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONTSIZE } from '../constants';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({

  PageContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.White,
  },

  // MARK:HomePage
  // ----------------------------
  // Header Styles
  homeHeader: {
    flex: 0.12,
    flexDirection: 'row',
    alignItems: "center",
    padding: RFValue(15),
    paddingHorizontal: RFValue(20),
    borderBottomLeftRadius: RFValue(20),
    borderBottomRightRadius: RFValue(20),
    justifyContent: "space-arround",
    backgroundColor: COLORS.PrimaryTeaRose,
  },

  backArrowContainer: {
    width: RFValue(40),
    height: RFValue(40),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitleContainer: {
    width: '80%',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },

  headerTitleText: {
    color: COLORS.White,
    fontSize: FONTSIZE.h3,
    fontWeight: 'bold',
    fontFamily: "Poppins-SemiBold",
    // fontFamily: "Poppins-SemiBold 600" ,
  },

  // Content Styles
  homeContentContainer: {
    flex: 0.88,
    padding: RFValue(15),
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  cityWeatherContainer: {
    width: RFValue(300),
    height: RFValue(190),
    marginVertical: RFValue(5),
    borderRadius: RFValue(20),
    // backgroundColor: 'pink',
  },

  cityImageStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },

  cityWeatherDetailsText: {
    marginLeft: RFValue(5),
    fontSize: FONTSIZE.h6,
    color: COLORS.MidGray,
  },

  cityWeatherStatus_tempContainer: {
    width: '100%',
    padding: RFValue(11),
    paddingHorizontal: RFValue(15),
    flexDirection: 'row',
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    // backgroundColor: '#f0f',
  },

  cityLocation_dateContainer: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: RFValue(8),
    justifyContent: 'space-between',
    borderBottomLeftRadius: RFValue(20),
    borderBottomRightRadius: RFValue(20),
    backgroundColor: COLORS.White,
  },

  cityLocationContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'#0ff',
  },

  dateContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor:'#ff0',
  },


  // MARK:AuthPages
  // ----------------------------
  // Header //
  authPagesHeader: {
    flex: 0.3,
    borderBottomLeftRadius: RFValue(25),
    backgroundColor: '#0ff',
  },

  authHeaderBgStyle: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },

  // Content //
  authContentContainer: {
    flex: 0.7,
    padding: RFValue(5),
    paddingVertical: RFValue(10),
    marginTop: RFValue(10),
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  authTextInputContainer: {
    width: RFValue(300),
    height: RFValue(50),
    paddingHorizontal: RFValue(15),
    marginTop: RFValue(8),
    alignSelf: 'center',
    borderRadius: RFValue(5),
    borderWidth: RFValue(1),
    borderColor: COLORS.LightGray,
    // backgroundColor: 'pink',
  },
  authTextInputLabel: {
    width: '32%',
    alignItems: 'center',
    marginTop: -RFValue(13),
    backgroundColor: COLORS.White,
    // backgroundColor:'#00f',
  },
  authTextInput: {
    // flex: 0.8,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    padding: RFValue(5),
    paddingHorizontal: RFValue(20),
    fontSize: FONTSIZE.h6,
    // backgroundColor:'#0f0',
  },
  passTextInput_eyeContainer: {
    width: '100%',
    flexDirection: 'row',
    // backgroundColor:'#f0f'
  },
  eyePassIconContainer: {
    width: '20%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    // backgroundColor:'#0ff'
  },
  acceptTermsContainer: {
    width: RFValue(320),
    // height: RFValue(60),
    flexDirection: 'row',
    alignItems: 'center',
    // paddingRight:RFValue(20),
    // marginTop: -RFValue(18),
    // backgroundColor: '#ff0',
  },
  checkboxStyle: {
    width: RFValue(250),
    paddingVertical: RFValue(0),
    // backgroundColor: '#00f'
  },
  // checkboxLabel: {
  //   width:RFValue(248),
  //   fontSize:FONTSIZE.h6,
  //   // backgroundColor: 'red',
  // },
  signUp_InBtn: {
    width: RFValue(300),
    height: RFValue(50),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: RFValue(5),
    borderRadius: RFValue(5),
    backgroundColor: COLORS.PrimaryPurple,
  },
  signUp_InText: {
    color: COLORS.White,
    fontSize: FONTSIZE.h4,
    fontWeight: 'bold',
  },

  // MARK:SignInPage
  passIconContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#0ff',
  },
  forgetPassContainer: {
    width: '38%',
    alignSelf: 'flex-end',
    marginRight: RFValue(20),
    alignItems: 'center',
    paddingHorizontal: RFValue(5),
    paddingBottom: RFValue(7)
    // backgroundColor: '#0f0',
  },
  forgetPassText: {
    fontSize: FONTSIZE.h6,
    color: COLORS.DarkGray,
  },
  socialMediaContainer: {
    alignSelf: "center",
    width: RFValue(190),
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: RFValue(25),
  },
  social_btn: {
    width: RFValue(43),
    height: RFValue(43),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.LightGray,
    borderWidth: 1,
    borderRadius: RFValue(5),
  },
})



























