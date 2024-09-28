
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen_1 from './screens/Screen_1';
import Screen_2 from './screens/Screen_2';
import Screen_3 from './screens/Screen_3';
import Screen_4 from './screens/Screen_4';






const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen_1">
        <Stack.Screen
          name="Screen_1"
          component={Screen_1}
          options={{ headerShown: false }} // Ẩn header mặc định
        />
        <Stack.Screen
          name="Screen_2"
          component={Screen_2}
          options={{ headerShown: false }} // Ẩn header mặc định
        />
        <Stack.Screen
          name="Screen_3"
          component={Screen_3}
          options={{ headerShown: false }} // Ẩn header mặc định
        />
        <Stack.Screen
          name="Screen_4"
          component={Screen_4}
          options={{ headerShown: false }} // Ẩn header mặc định
        />
       

        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
