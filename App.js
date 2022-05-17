import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Components/HomeScreen';
import Test from './Components/FetchAllCoins';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
import Portfolio from './Components/Portfolio';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Home" component={HomeScreen}/>
        <Tab.Screen name = "Coins" component={Test}/>
        <Tab.Screen name = "Portfolio" component = {Portfolio}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0ccc3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
