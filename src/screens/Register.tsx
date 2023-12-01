import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';
import {EMAIL_REGEX, helper, theme} from '@utils';
import {goBack, navigate} from '@navigations';
import {Header} from '@components';
import {useAppDispatch, useAppSelector} from '@redux/store';
import {register} from '@redux/userSlice';

const Register = () => {
  const [state, setState] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.userSlice);
  const handlerBack = () => {
    goBack();
  };
  function validate() {
    if (!EMAIL_REGEX.test(state.email)) {
      helper.showErrorMsg('Vui lòng nhập đúng định dạng email');
      return false;
    } else {
      return true;
    }
  }
  function checkEmail(email: string) {
    let status = true;
    data.data.map(item => {
      if (item.email === email) {
        helper.showErrorMsg('Email đã tồn tại');
        status = false;
      }
    });
    return status;
  }
  const handlerRegister = () => {
    if (validate()) {
      helper.showLoading();
      if (checkEmail(state.email)) {
        dispatch(
          register({
            id: data.countUser,
            avatar: 'https://hotcopper.com.au/images/default-avatar-l.png',
            ...state,
          }),
        );
        setTimeout(() => {
          helper.hideLoading();
          helper.showSuccessMsg('Tạo tài khoản thành công', goBack);
        }, 2000);
      }
    }
  };
  return (
    <Layout style={styles.container}>
      <Header text="Đăng ký" />
      <Layout style={styles.box2}>
        <Input
          placeholder="Fullname"
          size="large"
          value={state.fullname}
          onChangeText={fullname => setState(pre => ({...pre, fullname}))}
        />
        <Input
          placeholder="Email"
          size="large"
          style={{marginTop: 10}}
          value={state.email}
          onChangeText={email => setState(pre => ({...pre, email}))}
        />
        <Input
          placeholder="Password"
          style={{marginTop: 10}}
          size="large"
          value={state.password}
          secureTextEntry
          onChangeText={password => setState(pre => ({...pre, password}))}
        />
        <Button
          onPress={handlerRegister}
          style={styles.button}
          activeOpacity={0.7}
          disabled={!state.email || !state.fullname || !state.password}>
          Đăng ký
        </Button>
      </Layout>
      <Layout style={styles.box3}>
        <TouchableOpacity onPress={handlerBack}>
          <Text style={{color: theme['color-basic']}}>
            Bạn đã có tài khoản? Đăng nhập
          </Text>
        </TouchableOpacity>
      </Layout>
    </Layout>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 3,
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
