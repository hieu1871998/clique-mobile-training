import { createDrawerNavigator } from '@react-navigation/drawer'
import { RootContainer, SettingsContainer } from 'containers'

const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
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