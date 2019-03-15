import React, { FunctionComponent } from 'react'
import { Text, StyleSheet, View } from 'react-native'

interface Props {
  name: string
  age: number
}

const Hello: FunctionComponent<Props> = props => {
  const { name, age } = props
  return (
    <View>
      <Text>Hello world!</Text>
      <Text>
        {name}({age})
      </Text>
    </View>
  )
}

export default Hello

export const styles = StyleSheet.create({})
