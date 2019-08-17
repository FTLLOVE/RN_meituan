import React, { PureComponent } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, RefreshControl } from 'react-native'
import Colors from '../../widget/Colors'
import DimensionsUtils from '../../utils/DimensionsUtils'
import SpaceWidget from '../../widget/SpaceWidget'
import OrderListWidget from '../../widget/Order/OrderListWidget'
import * as api from '../../api'

class OrderPage extends PureComponent {

   constructor(props) {
      super(props)
      this.state = {
         dataList: api.collectionList
      }
   }

   static navigationOptions = ({ navigation }) => ({
      headerTitle: "我的订单",
      headerTitleStyle: { alignSelf: 'center', textAlign: 'center', flex: 1, elevation: 1, fontSize: 16, },
      headerStyle: {
         elevation: 0.9,
         backgroundColor: Colors.primary,
      }
   })

   renderHeaderComponent = () => {
      return (
         <View style={{ flex: 1 }}>
            <View style={styles.topContainer}>
               <Text style={{ color: '#676767', fontSize: 16 }}>我的订单</Text>
               <View style={{ flex: 1 }}></View>
               <TouchableOpacity style={{ flexDirection: 'row' }}>
                  <Text style={{ color: '#999999', fontSize: 14 }}>全部订单</Text>
                  <Image style={styles.icon} source={require('../../img/public/cell_arrow.png')} />
               </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
               <TouchableOpacity style={styles.itemStyle} activeOpacity={0.8}>
                  <Image source={require('../../img/order/order_tab_need_pay.png')} style={styles.iconStyle} resizeMode="contain" />
                  <Text>待付款</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.itemStyle} activeOpacity={0.8}>
                  <Image source={require('../../img/order/order_tab_need_use.png')} style={styles.iconStyle} resizeMode="contain" />
                  <Text>待使用</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.itemStyle} activeOpacity={0.8}>
                  <Image source={require('../../img/order/order_tab_need_review.png')} style={styles.iconStyle} resizeMode="contain" />
                  <Text>待评价</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.itemStyle} activeOpacity={0.8}>
                  <Image source={require('../../img/order/order_tab_needoffer_aftersale.png')} style={styles.iconStyle} resizeMode="contain" />
                  <Text>退款/售后</Text>
               </TouchableOpacity>
            </View>

            <SpaceWidget />

            <View style={styles.topContainer}>
               <Text style={{ color: '#676767', fontSize: 16 }}>我的收藏</Text>
               <View style={{ flex: 1 }}></View>
               <TouchableOpacity style={{ flexDirection: 'row' }}>
                  <Text style={{ color: '#999999', fontSize: 14 }}>查看全部</Text>
                  <Image style={styles.icon} source={require('../../img/public/cell_arrow.png')} />
               </TouchableOpacity>
            </View>
         </View>
      )
   }

   renderItem = (rowData) => {
      return (
         <OrderListWidget
            info={rowData.item}
         />
      )
   }

   render() {
      return (
         <View style={styles.container}>
            <FlatList
               ListHeaderComponent={() => this.renderHeaderComponent()}
               keyExtractor={(item, index) => index}
               data={this.state.dataList}
               renderItem={this.renderItem}
            />
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   topContainer: {
      flexDirection: 'row',
      height: 38,
      borderBottomColor: Colors.border,
      alignItems: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
      padding: 15
   },
   icon: {
      width: 14,
      height: 14,
      marginLeft: 5,
      marginTop: 3
   },
   itemStyle: {
      width: DimensionsUtils.width / 4,
      height: DimensionsUtils.width / 5,
      justifyContent: 'center',
      alignItems: 'center'
   },
   iconStyle: {
      width: 30,
      height: 30,
      margin: 5
   }
})

export default OrderPage