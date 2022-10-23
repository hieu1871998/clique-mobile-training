import { Colors } from 'constants'
import { useState } from 'react'
import { Switch, Text, TouchableHighlight, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    <SafeAreaView className='px-2 pt-16'>
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
    </SafeAreaView>
  )
}

const SettingItem = ({
  text,
  toggled,
  toggleSwitch,
}: {
  text: string
  toggled: boolean,
  toggleSwitch: () => void
}) => {
  return (
    <View
      className='m-1 rounded bg-white'
      // style={{
      //   shadowColor: "#000",
      //   shadowOffset: {
      //     width: 0,
      //     height: 2,
      //   },
      //   shadowOpacity: 0.23,
      //   shadowRadius: 2,

      //   elevation: 4,
      // }}
    >
      <TouchableHighlight
        className='rounded'
        activeOpacity={1}
        underlayColor='#ffffff'
        onPress={toggleSwitch}
      >
        <View
          className='rounded-md p-2 flex flex-row items-center justify-between'
        >
          <Text className='text-neutral-500 font-poppins ml-2'>{text}</Text>
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
      </TouchableHighlight>
    </View>
  )
}