import {AppRegistry} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
import TabNavigator from './src/navigator';
import {Provider} from 'react-redux';
import {storeConfig} from './src/store/StoreConfig';
import axios from 'axios';

axios.defaults.baseURL = 'https://lambe-b2144-default-rtdb.firebaseio.com/';

const Redux = () => {
  return (
    <Provider store={storeConfig}>
      <TabNavigator />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Redux);
