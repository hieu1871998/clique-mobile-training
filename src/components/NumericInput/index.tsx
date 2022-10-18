import React from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const NumericInput = ({
  value = 0,
  setValue
}: {
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (
    <View className='flex flex-row items-center'>
      <View className='p-2 bg-red-500 rounded'>
        <Icon name='minus' size={16} color='#ffffff' />
      </View>
      <TextInput
        className='bg-white'
        keyboardType='numeric'
        value={value.toString()}
        maxLength={2}
      />
      <View className='p-2 bg-primary-500 rounded'>
        <Icon name='plus' size={16} color='#ffffff' />
      </View>
    </View>
  )
}