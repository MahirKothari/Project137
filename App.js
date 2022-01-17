import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home'
import Details from './screens/Details'

export default function App() {
  return (
   <AppContainer></AppContainer>
  );
}

const AppStackNavigator = createStackNavigator({
  Home:{
    screen:Home,navigationOptions:{headerShown:false}
  },
  Details:{
    screen:Details,navigationOptions:{headershown:false}
  }
},{initialRouteName:'Home'})

const AppContainer = createAppContainer(AppStackNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
