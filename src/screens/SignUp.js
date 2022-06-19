import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Container} from '../components/Container';
import {GlobalStyles} from '../constants/Styles';
import {OutlinedInput} from '../components/Input';
import {FilledButton} from '../components/Button';
import {Colors} from '../constants/Colors';
import {auth} from '../firebase';

const SignUp = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const register = async () => {
    await auth
      .createUserWithEmailAndPassword(Email, Password)
      .then(res => {
        console.log(res);
        navigation.navigate('Login');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <Container style={{justifyContent: 'center'}}>
      <ScrollView
        style={{flex: 1, width: '100%', paddingHorizontal: 25}}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 100,
          // justifyContent: 'center',
        }}>
        <Text style={{...GlobalStyles.header3}}>SignUp</Text>
        <OutlinedInput
          inputProps={{
            value: Email,
            onChangeText: text => {
              setEmail(text);
            },
            placeholder: 'Enter your Email',
            placeholderTextColor: Colors.lightBlue,
          }}
          containerStyle={{marginTop: 20}}
        />
        <OutlinedInput
          inputProps={{
            value: Password,
            onChangeText: text => {
              setPassword(text);
            },
            placeholder: 'Enter your Password',
            placeholderTextColor: Colors.lightBlue,
          }}
          containerStyle={{marginTop: 20}}
        />
        <View style={{width: '70%', marginTop: 30}}>
          <FilledButton
            title="SignUp"
            touchableProps={{
              onPress: async () => {
                await register();
              },
            }}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
