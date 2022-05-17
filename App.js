import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Components/HomeScreen';
import Test from './Components/FetchAllCoins';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
import Portfolio from './Components/Portfolio';
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Home" component={HomeScreen} options={{
                    tabBarIcon: () => <Ionicons name="md-home" size={20} color="blue" />
                }}/>
        <Tab.Screen name = "Coins" component={Test} options={{
                    tabBarIcon: () => <Ionicons name="cash-outline" size={20} color="blue" />
                }}/>
        <Tab.Screen name = "Portfolio" component = {Portfolio} options={{
                    tabBarIcon: () => <Ionicons name="add-outline" size={20} color="blue" />
                }}/>
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
