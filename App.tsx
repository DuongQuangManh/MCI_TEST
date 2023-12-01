/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  ApplicationProvider,
  Layout,
  Text,
  Input,
  IconRegistry,
} from '@ui-kitten/components';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {LogBox, StyleSheet} from 'react-native';
import * as eva from '@eva-design/eva';
import {Provider} from 'react-redux';
import {persistor, store} from '@redux/store';
import {PaperProvider} from 'react-native-paper';
import {PersistGate} from 'redux-persist/integration/react';
import {StackNavigation} from '@navigations';
import {default as theme} from './custom-theme.json';
import {default as mapping} from './mapping.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'new NativeEventEmitter',
]);

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          {...eva}
          theme={{...eva.light, ...theme}}
          customMapping={mapping}>
          <StackNavigation />
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
