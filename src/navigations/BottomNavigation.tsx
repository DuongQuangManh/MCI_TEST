import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Home, Profile} from '@screens';
import {Icon, Layout, Text} from '@ui-kitten/components';
import {theme} from '@utils';
import {TouchableOpacity, StyleSheet} from 'react-native';

const BottomTab = createBottomTabNavigator();
const TABBAR_HEIEGHT = 60;

interface ButtonTab {
  route: string;
  label: string;
  activeIcon: string;
  inActiveIcon: string;
  component: React.FC<any>;
  badge: number;
}
const tabArr: ButtonTab[] = [
  {
    route: 'home',
    label: 'Trang chủ',
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: Home,
    badge: 0,
  },
  {
    route: 'profile',
    label: 'Cá nhân',
    activeIcon: 'person',
    inActiveIcon: 'person-outline',
    component: Profile,
    badge: 0,
  },
];
interface TabBarButtonProps {
  buttonProps: BottomTabBarButtonProps;
  item: ButtonTab;
}
const TabBarButton: React.FC<TabBarButtonProps> = props => {
  const {item} = props;
  const {onPress, accessibilityState} = props.buttonProps;
  const focused = accessibilityState?.selected;
  return (
    <Layout
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={onPress}>
        <Icon
          name={focused ? item.activeIcon : item.inActiveIcon}
          fill={focused ? theme['color-basic'] : theme['color-text-hint']}
          width={18}
          height={18}
        />
        <Text
          style={{
            marginTop: 3,
            color: focused ? theme['color-basic'] : theme['color-text-hint'],
          }}
          category={focused ? 'p1' : 'p2'}>
          {item.label}
        </Text>
      </TouchableOpacity>
    </Layout>
  );
};
const BottomNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: TABBAR_HEIEGHT,
          position: 'absolute',
          backgroundColor: theme['color-backgroud'],
        },
      }}>
      {tabArr.map(item => (
        <BottomTab.Screen
          key={item.route}
          name={item.route}
          component={item.component}
          options={{
            tabBarButton: props => (
              <TabBarButton buttonProps={props} item={item} />
            ),
            tabBarShowLabel: false,
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
};
export default BottomNavigation;
const styles = StyleSheet.create({});
