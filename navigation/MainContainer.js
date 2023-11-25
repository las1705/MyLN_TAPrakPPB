import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import TopLN from '../screens/TopScreen';
import ProfilesScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';

//Screen names
const homeName = "Home";
const searchName = "Search";
const topName = "Top";
const profileName = "Profile";
const detailName = "Detail";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MainContainer() {
  return (
   
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === searchName) {
              iconName = focused ? 'search' : 'search';

            }else if (rn === topName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 5, fontSize: 10 },
          style: { padding: 10, height: 100}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown:false}} />
        <Tab.Screen name={searchName} component={SearchScreen} options={{ headerShown:false }} />
        <Tab.Screen name={topName} component={TopLN} options={{ headerShown:false }}/>
        <Tab.Screen name={profileName} component={ProfilesScreen} options={{ headerShown:false }}/>

      </Tab.Navigator>
      
  );
}

export default MainContainer;