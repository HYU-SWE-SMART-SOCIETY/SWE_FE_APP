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
    cmdFlag: number;
  };
  QR: undefined;
  Add: undefined;
  Accontrol: undefined;
  Main2: {
    user: User | null; //* Logged In User
    cmdFlag: number;
  };
  Modal: undefined;
  loading: undefined;
  briefing: undefined;
  holme: undefined;
  menubar: undefined;
  report: undefined;
};
