import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'
import { colors } from './src/global/colors'
import Navigator from './src/navigation/Navigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'

export default function App() {


  const [fontLoaded] = useFonts(fonts)

  if(!fontLoaded){
    return null
  } 

  return (
    <>
      <Provider store={store}>
        <Navigator/>
      </Provider>
      <StatusBar style="light" backgroundColor={colors.green3} />
    </>
  )
}

const styles = StyleSheet.create({})
