import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Home from '../screens/Home';
import {auth} from '../firebase';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      }
    });
  }, [isAuthenticated]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        {!isAuthenticated && (
          <Stack.Screen component={AuthStack} name={'AuthStack'} />
        )}
        <Stack.Screen component={Home} name={'Home'} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={SignUp} name={'SignUp'} />
      <Stack.Screen component={Login} name={'Login'} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
