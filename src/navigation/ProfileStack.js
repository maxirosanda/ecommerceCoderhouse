import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import MyProfile from '../screens/MyProfile'
import ImageSelector from '../screens/ImageSelector'
import LocationSelector from '../screens/LocationSelector'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator
            screenOptions={(
                () => {
                    return {
                        header: () => <Header title="Perfil"/>
                    }
                }
            )}
        >
            <Stack.Screen name='MyProfile' component={MyProfile}/>
            <Stack.Screen name='ImageSelector' component={ImageSelector}/>
            <Stack.Screen name='LocationSelector' component={LocationSelector}/>
        </Stack.Navigator>
  )
}

export default ProfileStack
