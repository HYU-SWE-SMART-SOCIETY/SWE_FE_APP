import React, {ReactElement} from 'react';
import {RootNavigator} from './src/nav/appNavigation';

function App(): ReactElement | null {
  return <RootNavigator />;
}

export default App;
