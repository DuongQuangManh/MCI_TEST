import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {theme} from '@utils';
import {useAppSelector} from '@redux/store';
import {navigate} from '@navigations';

const Splash = () => {
  const user = useAppSelector(state => state.userSlice.user);
  useEffect(() => {
    setTimeout(() => {
      if (user) {
        console.log('1');
        navigate('bottomNavigation');
      } else {
        console.log('2');
        navigate('login');
      }
    }, 2000);
  }, [user]);
  return (
    <Layout
      style={{
        flex: 1,
        backgroundColor: theme['color-basic'],
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text category="h2" style={{color: theme['color-backgroud']}}>
        TO DO LIST
      </Text>
    </Layout>
  );
};

export default Splash;

const styles = StyleSheet.create({});
