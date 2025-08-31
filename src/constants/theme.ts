import {Dimensions, Platform, StatusBar, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {RFValue} from 'react-native-responsive-fontsize';

export const {width, height} = Dimensions.get('window');

/* *************** Colors ********** */

export const COLORS = {
  // base colors
  primary: '#2E2739',
  secondary: '#ff08c9',

  purpal: 'rgb(144,43,444)',
  purpalHex: '#5232b7',
  Dark: '#1E1F26',
  green: '#00bca6',
  red: '#ff4346',

  // normal colors
  BLACK: '#2C2D34',
  black: '#22232b',
  darkGrey: '#4d4d4d',

  grey: '#b3b3b3',
  lightGrey: '#f2f2f2',
  brownGrey: '#959595',
  facebook: '#0037c1',
  apple: '#262a34',
  google: '#eb4335',
  // gradients
  gradient: ['#20242b', '#3a3d46'],
  waring: '#ffcc00',

  // colors
  // red: '#860012',
  blackWithOpacity: '#00000050',
  white: '#FFFFFF',
  whiteOpacity: '#FFFFFF80',
  LightwhiteOpacity: '#FFFFFF05',

  transparent: 'transparent',
};

/* * Fonts * */
export const FONTFAMILY = {
  Light: 'ProximaNova-Regular',
  Medium: 'ProximaNova-Semibold',
  Bold: 'ProximaNova-Bold',
};

/* * Images * */
export const IMAGES = {
  //   blackLogo: require('../Assets/Images/blackLogo.png'),
};

/* * Screens * */
export const SCREENS = {
  // Auth
  Splash: 'Splash',
  Login: 'Login',
  SignUp: 'SignUp',
  ForgetPassword: 'ForgetPassword',
  OTP: 'OTP',
  ResetPassword: 'ResetPassword',

  AUTH_STACK: 'Auth_Stack',
  PROFILE_STACK: 'PROFILE_Stack',

  Notification: 'Notification',

  // Profile
  Profile: 'Profile',
  EditProfile: 'EditProfile',
  ChangePassword: 'ChangePassword',
  DeleteAccount: 'DeleteAccount',
};

/* * SIZES * */
export const SIZES = {
  // global sizes
  five: height * 0.0055,
  ten: height * 0.011,
  fifteen: height * 0.017,
  twenty: height * 0.023,
  twentyWidth: width * 0.05,
  twentyFive: height * 0.03,
  twentyFiveWidth: width * 0.08,
  fifty: height * 0.075,
  fiftyWidth: width * 0.13,

  // font sizes
  h14: RFValue(14, height),
  h16: RFValue(width * 0.034, height),
  h18: RFValue(width * 0.038, height),
  h20: RFValue(width * 0.042, height),
  h22: RFValue(width * 0.048, height),
  h24: RFValue(width * 0.055, height),
  h26: RFValue(width * 0.065, height),
  h28: RFValue(width * 0.069, height),
  h30: RFValue(width * 0.075, height),
  body08: RFValue(width * 0.024, height),
  body10: RFValue(width * 0.028, height),
  body12: RFValue(width * 0.032, height),
  body13: RFValue(width * 0.0335, height),
  body14: RFValue(width * 0.036, height),
  body16: RFValue(width * 0.04, height),
  body18: RFValue(width * 0.045, height),
};
/* * FONTS * */
export const FONTS = {
  boldFont14: {
    // fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h14,
    color: COLORS.BLACK,
  },
  boldFont16: {
    // fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h16,
    color: COLORS.BLACK,
  },
  boldFont18: {
    // fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h18,
    color: COLORS.BLACK,
  },
  boldFont20: {
    // fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h20,
    color: COLORS.BLACK,
  },
  boldFont22: {
    // fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h22,
    color: COLORS.BLACK,
  },
  boldFont24: {
    // fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h24,
    color: COLORS.BLACK,
  },

  mediumFont10: {
    // fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.body10,
    color: COLORS.BLACK,
  },
  mediumFont12: {fontSize: SIZES.body12},
  mediumFont13: {
    // fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.body13,
    color: COLORS.BLACK,
  },
  mediumFont14: {
    // fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.body14,
    color: COLORS.BLACK,
  },
  mediumFont16: {
    // fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.body16,
    color: COLORS.BLACK,
  },
  mediumFont18: {
    // fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.body18,
    color: COLORS.BLACK,
  },
  lightFont08: {
    // fontFamily: FONTFAMILY.Light,
    fontSize: SIZES.body08,
    color: COLORS.BLACK,
  },
  lightFont10: {
    // fontFamily: FONTFAMILY.Light,
    fontSize: SIZES.body10,
    color: COLORS.BLACK,
  },
  lightFont12: {
    // fontFamily: FONTFAMILY.Light,
    fontSize: SIZES.body12,
    color: COLORS.BLACK,
  },
  lightFont14: {
    // fontFamily: FONTFAMILY.Light,
    fontSize: SIZES.body14,
    color: COLORS.BLACK,
  },
  lightFont16: {
    // fontFamily: FONTFAMILY.Light,
    fontSize: SIZES.body16,
    color: COLORS.BLACK,
  },
  lightFont18: {
    // fontFamily: FONTFAMILY.Light,
    fontSize: SIZES.body18,
    color: COLORS.BLACK,
  },
};

/* * Custom Style * */
export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.white,
    paddingTop: Platform.OS === 'android' ? 0 : getStatusBarHeight() * 0.85,
  },
  splashLogo: {
    width: SIZES.fifteen * 13,
    height: SIZES.fifteen * 13,
    alignSelf: 'center',
  },
  loginView: {
    flex: 1,
    width: '100%',
    marginTop: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
  },
  lightText: {
    fontFamily: FONTFAMILY.Light,
  },
  mediumText: {
    fontFamily: FONTFAMILY.Medium,
  },
  boldText: {
    fontFamily: FONTFAMILY.Bold,
  },
  headingText: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.twenty + 5,
    color: COLORS.black,
  },
  paragraphText: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.fifteen - 1,
    color: COLORS.black,
  },
  drawerItem: {
    paddingHorizontal: SIZES.fifteen + 3,
    paddingVertical: SIZES.fifteen,
    borderRadius: SIZES.fifteen,
  },
  drawerIcon: {
    fontSize: SIZES.fifteen + 10,
  },
  drawerText: {
    fontSize: SIZES.fifteen,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.black,
    marginHorizontal: SIZES.fifteen - 5,
  },
  horLine: {
    height: 0.3,
    marginVertical: SIZES.fifteen,
    backgroundColor: COLORS.brownGrey,
  },
  CardStyle: {
    backgroundColor: COLORS.white,
    height: 50,
    borderRadius: SIZES.ten,
    marginHorizontal: SIZES.five / 2,
    paddingHorizontal: SIZES.five / 2,
    marginVertical: SIZES.five * 1.3,
    color: COLORS.black,
    justifyContent: 'space-between',
  },
  CardImage: {
    height: width * 0.1,
    width: width * 0.1,
  },
  dronDownStyle: {
    width: width * 0.3,
    borderRadius: SIZES.ten,
    height: 35,
    borderWidth: 1,
    borderColor: COLORS.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 0,
  },
});

/* * CONSTANTS * */

export const CONSTANTS = {
  CACHE_KEYS: {
    isFirstTime: '@isFirstTime',
    VERIFIED_UD: 'verified_UD',
    quickAccess: '@quickAccess',
    ACCESS_TOKEN: 'Accress',
  },
  FIREBASE: {
    CHAT: 'Chat',
    CHATROOMS: 'CHATROOMS',
    MEMBERS: 'MEMBERS',
    GROUPCHAT: 'GroupChat',
    MESSAGES: 'messages',
    SINGLE: 'SINGLE',
    GROUP: 'GROUP',
    CHEF_CHAT: 'CHEF_CHAT',
    USERS: 'Users',
    CHATHEADS: 'ChatHeads',
    READ: 'read',
    TOKEN: 'Tokens',
    FCM: 'https://fcm.googleapis.com/fcm/send',
    ADMIN_SUPPORT_CHAT: 'ADMIN_SUPPORT_CHAT',
  },
};
// aimal@smartwebagency.co.uk

/* * Api Path * */
export const API = {
  BaseUrl: __DEV__
    ? 'https://api.themoviedb.org/3/'
    : 'https://api.themoviedb.org/3/',

  IMAGE_URL: __DEV__
    ? 'https://image.tmdb.org/t/p/w780/'
    : 'https://image.tmdb.org/t/p/w780/',
  // Auth]
  AUTH: {
    LOGIN: 'api/user/login',
    SIGN_UP: 'api/user/signup',
    SOCIAL_LOGIN: 'api/user/social-login',
    VERIFY_OTP: 'api/user/verify-code',
    FORGOT_PASSWORD: 'api/user/forgot-password',
    RESET_PASSWORD: 'api/user/update-password',
    LOGOUT: 'api/user/logout',
    DEACTIVATE: 'api/user/delete-account',
  },
  KEY: '64a9e5bf7c4d9f2404d74c6b666caf16',

  MOVIE: {
    UPCOMING: 'movie/upcoming',
    CATEGORIES: 'genre/movie/list',
    SEARCH: 'genre/movie/list',
  },
};

export const FIREBASELABELS = {};

export const PAYMENTS = {
  Test_Environment_URL: 'https://sbcheckout.PayFort.com/FortAPI/paymentPage',
  Production_Environment_URL:
    'https://checkout.PayFort.com/FortAPI/paymentPage',

  Merchant_Identifier: 'ced180aa',
  Merchant_Name: 'Fused Portal Services',
  Access_Code: 'Bh9hT0NLJNiScrRnvgjK',
  Merchant_Request_Pass_Phrase: '28wGdoWNkuaWB1Oun5LxBm*_',
  Merchant_Response_Pass_Phrase: '40.TCs.W9PsetT3s2JV2Fu*(',
  SHA_Type: 'SHA-256',
  service_command: {
    Tokenization: 'TOKENIZATION',
  },
};
