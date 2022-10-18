import { View, Text } from 'react-native'
import { SalesItemContainer, SettingsContainer } from 'containers'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Colors } from 'constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Drawer = createDrawerNavigator()

export const MoreContainer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.Primary,
        },
        headerTitleStyle: {
          color: '#ffffff'
        },
        headerTintColor: '#ffffff',
        drawerActiveBackgroundColor: '#ffffff',
        drawerInactiveTintColor: '#ffffff',
        drawerItemStyle: {
          borderTopColor: '#ffffff',
          borderTopWidth: 1
        }
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name='Sale Directory'
        component={SalesItemContainer}
      />
      <Drawer.Screen
        name='Settings'
        component={SettingsContainer}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  )
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { navigation } = props

  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: Colors.Primary,
        padding: 16
      }}
    >
      <DrawerItem
        label={() => (
          <View className='flex flex-col'>
            <View className='rounded-full bg-primary-400 self-start p-2'>
              <Icon name='account' size={64} color='#ffffff' />
            </View>
            <Text className='text-white text-base mt-4'>Welcome <Text className='font-medium'>Admin</Text></Text>
          </View>
        )}
        onPress={() => console.log('Account!')}
        pressColor={Colors.Primary}
      />
      <DrawerItem
        label={() => (
          <View>
            <Text className='text-white'>Sale</Text>
          </View>
        )}
        onPress={() => navigation.navigate('Sale Directory')}
      />
      <View className='mx-4 border border-primary-400' />
      <DrawerItem
        label={() => (
          <View>
            <Text className='text-white'>Report</Text>
          </View>
        )}
        onPress={null}
      />
      <View className='mx-4 border border-primary-400' />
      <DrawerItem
        label={() => (
          <View>
            <Text className='text-white'>History</Text>
          </View>
        )}
        onPress={null}
      />
      <View className='mx-4 border border-primary-400' />
      <DrawerItem
        label={() => (
          <View>
            <Text className='text-white'>Settings</Text>
          </View>
        )}
        onPress={() => navigation.navigate('Settings')}
      />
      <View className='mx-4 border border-primary-400' />
      <DrawerItem
        label={() => (
          <View>
            <Text className='text-white'>Data plans</Text>
          </View>
        )}
        onPress={null}
      />
    </DrawerContentScrollView>
  )
}