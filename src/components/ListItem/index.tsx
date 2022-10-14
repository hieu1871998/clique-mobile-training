import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const ListItem: React.FC = () => {
  return (
    <View className='rounded bg-white my-2'>
      <Image
        className='w-full h-60 object-center object-cover rounded-t'
        source={{
          uri: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/310102203_1900072140203268_8836346697915935329_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=lsNqKfHXsPwAX8EzazV&_nc_ht=scontent.fhan2-4.fna&oh=00_AT-7w9lfz8y5ZLvuUQrcw0MBgud2Rx4Zaun28Ac64SrMgQ&oe=634DAF1D'
        }}
      />
      <View className='p-4 rounded'>
        <Text className='text-xs text-gray-400 font-helvetica'>
          07:30 * 23 Jun 2021 * NETHERLANDS
        </Text>
        <Text
          className='text-xl text-[#232b3e] font-bold font-helvetica'
        >
          Vietnam Racing Go-Kart Cup
        </Text>
        <Text className='font-helvetica'>
          #1 Frankie Dejong
        </Text>
        <Text className='font-helvetica'>
          #2 Frankie Dejong
        </Text>
        <Text className='font-helvetica'>
          #3 Frankie Dejong
        </Text>
        <Text className='font-helvetica'>
          #10 Frankie Dejong
        </Text>
      </View>
      <View
        className='border-t border-gray-200 p-2'
      >
        <Icon name='calendar-clock' />
      </View>
    </View>
  )
}