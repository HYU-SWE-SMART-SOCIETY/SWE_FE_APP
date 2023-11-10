//* Navigator Parameter List
//* Define All Screen name and dedicated parameter list in here.
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {User} from './entity/user';

export type ScreenStackParamList = {
  Gateway: undefined;
  WelcomeMain: undefined;
  LoginMain: undefined;
  Main: {
    user: User | null; //* Logged In User
  };
  QR: undefined;
  Add: undefined;
  Accontrol: undefined;
};
