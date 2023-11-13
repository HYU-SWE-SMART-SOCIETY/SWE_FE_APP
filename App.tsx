import React, {ReactElement, RefObject} from 'react';
import {RootNavigator} from './src/nav/appNavigation';
import {NavigationContainerRef} from '@react-navigation/native';
import {ScreenStackParamList} from './src/types/navigator';

function App(): ReactElement | null {
  return <RootNavigator />;
}

export default App;
