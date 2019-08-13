/**
 * 路由公共方法
 */
export default class NavigationUtils {
   /**
    * 跳转到指定的页面
    * @param {路由名称} routeName 
    */
   static goPage(routeName, params) {
      const navigation = NavigationUtils.navigation
      navigation.navigate(routeName, params)
   }
}