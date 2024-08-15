import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import { colors } from '../global/colors'
import TabBarIcon from '../components/TabBarIcon'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
   <NavigationContainer>
        <Tab.Navigator 
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle:styles.tabBar
            }}
        >
            <Tab.Screen 
                name='HomeStack' 
                component={ShopStack}
                options={{
                    tabBarIcon:({focused}) => {
                        return <TabBarIcon focused={focused} text="Shop" icon="shop"/>
                    }
                    
                }}
            />
            <Tab.Screen 
                name='CartStack' 
                component={CartStack}
                options={{
                    tabBarIcon:({focused}) => {
                        return <TabBarIcon focused={focused} text="Carrito" icon="shopping-cart"/>
                    }
                    
                }}
            />
            <Tab.Screen
                name='OrdersStack' 
                component={OrdersStack}
                options={{
                    tabBarIcon:({focused}) => {
                        return <TabBarIcon focused={focused} text="Ordenes" icon="list"/>
                    }
                }}
             />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
   tabBar:{
    backgroundColor:colors.green3,
    height:80
   }
  })
