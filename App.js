import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignUp from './src/screens/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {StateProvider} from './src/Context/StateProvider';
import reducer, {initialState} from './src/Context/Reducer';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <View style={{flex: 1}}>
        <StackNavigator />
      </View>
    </StateProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
