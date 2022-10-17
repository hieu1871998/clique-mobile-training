import styled from '@emotion/native'
import React from 'react'
import { GestureResponderEvent, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const SettingsContainer = ({ navigation }) => {
  const onDisplayPress = () => {
    navigation.navigate('Display Settings')
  }
  
  return (
    <SafeAreaView className='p-2'>
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