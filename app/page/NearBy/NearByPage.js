import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'
import Colors from '../../widget/Colors'
import DimensionsUtils from '../../utils/DimensionsUtils'
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view'
import NearByListWidget from '../../widget/NearBy/NearByListWidget'

class NearByPage extends PureComponent {

   constructor(props) {
      super(props)
      this.state = {
         selectedIndex: 0,
         currentIndex: 0
      }

   }

   static navigationOptions = ({ navigation }) => ({
      headerLeft: (
         <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }} activeOpacity={0.9}>
            <Image
               source={require('../../img/public/icon_food_merchant_address.png')}
               style={{ width: 13, height: 16 }}
            />
            <Text style={{ fontSize: 14, color: '#222', marginLeft: 5 }}>合肥 天柱路</Text>
         </TouchableOpacity>
      ),
      headerStyle: {
         elevation: 0.9
      },
      headerRight: (
         <TouchableOpacity activeOpacity={0.8} style={styles.searchBar}>
            <Image source={require("../../img/home/search_icon.png")} style={styles.searchIcon} />
            <Text style={{ fontSize: 13, color: '#777' }}>找附近的吃喝玩乐</Text>
         </TouchableOpacity>
      )
   })

   render() {
      let titles = [
         '美食',
         '酒店',
         '猫眼电影',
         '机票/火车票',
         '休闲娱乐/KTV',
         '生活服务',
         '丽人/美发/医学美容'
      ]
      let categories = [
         ['代金券', '蛋糕甜点', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜'],
         ['经济型酒店', '主题酒店', '商务酒店', '公寓', '豪华酒店', '客栈', '青年旅社'],
         ['烈火英雄', '战狼2', '大话西游', '速度与激情', '沉默的证人', '上海堡垒'],
         ['国内机票', '国际机票', '港澳台机票', '火车票'],
         ['足疗按摩', '洗浴/汗蒸', '酒吧', '密室逃亡', 'KTV'],
         ['衣物/皮具洗护', '家政', '搬家运输', '送水'],
         ['美甲', '美甲美瞳', '美容美体', '医学美容', '瑜伽舞蹈']
      ]
      return (
         <ScrollableTabView
            style={styles.container}
            tabBarBackgroundColor='#fff'
            tabBarActiveTextColor='#f26966'
            tabBarUnderlineStyle={styles.underLineStyle}
            tabBarInactiveTextColor='#555'
            tabBarTextStyle={styles.tarbarTextStyle}
            scrollWithoutAnimation={true}
            renderTabBar={() => <ScrollableTabBar />}
            onChangeTab={(obj) => {
               this.setState({
                  currentIndex: obj.i
               })
            }}
         >
            {
               titles.map((item, index) => (
                  <NearByListWidget
                     selectedIndex={this.state.selectedIndex}
                     tabLabel={item}
                     key={index}
                     categories={categories[index]}
                     currentIndex={this.state.currentIndex}
                  />
               ))
            }
         </ScrollableTabView>
      )
   }

}
const styles = StyleSheet.create({
   tarbarTextStyle: {
      fontSize: 13,
      marginTop: 13
   },
   underLineStyle: {
      backgroundColor: '#f26966',
   },
   container: {
      flex: 1,
      backgroundColor: Colors.paper,
   },
   searchIcon: {
      height: 20,
      width: 20,
      margin: 5
   },
   searchBar: {
      width: DimensionsUtils.width * 0.65,
      height: 38,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#eee",
      marginRight: 15
   }

})
export default NearByPage