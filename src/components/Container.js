import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants/Colors';

const Container = props => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: darkMode ? Colors.darkBg : Colors.lightBg,
        ...props.style,
      }}>
      {props.children}
    </View>
  );
};

export {Container};

const styles = StyleSheet.create({});
