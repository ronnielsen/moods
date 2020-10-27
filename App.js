import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native'
import { Activity, Home, Settings } from './pages';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
const Tab = createBottomTabNavigator();
import { placeholder, defaultReasons } from './data';

export default function App() {
  const [results, setResults] = useState(placeholder);
  const [reasons, setReasons] = useState(defaultReasons);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home'
                size = 24;
              } else if (route.name === 'Activity') {
                iconName = 'activity';
                size = 24;
              } else if (route.name === 'Settings') {
                iconName = 'settings';
                size = 24;
              }
              // You can return any component that you like here!
              return <Feather name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            showLabel: false,
          }}
        >
        <Tab.Screen name="Home" children={() => <Home results={results} setResults={setResults} reasons={reasons} setReasons={setReasons}/>}/>
        <Tab.Screen name="Activity" children={() => <Activity results={results} setResults={setResults} reasons={reasons} setReasons={setReasons}/>}/>
        <Tab.Screen name="Settings" children={() => <Settings/>}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignSelf: 'stretch'
  },
})
