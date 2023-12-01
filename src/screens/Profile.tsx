import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Avatar, Button, Layout, Text} from '@ui-kitten/components';
import {useAppDispatch, useAppSelector} from '@redux/store';
import {WINDOW_HEIGHT, WINDOW_WIDTH, helper, theme} from '@utils';
import {Info} from '@components';
import {logout} from '@redux/userSlice';

const Profile = () => {
  const user = useAppSelector(state => state.userSlice.user);
  const dispatch = useAppDispatch();
  const handlerLogout = () => {
    helper.showConfirmMsg('Bạn có chắc muốn đăng xuất?', () => {
      dispatch(logout());
    });
  };
  return (
    <Layout style={styles.container}>
      <Layout level="2" style={styles.box1}>
        <Avatar
          style={styles.avatar}
          shape="round"
          source={{uri: user.avatar}}
        />
      </Layout>
      <Layout style={{padding: 5}}>
        <Info label="Họ tên: " text={user.fullname} />
        <Info label="Email: " text={user.email} />
      </Layout>
      <Layout style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 100}}>
        <Button
          appearance="ghost"
          status="warning"
          style={styles.btn}
          onPress={handlerLogout}>
          Đăng xuất
        </Button>
      </Layout>
    </Layout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT / 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    backgroundColor: theme['color-basic'],
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 180,
    alignSelf: 'center',
  },
  btn: {
    marginTop: 10,
    borderColor: theme['color-basic'],
    width: WINDOW_WIDTH / 2,
    alignSelf: 'center',
  },
});
