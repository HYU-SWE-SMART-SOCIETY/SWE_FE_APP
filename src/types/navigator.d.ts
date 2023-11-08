//* Navigator Parameter List
//* Define All Screen name and dedicated parameter list in here.
import {NativeStackScreenProps} from 'react-native-screens/native-stack';

export type ScreenStackParamList = {
  Gateway: undefined;
  WelcomeMain: undefined;
  LoginMain: undefined;
};

//* ScreenProps
export type GatewayProps = NativeStackScreenProps<
  ScreenStackParamList,
  'Gateway'
>;

export type WelcomeProps = NativeStackScreenProps<
  ScreenStackParamList,
  'WelcomeMain'
>;

export type LoginMainProps = NativeStackScreenProps<
  ScreenStackParamList,
  'LoginMain'
>;

export type MainProps = NativeStackScreenProps<ScreenStackParamList, 'Main'>;

export type MenuProps = NativeStackScreenProps<ScreenStackParamList, 'Menu'>;
