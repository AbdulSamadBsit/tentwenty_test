import {StyleSheet} from 'react-native';

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    renderItemContainer: {
      backgroundColor: theme.colors.background,

      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      overflow: 'hidden',
      paddingVertical: 5,
      marginBottom: 5,
    },
    contentContainer: {
      marginLeft: 5,
      width: '85%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    img: {height: 50, width: 50, borderRadius: 5},
    seeMore: {
      color: '#000',
      marginTop: 5,
    },

    rowBack: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
      marginBottom: 5,
    },
    backRightBtn: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 75,
    },
    deleteText: {
      fontSize: 12,
      color: theme.colors.text,
    },
    backRightBtnLeft: {
      right: 75,
    },
    backRightBtnRight: {
      right: 0,
      backgroundColor: theme.colors.notification,
    },

    editText: {
      fontSize: 12,
      color: theme.colors.text,
    },
    notificationTimeText: {
      fontSize: 12,
      color: theme.colors.notification,
    },
    notificationBody: {
      fontSize: 12,

      color: '#ccc',
    },
  });

export default createStyles;
