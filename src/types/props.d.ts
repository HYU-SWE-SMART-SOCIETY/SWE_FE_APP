import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {ScreenStackParamList} from './navigator';

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

export type AddProps = NativeStackScreenProps<ScreenStackParamList, 'Add'>;

export type AccontrolProps = NativeStackScreenProps<
  ScreenStackParamList,
  'Accontrol'
>;
