/**@format */
import { Colors } from 'constants'
import React from 'react'
import { useColorScheme } from 'react-native'
import { ArticleDetail } from 'containers'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootContainer } from './RootContainer'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'

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

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
      <Stack.Navigator initialRouteName='Root'>
        <Stack.Group>
          <Stack.Screen
            name='Root'
            component={RootContainer}
            options={{
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
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
