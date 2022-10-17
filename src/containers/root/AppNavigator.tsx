/**@format */
import { Colors } from 'constants'
import React from 'react'
import { useColorScheme } from 'react-native'
import { ArticleDetail, DisplaySettingsContainer, DrawerNavigator } from 'containers'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootContainer } from './RootContainer'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator()

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.Primary,
  },
}

export const AppNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const onReady = () => {
    SplashScreen.hide()
  }

  return (
    <NavigationContainer
      theme={isDarkMode ? DarkTheme : LightTheme}
      onReady={onReady}
    >
      <Stack.Navigator initialRouteName='Root'>
        <Stack.Group>
          <Stack.Screen
            name='Root'
            component={DrawerNavigator}
            options={({ route }) => {
              return {
                headerStyle: {
                  backgroundColor: Colors.Primary,
                },
                headerTitleStyle: {
                  color: '#ffffff',
                  fontWeight: 'bold',
                },
                headerSearchBarOptions: {
                  hintTextColor: '#ffffff',
                  headerIconColor: '#ffffff',
                  textColor: '#ffffff',
                  shouldShowHintSearchIcon: false,
                },
                title: 'Racing Collective',
                headerShown: false,
              }
            }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name='Detail'
            component={ArticleDetail}
            options={{
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerShadowVisible: false,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Display Settings'
            component={DisplaySettingsContainer}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
