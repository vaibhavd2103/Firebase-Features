import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import {GlobalStyles} from '../constants/Styles';

const OutlinedInput = ({inputProps, containerStyle, leftIcon, rightIcon}) => {
  return (
    <View
      style={{
        ...styles.outlinedInput,
        ...containerStyle,
      }}>
      {leftIcon}
      <TextInput style={{flex: 1, ...GlobalStyles.body1}} {...inputProps} />
      {rightIcon}
    </View>
  );
};

export {OutlinedInput};

const styles = StyleSheet.create({
  outlinedInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: Colors.lightBlue,
    borderRadius: 16,
    height: 56,
    width: '100%',
    paddingHorizontal: 15,
  },
});
