import { useState } from 'react'
import { GestureResponderEvent, Switch, Text, TouchableNativeFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const DisplaySettingsContainer = () => {
  const [compactToggled, setCompactToggled] = useState(false)
  const [instantToggled, setInstantToggled] = useState(false)

  const toggleCompact = () => {
    setCompactToggled(prev => !prev)
  }
  const toggleInstant = () => {
    setInstantToggled(prev => !prev)
  }

  return (
    <View className='p-2'>
      <SettingItem
        text='Toggle compact display'
        toggled={compactToggled}
        toggleSwitch={toggleCompact}
      />
      <SettingItem
        text='Toggle instant order'
        toggled={instantToggled}
        toggleSwitch={toggleInstant}
      />
    </View>
  )
}

const SettingItem = ({
  text,
  toggled,
  toggleSwitch,
  onPress,
}: {
  text: string
  toggled: boolean,
  toggleSwitch: () => void
  onPress?: (event: GestureResponderEvent) => void
}) => {
  return (
    <View
      className='m-1 rounded-md bg-white'
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2,

        elevation: 4,
      }}
    >
      <TouchableNativeFeedback onPress={onPress}>
        <View
          className='rounded-md p-2 flex flex-row items-center justify-between'
        >
          <Text className='ml-2'>{text}</Text>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#30ca57" }}
              thumbColor={toggled ? "#ffffff" : "#ffffff"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={toggled}
            />
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}