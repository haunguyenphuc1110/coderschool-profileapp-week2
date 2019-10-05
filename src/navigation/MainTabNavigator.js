import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import ScreenIds from './screenIds';
import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import ProfileScreen from '../screens/ProfileScreen/Profile.screen';
import ExampleScreen1 from '../screens/ExampleScreen1/Example1.screen';
import ExampleScreen2 from '../screens/ExampleScreen2/Example2.screen';

const MainTabNaigator = createBottomTabNavigator({
  [ScreenIds.PROFILE]: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={'ios-person'} />
      ),
    }
  },
  [ScreenIds.EXAMPLE1]: {
    screen: ExampleScreen1,
    navigationOptions: {
      tabBarLabel: 'Add',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={'ios-add-circle-outline'} />
      ),
    }
  },
  [ScreenIds.EXAMPLE2]: {
    screen: ExampleScreen2,
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={'ios-menu'} />
      ),
    }
  }
});

MainTabNaigator.path = '';

export default MainTabNaigator;
