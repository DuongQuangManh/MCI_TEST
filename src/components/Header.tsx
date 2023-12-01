import {StyleSheet, View, TouchableOpacity, useColorScheme} from 'react-native';
import React, {FC} from 'react';
import {WINDOW_WIDTH, theme} from '../utils';
import {goBack} from '@navigations';
import {Icon, Layout, Text} from '@ui-kitten/components';
interface propsComponent {
  text?: string;
  onBack?: () => void;
  backgroundColor?: string;
  style?: any;
  color?: string;
}
const Header: FC<propsComponent> = ({
  onBack = goBack,
  backgroundColor = theme['color-backgroud'],
  color,
  ...props
}) => {
  return (
    <Layout
      style={[
        styles.container,
        {backgroundColor: backgroundColor},
        props.style,
      ]}>
      <TouchableOpacity
        style={{position: 'absolute', zIndex: 10, left: 8}}
        onPress={onBack}>
        <Icon name="arrow-ios-back-outline" width={22} height={22} />
      </TouchableOpacity>
      <Text style={{flex: 1, textAlign: 'center'}}>{props.text}</Text>
    </Layout>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
});
