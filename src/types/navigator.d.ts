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
  Accontrol: {
    trigger: boolean;
    temp: number | null;
  };
  Accontrol2: {
    trigger: boolean;
    temp: number | null;
  };
  Main2: {
    user: User | null; //* Logged In User
    cmdFlag: number;
    data: any;
  };
  Loading: {
    navFuncFlag: number | string;
    data: any;
    text: string;
  };
  briefing: undefined;
  menubar: undefined;
};
