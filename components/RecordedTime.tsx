import { View, Text } from 'react-native'
import React from 'react'

type Props = {
    time: string
}

const RecordedTime = (props: Props) => {
  return (
    <View>
      <Text>{props.time}</Text>
    </View>
  )
}

export default RecordedTime