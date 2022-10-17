import { Horse } from 'interfaces'
import { View, Text, Image, GestureResponderEvent, TouchableNativeFeedback } from 'react-native'

export const MiniSalesItem = ({
  horse,
  onPress,
}: {
  horse: Horse
  onPress: (event: GestureResponderEvent) => void
}) => {
  return ('horseClassifieds' in horse) ? (
    <View className='h-64 rounded-sm bg-white shadow border border-neutral-50'>
      <Image
        className='w-full h-full rounded-sm'
        source={{
          uri: horse?.horseClassifieds?.[0]?.background?.url ??
          'https://test-next.bloodstockexchange.com.au/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsignup.8e75b832.png&w=1080&q=75'
        }}
        resizeMode='cover'
      />
    </View>
  ) : (
    <TouchableNativeFeedback onPress={onPress}>
      <View className='rounded-sm bg-white shadow border border-neutral-50'>
        <Image
          className='w-full h-20 rounded-t-sm'
          source={{
            uri: horse?.avatar?.cdnMedium ??
            horse?.avatar?.cdnSmall ??
            horse?.avatar?.cdnLarge ??
            horse?.avatar?.cdnOrigin ??
            'https://test-next.bloodstockexchange.com.au/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsignup.8e75b832.png&w=1080&q=75'
          }}
          style={{ resizeMode: 'cover' }}
        />
        <View className='p-2 rounded'>
          <Text
            className='text-xs mb-1 text-neutral-500 font-semibold font-poppins'
            numberOfLines={1}
            ellipsizeMode='middle'
            onPress={onPress}
          >
            {horse?.name || horse?.horseName || horse?.nickname}
          </Text>
          {/* <Text className='text-[10px] text-neutral-400 font-poppins'>
            <Text>
              {horse?.age ? `${horse?.age === 1 ? 'Yearling' : `${horse?.age} YO`}` : ''}
            </Text>
            <Text>{horse?.colour ? ` | ${horse?.colour?.colour}` : ''}</Text>
            <Text>{horse?.sex ? ` | ${horse?.sex}` : ''}</Text>
          </Text> */}
          {horse?.totalPrice || horse?.price || horse?.condition ? (
            <>
              <Text className='text-primary-500 font-semibold font-poppins text-center'>
                <Text>{(horse?.totalPrice || horse?.price)?.toLocaleString('en-AU', {
                  style: 'currency',
                  currency: 'AUD',
                  minimumFractionDigits: 0,
                })}</Text>
              </Text>
              {/* <Text
                className='text-xs text-neutral-500 font-poppins'
                numberOfLines={2}
              >
                {horse?.condition}
              </Text> */}
            </>
          ) : (
            <Text
              className='text-xs text-neutral-400 font-poppins'
              numberOfLines={3}
            >
              {horse?.headline || horse?.description}
            </Text>
          )}
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}