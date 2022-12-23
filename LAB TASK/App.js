import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/ProfileScreen';
import SettingScreen from './components/SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Profile'){
              iconName = focused? 'ios-profile': 'ios-profile'
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name = "Home" component={HomeScreen}/>
        <Tab.Screen name = "Profile" component={DetailScreen} initialParams={{ data: "Nothing yet." }}/>
        <Tab.Screen name = "Setting" component={SettingScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: '',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
