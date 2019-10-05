import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import ScreenIds from './screenIds';
import MainTabNavigator from './MainTabNavigator';
import DetailsScreen from '../screens/DetailsScreen/Details.screen';

export default createAppContainer(
  createStackNavigator(
    {
      // [ScreenIds.HOME]: {
      //   screen: MainTabNavigator
      // },
      [ScreenIds.DETAILS]: {
        screen: DetailsScreen
      },
    },
    {
      defaultNavigationOptions:{
        header: null
      }
    },
  )
);
