import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationMain from './src/navigation/NavigationMain'
import { useStyles } from './src/utils/styles'
import colors from './src/utils/colors'

const App = () => {
  const AppStyle = useStyles();
  return (
    <SafeAreaView style={[AppStyle.commonFlexOne]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.middleSideClorWhite}/>
        <NavigationMain/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})