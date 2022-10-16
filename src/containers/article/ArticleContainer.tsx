import { useGetArticles } from 'apis'
import { FilterBlock, ListItem } from 'components'
import { Article } from 'interfaces'
import { useMemo } from 'react'
import { Dimensions, FlatList, RefreshControl, Text, TouchableNativeFeedback, View } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ArticleDetail } from './ArticleDetail'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator()
const SCREEN_WIDTH = Dimensions.get('window').width

export const ArticleContainer = ({ navigation }) => {
  const {
    data: articlesResp,
    refetch,
    isFetching,
  } = useGetArticles({
    pageIndex: 0,
    pageSize: 10,
    orderBy: 'publishedDate',
    orderDirection: 'desc',
    isSimple: true,
  })
  const articles = useMemo(() => articlesResp?.data?.responseData || [], [articlesResp])

  const onArticlePress = (article: Article) => {
    navigation.navigate('Detail', {
      article
    })
  }

  return (
    <Animated.View>
      <FilterBlock />
      <FlatList
        className='px-2 pb-40'
        data={articles}
        keyExtractor={(item, index) => `${item.id}${index}`}
        renderItem={({ item: article }) => (
          <View className='p-1'>
            <ListItem
              key={article?.id}
              article={article}
              onPress={() => onArticlePress(article)}
            />
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={() => refetch()}
          />
        }
      />
    </Animated.View>
  )
}