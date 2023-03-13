import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="All Places" component={AllPlaces}></Stack.Screen>
        <Stack.Screen name="Add Place" component={AddPlace}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});
