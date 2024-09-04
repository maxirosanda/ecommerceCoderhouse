import { Image, StyleSheet, Text, View } from 'react-native'
import { mapStaticApi } from '../firebase/googleApi'

const MapPreview = ({location}) => {
    
    const mapStaticUrl = `https://maps.googleapis.com/maps/api/staticmap?
                            center=${location.latitude},${location.longitude}
                            &zoom=13
                            &size=600x300
                            &maptype=roadmap
                            &markers=color:blue%7Clabel:S%7C${location.latitude},${location.longitude}
                            &key=${mapStaticApi}`

  return (
    <View>
      <Image
        source={location.latitude &&{uri:mapStaticUrl}}
        style={styles.image}
      />
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300,
        backgroundColor:"grey"
    }
})