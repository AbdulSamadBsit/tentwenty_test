import messaging from '@react-native-firebase/messaging';
import Firebase from './firebaseConfig';

export async function requestUserPermission() {
  Firebase(success => {});

  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFcmToken();
  }
}
const getFcmToken = async () => {
  // await messaging().registerDeviceForRemoteMessages();

  try {
    messaging()
      .getToken()

      .then(token => {
        console.log("------>", token);

      }).catch((e)=>{
        console.log("===>", e);
      })

    messaging().onTokenRefresh(token => {
      console.log("token", token);

    })
  } catch (error) {
    console.log("error", error);
  }
};
