import { StyleSheet } from "react-native";

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 15,
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
    },
    title: {
      textAlign: 'center',
      marginBottom: 24,
      fontSize: 28,
      fontWeight: 'bold',
      color:theme.colors.text
    },
    input: {
      marginBottom: 16,
    },
    button: {
      marginTop: 8,
    },
    row:{
      flexDirection:'row',
      alignItems:'center'
    },
    createAccountView:{
      flexDirection:'row',
      alignItems:'center',
      alignSelf:'center',
      marginTop:10
    },
    createAccount:{
      fontSize:16,
      color:theme.colors.primary,
      fontWeight:'500'
    },
    forgetPassword:{
      color:theme.colors.text,
      fontSize:14,
      alignSelf:'flex-end'
    },

    text:{
      color:theme.colors.text,
      fontSize:14
    },
    icon:{
      color:theme.colors.icon
    }
  })


  export default createStyles;
