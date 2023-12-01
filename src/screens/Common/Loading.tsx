import {Text} from '@ui-kitten/components';
import {theme} from '@utils';
import React from 'react';
import {View, ActivityIndicator, StyleSheet, Modal} from 'react-native';

const Loading = () => {
  return (
    <Modal visible>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color={theme['color-basic']} />
          <Text style={[styles.text]}>Loading...</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  },
});

export default Loading;
