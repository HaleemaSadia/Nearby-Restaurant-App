/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src/app/App.tsx';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
LogBox.ignoreAllLogs(true);
