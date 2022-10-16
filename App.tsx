/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { ListItem } from 'components'
import React, { type PropsWithChildren } from 'react'
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppContainer, ArticleDetail } from 'containers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Colors } from 'constants'
import Icon from 'react-native-vector-icons/MaterialIcons'

const queryClient = new QueryClient()
const Stack = createNativeStackNavigator()

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.Primary,
  },
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Group>
            <Stack.Screen
              name='Home'
              component={AppContainer}
              options={{
                headerStyle: {
                  backgroundColor: Colors.Primary,
                },
                headerTitleStyle: {
                  color: '#ffffff',
                  fontWeight: 'bold',
                },
                headerRight: () => (
                  <View>
                    <Icon
                      name='search'
                      color='#ffffff'
                      size={24}
                    />
                  </View>
                ),
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
    </QueryClientProvider>
  )
}

export default App
