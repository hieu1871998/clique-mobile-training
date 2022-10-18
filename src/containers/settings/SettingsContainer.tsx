import { NavigationHelpers } from '@react-navigation/native'
import { Colors } from 'constants'
import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const SettingsContainer = ({ navigation }: { navigation: NavigationHelpers<any> }) => {
  const onDisplayPress = () => {
    navigation.navigate('Display settings')
  }
  
  return (
    <SafeAreaView className=''>
      <View className='py-4 bg-primary-500'>
        <Text className='text-center text-xl font-semibold font-poppins text-white'>Settings</Text>
        <View className='absolute top-1/2 left-2'>
          <TouchableHighlight
            className='rounded-full'
            activeOpacity={1}
            underlayColor={Colors.Primary}
            onPress={() => navigation.goBack()}
          >
            <Icon name='chevron-left' size={32} color='#ffffff' />
          </TouchableHighlight>
        </View>
      </View>
      <View className='p-2'>
        <SettingItem
          icon='account-outline'
          text='Account information'
        />
        <SettingItem
          icon='monitor-screenshot'
          text='Display'
          onPress={onDisplayPress}
        />
        <SettingItem
          icon='view-dashboard-outline'
          text='Table layout'
        />
        <SettingItem
          icon='view-grid-outline'
          text='Categories'
        />
        <SettingItem
          icon='package-variant-closed'
          text='Products'
        />
        <SettingItem
          icon='lock-outline'
          text='Change password'
        />
        <SettingItem
          icon='logout-variant'
          text='Sign out'
        />
      </View>
    </SafeAreaView>
  )
}

const SettingItem = ({
  icon,
  text,
  onPress,
}: {
  icon: string
  text: string
  onPress?: () => void
}) => {
  return (
    <View
      className='m-1 rounded-md bg-white'
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2,

        elevation: 4,
      }}
    >
      <TouchableHighlight
        className='rounded-md'
        activeOpacity={1}
        underlayColor='#ffffff'
        onPress={onPress}
      >
        <View
          className='rounded-md p-2 flex flex-row items-center'
        >
          <Icon name={icon} size={24} />
          <Text className='ml-2'>{text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}