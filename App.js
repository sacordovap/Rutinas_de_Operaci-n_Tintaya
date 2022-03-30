import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/login/LoginScreen';
import SaveScreen from './src/save/SaveScreen';
import ContenedorScreens from './src/module 1/ContenedorScreens';
import TemplateScreen from './src/Template/TemplateScreen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import TemplateVersion2 from './src/Template/TemplateVersion2';
import Screen1 from './src/module 2/Screen1';
import Screen2 from './src/module 2/Screen2';
import { AuthProvider } from './src/context/authState';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Screen4 from './src/module 2/Screen4';
import Screen3 from './src/module 2/Screen3';



const Stack = createNativeStackNavigator();
function MyStack() {
  return (

    <Stack.Navigator screenOptions={{
      headerShown: false,
    }
    }>
      <Stack.Screen name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="Home"
        component={Screen1} />
      <Stack.Screen name="Screen2"
        component={Screen2} />
      <Stack.Screen name="Screen3"
        component={Screen3} />
      <Stack.Screen name="Screen4"
        component={Screen4} />
      <Stack.Screen name="Save"
        component={SaveScreen} />



    </Stack.Navigator>
    //Psuehando
  )
}


export default function App() {
  let [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    // <ContenedorScreens />
    // <NativeBaseProvider>
    //     <TemplateScreen />
    // </NativeBaseProvider>
    // <AuthProvider>
    //   <IconRegistry icons={EvaIconsPack} />
    //   <ApplicationProvider {...eva} theme={eva.light}>
    //     <NativeBaseProvider>
    //       <NavigationContainer>
    //         <MyStack />
    //       </NavigationContainer>
    //     </NativeBaseProvider>

    //   </ApplicationProvider>
    // </AuthProvider>
    <AuthProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            {/* <ContenedorScreens /> */}
            <MyStack />
          </ApplicationProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
