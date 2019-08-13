import React, { PureComponent } from 'react'
import { createAppContainer, createBottomTabNavigator, BottomTabBar, createStackNavigator } from 'react-navigation'
import HomePage from './page/Home/HomePage'
import NearByPage from './page/NearBy/NearByPage'
import OrderPage from './page/Order/OrderPage'
import MinePage from './page/Mine/MinePage'
import TabBarItem from './widget/TabBarItem'
import Colors from './widget/Colors'
import WebScene from './page/Web/WebScene'
import GroupPurchaseScene from './widget/Home/GroupPurchaseScene'

class RootPage extends PureComponent {
	render() {
		return (
			<AppContainer />
		)
	}
}

const Tab = createBottomTabNavigator({
	Home: {
		screen: createStackNavigator({ screen: HomePage }),
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
		screen: createStackNavigator({ screen: NearByPage }),
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
		screen: createStackNavigator({ screen: OrderPage }),
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
		screen: createStackNavigator({ screen: MinePage }),
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
}, {
		tarBarComponent: BottomTabBar,
		tarBarPosition: 'bottom',
		lazy: true,
		animationEnabled: false,
		swipeEnabled: false,
		tabBarOptions: {
			activeTintColor: Colors.primary,
			inactiveTintColor: Colors.gray,
			style: { backgroundColor: "white", }
		}
	})

Tab.navigationOptions = {
	header: null
}

const StackNavigator = createStackNavigator(
	{
		Tab: { screen: Tab },
		Web: { screen: WebScene },
		GroupPurchaseScene: { screen: GroupPurchaseScene }
	},
	{
		defaultNavigationOptions: {
			headerBackTitle: null,
			headerTintColor: '#333'
		}
	}
)

const AppContainer = createAppContainer(StackNavigator)
export default RootPage