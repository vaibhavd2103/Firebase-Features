import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import {GlobalStyles} from '../constants/Styles';

const FilledButton = ({touchableProps, Icon, buttonStyle, title}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.filledButton,
        ...buttonStyle,
      }}
      {...touchableProps}>
      {Icon}
      <Text style={{...GlobalStyles.body2, color: '#fff'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export {FilledButton};

const styles = StyleSheet.create({
  filledButton: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: Colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    height: 56,
  },
});
