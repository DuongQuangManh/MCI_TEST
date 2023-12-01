import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {EMAIL_REGEX, helper, theme} from '@utils';
import {navigate} from '@navigations';
import {useAppDispatch, useAppSelector} from '@redux/store';
import {saveUser} from '@redux/userSlice';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();
  const dataUser = useAppSelector(state => state.userSlice.data);
  const user = useAppSelector(state => state.userSlice.user);
  console.log(dataUser);
  function validate() {
    if (!EMAIL_REGEX.test(state.email)) {
      helper.showErrorMsg('Vui lòng nhập đúng định dạng email');
      return false;
    } else {
      return true;
    }
  }
  function loginUser(email: string, password: string) {
    const user = dataUser.find(user => user.email === email);
    if (user && user.password === password) {
      console.log(user);
      dispatch(saveUser(user));
      return true;
    } else {
      helper.showErrorMsg('Email hoặc mật khẩu không chính xác');
      return false;
    }
  }

  const handlerLogin = () => {
    if (validate()) {
      if (loginUser(state.email, state.password)) {
        navigate('bottomNavigation');
      }
    }
  };
  const handlerRegister = () => {
    navigate('register');
  };
  return (
    <Layout style={styles.container}>
      <Layout style={[styles.box1]}>
        <Text category="h1" style={{color: theme['color-backgroud']}}>
          Đăng nhập
        </Text>
      </Layout>
      <Layout style={styles.box2}>
        <Input
          placeholder="Email"
          size="large"
          value={state.email}
          onChangeText={email => setState(pre => ({...pre, email}))}
        />
        <Input
          placeholder="Password"
          style={{marginTop: 10}}
          size="large"
          secureTextEntry
          value={state.password}
          onChangeText={password => setState(pre => ({...pre, password}))}
        />
        <Button
          onPress={handlerLogin}
          style={styles.button}
          activeOpacity={0.7}
          disabled={!state.email || !state.password}>
          Đăng nhập
        </Button>
      </Layout>
      <Layout style={styles.box3}>
        <TouchableOpacity onPress={handlerRegister}>
          <Text style={{color: theme['color-basic']}}>
            Nếu bạn chưa có tài khoản? Đăng ký
          </Text>
        </TouchableOpacity>
      </Layout>
    </Layout>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: theme['color-basic'],
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  box2: {
    flex: 5,
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 40,
    backgroundColor: theme['color-basic'],
  },
  box3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
