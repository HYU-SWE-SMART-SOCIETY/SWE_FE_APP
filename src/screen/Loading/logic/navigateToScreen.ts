import {Alert, ToastAndroid} from 'react-native';

export const timeoutTest = () => {
  setTimeout(() => {
    Alert.alert('TIMEOUT SUCCESSFUL!');
  }, 5000);
};

export const navToFirstMain = (navigateFun: () => void) => {
  setTimeout(() => {
    ToastAndroid.showWithGravity(
      '설정을 모두 불러왔습니다.',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }, 5000);
};
