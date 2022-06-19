import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Container} from '../components/Container';
import {GlobalStyles} from '../constants/Styles';
import {OutlinedInput} from '../components/Input';
import {FilledButton} from '../components/Button';
import {Colors} from '../constants/Colors';
import {auth} from '../firebase';
import {GoogleAuthProvider} from 'firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const signIn = async () => {
    await auth
      .signInWithEmailAndPassword(Email, Password)
      .then(res => {
        console.log(res);
        // navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
      });
  };

  GoogleSignin.configure({
    webClientId:
      '503044633340-eejva31dg2k377hf09enfnu1745s7uim.apps.googleusercontent.com',
  });

  const googleLogin = async () => {
    // Get the users ID token
    console.log(GoogleSignin.signIn());
    const {idToken} = await GoogleSignin.signIn()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // console.log(googleCredential);

    // Sign-in the user with the credential
    return auth.signInWithCredential(googleCredential);
    // const provider = GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // provider.addScope('profile');
    // provider.addScope('email');
    // await auth
    //   .signInWithPopup(provider)
    //   .then(res => {
    //     console.log(res);
    //     const credential = GoogleAuthProvider.credentialFromResult(res);
    //     const token = credential.accessToken;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
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
        <Text
          style={{
            ...GlobalStyles.header3,
            marginBottom: 40,
            fontSize: 28,
            color: Colors.lightBlue,
          }}>
          Login
        </Text>
        <View style={{marginTop: 0}}>
          <Text
            style={{
              ...GlobalStyles.header,
              marginVertical: 10,
              color: Colors.lightBlue,
            }}>
            Email
          </Text>
          <OutlinedInput
            inputProps={{
              value: Email,
              onChangeText: text => {
                setEmail(text);
              },
              placeholder: 'abc@gmail.com',
              placeholderTextColor: '#a5a5a5',
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              ...GlobalStyles.header,
              marginVertical: 10,
              color: Colors.lightBlue,
            }}>
            Password
          </Text>
          <OutlinedInput
            inputProps={{
              value: Password,
              onChangeText: text => {
                setPassword(text);
              },
              placeholder: 'xxxxxx',
              placeholderTextColor: '#a5a5a5',
            }}
          />
        </View>
        <View style={{width: '100%', marginTop: 30}}>
          <FilledButton
            title="Login"
            touchableProps={{
              onPress: async () => {
                await signIn();
              },
            }}
          />
        </View>
        <View style={{width: '100%', marginTop: 30}}>
          <FilledButton
            title="Sign in with Google"
            touchableProps={{
              onPress: async () => {
                await googleLogin();
              },
            }}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
