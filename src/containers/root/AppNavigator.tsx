/**@format */
import { Colors } from 'constants'
import React from 'react'
import { useColorScheme } from 'react-native'
import { ArticleDetail, DisplaySettingsContainer, SettingsContainer } from 'containers'
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
            component={RootContainer}
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
          <Stack.Screen
            name='Settings'
            component={SettingsContainer}
            options={{
              animation: 'fade_from_bottom',
              headerTitleAlign: 'center',
              headerTintColor: '#ffffff',
              headerStyle: {
                backgroundColor: Colors.Primary,
              },
            }}
          />
          <Stack.Screen
            name='Display settings'
            component={DisplaySettingsContainer}
            options={{
              animation: 'slide_from_right',
              headerTitleAlign: 'center',
              headerTintColor: '#ffffff',
              headerStyle: {
                backgroundColor: Colors.Primary,
              },
            }}
          />
        </Stack.Group>
        <Stack.Group>
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
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
