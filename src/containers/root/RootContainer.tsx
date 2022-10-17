/**@format */
import { Colors } from 'constants'
import React, { useEffect } from 'react'
import { View, SafeAreaView, StatusBar, TouchableNativeFeedback } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ArticleContainer, DrawerNavigator, HomeContainer, RacingContainer, SalesContainer } from 'containers'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { MoreContainer } from '../more/MoreContainer'

const Tab = createBottomTabNavigator()

export const RootContainer = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor={Colors.Primary} />
      <Tab.Navigator
        initialRouteName='More'
        screenOptions={{
          tabBarStyle: {
            height: 56,
          },
          tabBarItemStyle: {
            height: 56,
            paddingTop: 4,
            paddingBottom: 4,
          },
          headerRight: () => (
            <TouchableNativeFeedback>
              <View className='mx-2 p-1 rounded-full'>
                <Icon
                  name='search'
                  size={28}
                  color='#ffffff'
                />
              </View>
            </TouchableNativeFeedback>
          ),
          tabBarLabelStyle: {
            fontFamily: 'Poppins',
          },
          headerShadowVisible: false,
          tabBarVisibilityAnimationConfig: {
            show: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            hide: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },
          headerShown: true,
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeContainer}
          options={{
            headerStyle: {
              backgroundColor: Colors.Primary,
            },
            headerTitleStyle: {
              color: '#ffffff',
              fontWeight: '600',
              fontFamily: 'Poppins',
            },
            tabBarIcon: ({ focused, color, size }) => (
              <MCIcon
                name='home'
                size={size}
                color={color}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              color: '#292D32',
              fontFamily: 'Poppins',
            },
          }}
        />
        <Tab.Screen
          name='Racing'
          component={RacingContainer}
          options={{
            headerStyle: {
              backgroundColor: Colors.Primary,
            },
            headerTitleStyle: {
              color: '#ffffff',
              fontWeight: '600',
              fontFamily: 'Poppins',
            },
            tabBarIcon: ({ focused, color, size }) => (
              <MCIcon
                name='trophy-variant'
                size={size}
                color={color}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              color: '#292D32',
              fontFamily: 'Poppins',
            },
          }}
        />
        <Tab.Screen
          name='News'
          component={ArticleContainer}
          options={{
            headerStyle: {
              backgroundColor: Colors.Primary,
            },
            headerTitleStyle: {
              color: '#ffffff',
              fontWeight: '600',
              fontFamily: 'Poppins',
            },
            tabBarIcon: ({ focused, color, size }) => (
              <MCIcon
                name='newspaper-variant'
                size={size}
                color={color}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              color: '#292D32',
              fontFamily: 'Poppins',
            },
          }}
        />
        <Tab.Screen
          name='Sales'
          component={SalesContainer}
          options={{
            headerStyle: {
              backgroundColor: Colors.Primary,
            },
            headerTitleStyle: {
              color: '#ffffff',
              fontWeight: '600',
              fontFamily: 'Poppins',
            },
            tabBarIcon: ({ focused, color, size }) => (
              <MCIcon
                name='horse-variant'
                size={size}
                color={color}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              color: '#292D32',
              fontFamily: 'Poppins',
            },
          }}
        />
        <Tab.Screen
          name='More'
          component={DrawerNavigator}
          options={{
            headerStyle: {
              backgroundColor: Colors.Primary,
            },
            headerTitleStyle: {
              color: '#ffffff',
              fontWeight: '500',
              fontFamily: 'Poppins',
            },
            tabBarIcon: ({ focused, color, size }) => (
              <MCIcon
                name='menu'
                size={size}
                color={color}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              color: '#292D32',
              fontFamily: 'Poppins',
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  )
}
