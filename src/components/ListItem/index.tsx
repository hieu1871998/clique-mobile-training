import { Article } from 'interfaces'
import { View, Text, Image, GestureResponderEvent, Button, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import dayjs from 'dayjs'
import styled from '@emotion/native'
import { Colors } from 'constants'

export const ListItem = ({
  article,
  onPress
}: {
  article: Article
  onPress: (event: GestureResponderEvent) => void
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View className='rounded-sm bg-white shadow border border-neutral-50'>
        <Image
          className='w-full h-52 rounded-t-sm'
          source={{
            uri: article?.imageUrl ?? 'https://test-next.bloodstockexchange.com.au/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsignup.8e75b832.png&w=1080&q=75'
          }}
          style={{ resizeMode: 'stretch' }}
        />
        <View className='p-3 rounded'>
          <Text
            className='text-lg mb-1 text-neutral-500 font-semibold font-poppins'
            onPress={onPress}
          >
            {article?.title}
          </Text>
          <Text className='mb-1 uppercase text-xs text-primary-500 font-semibold font-poppins'>
            {article?.source?.name}
          </Text>
          <Text className='mb-2 text-neutral-500 font-poppins leading-5' numberOfLines={3}>
            {article?.description}
          </Text>
          <Text className='text-xs text-neutral-400 font-poppins'>
            {article?.publishDate ? `${dayjs(article?.publishDate).format('DD MMM YYYY')}` : ''}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}