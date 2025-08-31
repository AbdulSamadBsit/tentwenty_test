import React from 'react';
import {RefreshControl, Alert, Platform, Dimensions, PermissionsAndroid} from 'react-native';


const isIos = Boolean(Platform.OS === 'ios');

class utils {
  confirmAlert(title, msg, callback) {
    Alert.alert(
      title,
      msg,
      [
        {text: 'NO', onPress: () => callback('error')},
        {text: 'YES', onPress: () => callback('success')},
      ],
      {cancelable: false},
    );
  }

   isRoleAllowed = (userRole: string | null, allowedRoles: string[]): boolean => {
    return userRole ? allowedRoles.includes(userRole) : false;
  };
  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
  isObjectEmplty(obj) {
    if (Object.keys(obj).length > 0) {
      return true;
    } else {
      return false;
    }
  }
  isNull(obj) {
    if (obj === null || obj === undefined || obj === '') {
      return true;
    } else {
      return false;
    }
  }
  keyExtractor(){
    return Math.random().toString();

  }

  checkURLExists(string) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return urlRegex.test(string);
  }

  hasPatterns(text) {
    // Define regex patterns for URLs, emails, phone numbers, and mentions
    const urlPattern = /(https?:\/\/\S+|www\.\S+)/g;
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const phonePattern = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g;
    const mentionPattern = /@\w+/g;

    // Find all URLs, emails, phone numbers, and mentions in the text
    const urls = text?.match(urlPattern);
    const emails = text?.match(emailPattern);
    const phones = text?.match(phonePattern);
    const mentions = text?.match(mentionPattern);

    // Return true if any pattern is found, otherwise false
    return !!(urls || emails || phones || mentions);
  }

  validateEmail(str) {
    var pattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return pattern.test(str);
  }
  validateUrl(url) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (urlRegex.test(url)) {
      return true;
    } else {
      return false;
    }
  }
  convertDate(date) {
    let day = date.split('/');
    return `${day[2]}-${day[1]}-${day[0]}`;
  }
  convertFormData(val) {
    var filename = val?.path.match(/.*\/(.*)$/)[1];

    return {
      name: filename,
      type: val.mime,
      uri: isIos ? val.path.replace('file://', '') : val.path,
    };
  }

  isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }



  serializeObj(obj) {
    var str = [];
    for (var p in obj)
      if (obj[p] != '') {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    return str.join('&');
  }




  showResponseError(error) {
    if (error.message === 'Network Error') {
      let error = 'Please check your network';
      return error;
    } else {
      if (error.response) {
        let errorCode = JSON.stringify(error.response.status);
        if (errorCode === '400') {
          let response = error.response.data;
          var error = '';
          if (this.isEmpty(response.data)) {
            error = response.message;
          } else {
            error = response.data;
          }
          return error;
        } else if (errorCode === '405') {
          return 'API method not allowed!';
        } else if (errorCode === '404') {
          return 'API not found!';
        } else if (errorCode === '401') {
          return error.response.data.message;
        } else {
          return error?.response?.data?.message;
        }
      }
    }
  }

   isImageUrl(url) {
    return /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(url);
  }

  getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  formatCurrency(amount, language = 'en-AE') {
    return Number(amount).toLocaleString({
      style: 'currency',
      currency: 'AED',
    });
  }
  _formatCurrency(amount, language = 'en-AE') {
    return Number(amount).toLocaleString('en', {
      style: 'currency',
      currency: 'AED',
    });
  }

  /// grant permission in android
  getDownloadPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'File Download Permission',
          message: 'Your permission is required to save Files to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;
    } catch (err) {
    }
  };


}

export default new utils();