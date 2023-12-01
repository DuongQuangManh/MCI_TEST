import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StackParamList, navigationRef} from '@navigations';
import BottomNavigation from './BottomNavigation';
import {
  ConfirmMessage,
  Home,
  Loading,
  Login,
  Message,
  Register,
  Splash,
} from '@screens';
const Stack = createNativeStackNavigator<StackParamList>();
const StackNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="bottomNavigation" component={BottomNavigation} />
        <Stack.Group
          screenOptions={{
            presentation: 'transparentModal',
            animation: 'fade',
          }}>
          <Stack.Screen name="message" component={Message} />
          <Stack.Screen name="loading" component={Loading} />
          <Stack.Screen name="confirmMessage" component={ConfirmMessage} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
