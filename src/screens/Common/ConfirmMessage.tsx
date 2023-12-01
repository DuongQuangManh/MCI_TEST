import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackParamList} from '@navigations';
import Modal from 'react-native-modal';
import {theme} from '@utils';
import {Button, Text} from '@ui-kitten/components';

const ConfirmMessage = () => {
  const {title, onOk, message, onCancel} =
    useRoute<RouteProp<StackParamList, 'confirmMessage'>>().params;
  return (
    <Modal
      isVisible
      onBackdropPress={onCancel}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={[
          styles.centeredView,
          {backgroundColor: theme['color-backgroud']},
        ]}>
        <View style={{alignItems: 'center'}}>
          <Text>{title}</Text>
          <Image
            style={{width: 85, height: 85, marginTop: 5}}
            source={require('@assets/icons/warning.png')}
          />
        </View>
        <Text
          style={{
            maxWidth: '82%',
            textAlign: 'center',
          }}>
          {message}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
          }}>
          <Button onPress={onCancel}>Cancel</Button>
          <Button onPress={onOk}>Ok</Button>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmMessage;

const styles = StyleSheet.create({
  centeredView: {
    width: '90%',
    height: 290,
    borderRadius: 8,
    backgroundColor: theme['color-backgroud'],
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 18,
    paddingBottom: 10,
  },
});
