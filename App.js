import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'

import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'
import { colors } from './src/global/colors'
import Navigator from './src/navigation/Navigator'

export default function App() {


  const [fontLoaded] = useFonts(fonts)

  if(!fontLoaded){
    return null
  } 

  return (
    <>
      <Navigator/>
      <StatusBar style="light" backgroundColor={colors.green3} />
    </>
  )
}

const styles = StyleSheet.create({})
