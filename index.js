/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import TabNavigator from './src/navigator';

AppRegistry.registerComponent(appName, () => TabNavigator);
