import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

const App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="black"/> 
        <AppNavigator />
      </View>
    );
  }
}

loadResourcesAsync = async () => {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/icon.png'),
      require('./assets/splash.png')
    ])
    // Font.loadAsync({
    //   // This is the font that we are using for our tab bar
    //   ...Ionicons.font,
    //   // We include SpaceMono because we use it in HomeScreen.js. Feel free to
    //   // remove this if you are not using it in your app
    //   'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    // }),
  ]);
}

handleLoadingError = (error) => {
  console.warn(error);
}

handleFinishLoading = (setLoadingComplete) => {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;