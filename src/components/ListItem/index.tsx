import { Article } from 'interfaces'
import { View, Text, Image, GestureResponderEvent, Button, TouchableNativeFeedback, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import dayjs from 'dayjs'

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
          source={article?.imageUrl ? {
            uri: article?.imageUrl
          } : require('../../assets/images/logo_primary.png')}
          style={{ resizeMode: article?.imageUrl ? 'stretch' : 'center' }}
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
          <View className='flex flex-row justify-between'>
            <Text className='text-xs text-neutral-400 font-poppins uppercase'>{article?.publishDate ? `${dayjs(article?.publishDate).format('DD MMM YYYY')}` : ''}</Text>
            <TouchableNativeFeedback>
              <View>
                <Icon
                  name='share-variant-outline'
                  size={20}
                />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}