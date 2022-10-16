import { Text, TouchableNativeFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const FilterBlock = () => {
  return (
    <View className='p-3 flex flex-row justify-between'>
      <TouchableNativeFeedback>
        <View className='self-start'>
          <Text className='text-xs text-neutral-500 font-medium font-poppins'>
            <Icon name='filter-plus-outline' size={14} />&nbsp;
            <Text>Filter by</Text>
          </Text>
        </View>
      </TouchableNativeFeedback>
      <View className='flex flex-row'>
        <TouchableNativeFeedback>
          <View className='mr-4'>
            <Text className='text-xs text-neutral-500 font-medium font-poppins'>
              <Icon name='view-dashboard-outline' size={14} />&nbsp;
              <Text>View by</Text>
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View>
            <Text className='text-xs text-neutral-500 font-medium font-poppins'>
              <Icon name='sort' size={14} />&nbsp;
              <Text>Order by</Text>
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}