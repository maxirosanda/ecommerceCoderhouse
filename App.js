import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'
import { colors } from './src/global/colors'
import MainNavigator from './src/navigation/MainNavigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { init } from './src/db'

export default function App() {

  
  init()
  
  const [fontLoaded] = useFonts(fonts)

  if(!fontLoaded){
    return null
  } 

  return (
    <>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
      <StatusBar style="light" backgroundColor={colors.green3} />
    </>
  )
}

const styles = StyleSheet.create({})
