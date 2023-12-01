import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {WINDOW_WIDTH} from '@utils';
interface componentProps {
  label?: string;
  text?: string;
}
const Info: React.FC<componentProps> = ({label, text}) => {
  return (
    <Layout level="1" style={styles.container}>
      <Text category="h6">{label}</Text>
      <Text category="h5">{text}</Text>
    </Layout>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH - 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
