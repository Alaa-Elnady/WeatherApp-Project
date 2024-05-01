import React from 'react';
import {Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {COLORS, FONTSIZE, ICONSIZE} from '../constants';

import { SignIn , SignUp , HomePage} from '../screens';
const Stack = createNativeStackNavigator();
export function Auth(props) {
  return (
    <>
      <Stack.Navigator>

        {/* SignUp */}
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />

        {/* SignIn */}
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />

        {/* HomePage */}
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </>
  );
}

// <Stack.Screen name="SplashScreenStack" component={SplashScreenStack} />
// <Stack.Screen name="LoginStack" component={LoginStack} />
// <Stack.Screen name="LogOrSignStack" component={LogOrSignStack} />
// <Stack.Screen name="SignUpStack" component={SignUpStack} />
