import React, { PureComponent } from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import HomePage from './page/Home/HomePage'
import NearByPage from './page/NearBy/NearByPage'
import OrderPage from './page/Order/OrderPage'
import MinePage from './page/Mine/MinePage'
import TabBarItem from './widget/TabBarItem'

class RootPage extends PureComponent {
   render() {
      return (
         <AppContainer />
      )
   }
}

const BottomTabNavigator = createBottomTabNavigator({
   Home: {
      screen: HomePage,
      navigationOptions: {
         tabBarLabel: '团购',
         tabBarIcon: ({ focused, tintColor }) => {
            return (
               <TabBarItem
                  focused={focused}
                  selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
                  normalImage={require('./img/tabbar/tabbar_homepage.png')}
                  tintColor={tintColor}
               />
            )
         }
      },
   },
   NearBy: {
      screen: NearByPage,
      navigationOptions: {
         tabBarLabel: '附近',
         tabBarIcon: ({ focused, tintColor }) => {
            return (
               <TabBarItem
                  focused={focused}
                  selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
                  normalImage={require('./img/tabbar/tabbar_merchant.png')}
                  tintColor={tintColor}
               />
            )
         }
      }
   },
   Order: {
      screen: OrderPage,
      navigationOptions: {
         tabBarLabel: '订单',
         tabBarIcon: ({ focused, tintColor }) => {
            return (
               <TabBarItem
                  focused={focused}
                  selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
                  normalImage={require('./img/tabbar/tabbar_order.png')}
                  tintColor={tintColor}
               />
            )
         }
      }
   },
   Mine: {
      screen: MinePage,
      navigationOptions: {
         tabBarLabel: '我的',
         tabBarIcon: ({ focused, tintColor }) => {
            return (
               <TabBarItem
                  focused={focused}
                  selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
                  normalImage={require('./img/tabbar/tabbar_mine.png')}
                  tintColor={tintColor}
               />
            )
         }
      }
   }
})

const AppContainer = createAppContainer(BottomTabNavigator)

export default RootPage