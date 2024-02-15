import {AppRegistry} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
import TabNavigator from './src/navigator';
import {Provider} from 'react-redux';
import storeConfig from './src/store/StoreConfig';

const store = storeConfig();

const Redux = () => {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Redux);
