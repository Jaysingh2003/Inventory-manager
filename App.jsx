import {StyleSheet, View} from 'react-native';
import React from 'react';
import Home from './src/Screens/Home';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Change to match the overall theme
   
     margin:10
  },
});
