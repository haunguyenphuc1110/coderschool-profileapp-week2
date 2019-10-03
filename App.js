import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './src/screens/ProfileScreen/Profile.screen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ScreenIds from './src/navigation/screenIds'; 

const MainNavigator = createStackNavigator({
  [ScreenIds.PROFILE]: { screen: ProfileScreen },
  [ScreenIds.DETAILS]: { screen: ProfileScreen },
});

const App = createAppContainer(MainNavigator);

export default App;