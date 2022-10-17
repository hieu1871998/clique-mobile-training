import { createDrawerNavigator } from '@react-navigation/drawer'
import { Colors } from 'constants'
import { RootContainer, SettingsContainer } from 'containers'

const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.Primary,
        },
        headerTitleStyle: {
          color: '#ffffff'
        },
        headerTintColor: '#ffffff'
      }}
    >
      <Drawer.Screen
        name='App'
        component={RootContainer}
      />
      <Drawer.Screen
        name='Settings'
        component={SettingsContainer}
      />
    </Drawer.Navigator>
  )
}