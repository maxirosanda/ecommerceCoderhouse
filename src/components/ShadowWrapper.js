import { StyleSheet, Text, View } from 'react-native'

const ShadowWrapper = ({style,children}) => {
  
  return (
    <View style={[styles.container,style]}>
      {children}
    </View>
  )
}

export default ShadowWrapper

const styles = StyleSheet.create({
    container:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
    }
})