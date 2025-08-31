import {StyleSheet} from 'react-native';

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 10,
    },

    profile_view: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profile_image: {
      height: 70,
      width: 70,
      borderRadius: 100,
      alignSelf: 'center',
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,

      elevation: 14,
    },
    info: {
      paddingLeft: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    email: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
    phone: {
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.colors.notification,
    },
    card: {
      backgroundColor: theme.colors.card,
      padding: 10,
      borderRadius: 10,
      margin: 10,

      shadowColor: theme.colors.shadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    text: {
      fontSize: 18,
      fontWeight: '500',
      color: theme.colors.text,
      paddingLeft: 10,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    screen: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    icon: {
      backgroundColor: theme.colors.primary + 50,
      padding: 5,
      borderRadius: 5,
    },
    btnStyle: {
      marginHorizontal: 10,
    },
    editProfileImage: {
      height: 130,
      width: 130,
      borderRadius: 100,
      alignSelf: 'center',
    },
    editIcon: {
      position: 'absolute',
      bottom: -5,
      right: -5,
      borderRadius: 100,
      
    },
    warning_icon: {
      position: 'absolute',
      bottom: -5,
      right: -5,
      borderRadius: 100,
      backgroundColor: theme.colors.notification,
      padding: 5,
    },
    name: {
      fontSize: 18,
      fontWeight: '500',
      alignSelf: 'center',
    },
    points: {
      fontSize: 14,
      marginTop: 10,
      fontWeight: '400',
      marginLeft: 10,
    },
    dot: {
      width: 8,
      height: 8,
      backgroundColor: theme.colors.primary,
      borderRadius: 100,
    },
    delete_account: {
      fontSize: 16,
      color: theme.colors.notification,
      alignSelf: 'center',
      textDecorationLine: 'underline',
    },
    switchText: {
      marginBottom: 10,
      fontSize: 18,
    },
    switchWrapper: {
      transform: [{scaleX: 0.7}, {scaleY: 0.7}], // Adjust scale as needed
    },
  });

export default createStyles;
