import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddPhoto from './screens/AddPhoto';
import Feed from './screens/Feed';
import Profile from './screens/Profile';

import {faCamera, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import Login from './screens/Login';
import React from 'react';
import Register from './screens/Register';

type AuthStackParamList = {
  Profile: undefined;
  Auth: undefined;
};
type RegisterStackParamList = {
  Login: undefined;
  Register: undefined;
};

const RouterRecord = createStackNavigator<RegisterStackParamList>();

const ResgisterStack = () => {
  return (
    <RouterRecord.Navigator initialRouteName="Login">
      <RouterRecord.Screen name="Login" component={Login} />
      <RouterRecord.Screen name="Register" component={Register} />
    </RouterRecord.Navigator>
  );
};

const RouterAuth = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <RouterAuth.Navigator
      initialRouteName="Auth"
      screenOptions={{headerShown: false}}>
      <RouterAuth.Screen name="Profile" component={Profile} />
      <RouterAuth.Screen name="Auth" component={ResgisterStack} />
    </RouterAuth.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          headerShown: false,
          tabBarLabel: ({focused}) => (focused = false),
        }}>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            title: 'Feed',
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faHome} size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AddPhoto"
          component={AddPhoto}
          options={{
            title: 'Add Photo',
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faCamera} size={25} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Main"
          component={AuthStack}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faUser} size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
