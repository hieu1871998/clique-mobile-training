import { Article } from 'interfaces'
import { GestureResponderEvent, Image, ImageLoadEventData, NativeSyntheticEvent, SafeAreaView, ScrollView, StatusBar, Text, TouchableNativeFeedback, View } from 'react-native'
import dayjs from 'dayjs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export const ArticleDetail = ({ route, navigation }) => {
  const { article }: { article: Article } = route?.params
  const [imageDimensions, setImageDimensions] = useState<{width: number, height: number}>()

  const onBack = (event: GestureResponderEvent) => {
    navigation.navigate('Root')
  }

  const onImageLoad = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    setImageDimensions({
      width: event.nativeEvent.source.width,
      height: event.nativeEvent.source.height
    })
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#ffffff' barStyle='dark-content' animated />
      <TouchableNativeFeedback onPress={onBack}>
        <Text className='pt-4 pb-2 px-2 bg-white'>
          <Icon name='chevron-left' size={28} />
        </Text>
      </TouchableNativeFeedback>
      <ScrollView className='px-4 bg-white h-full overflow-x-visible'>
        <View>
          <Text className='text-2xl text-neutral-500 font-semibold font-poppins'>
            {article?.title}
          </Text>
          <Text className='mb-2 font-poppins uppercase text-primary-500 font-semibold'>          
            {article?.source?.name}
          </Text>
          <Text className='text-xs text-neutral-400 font-poppins mb-2'>
            {article?.publishDate ? `${dayjs(article?.publishDate).format('DD MMM YYYY')}` : ''}
            {article?.publishDate ? `, ${dayjs(article?.publishDate).format('HH:MM')}` : ''}
          </Text>
        </View>
        {article?.imageUrl && (
          <Image
            className='w-full h-52'
            source={{
              uri: article?.imageUrl
            }}
            style={{
              resizeMode: 'stretch',
            }}
            onLoad={onImageLoad}
          />
        )}
        <View className='py-2 flex flex-row'>
          {article?.listCategory?.map(tag => (
            <TouchableNativeFeedback
              key={tag?.name}
            >
              <View
                className='self-start mr-1 bg-primary-500 rounded-sm p-0.5'
              >
                <Text className='text-white text-xs font-poppins'> #{tag?.name} </Text>
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>
        <View className='py-2'>
          <Text className='text-neutral-500 font-poppins leading-6'>
            {article?.content || article?.description}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}