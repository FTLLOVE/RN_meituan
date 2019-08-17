import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../Colors'

class OrderListWidget extends Component {

   render() {
      let { info } = this.props
      return (
         <TouchableOpacity style={styles.container} activeOpacity={0.9}>
            <Image style={styles.icon} source={{ uri: info.imgUrl }} />
            <View style={styles.rightContainer}>
               <Text style={{ color: '#3E3E3E', fontSize: 15 }}>{info.title}</Text>
               <Text style={{ color: '#666', fontSize: 14,marginTop: 5 }}>{info.areaName}</Text>
               <View style={styles.bottomStyle}>
                  <Text style={{ color: Colors.primary }}>￥<Text style={{ fontSize: 22 }}>{info.lowPrice}</Text>起</Text>
                  <Text style={{ color: '#f60' }}>{info.commentNum}条评论</Text>
               </View>
            </View>
         </TouchableOpacity>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      padding: 16,
      borderBottomColor: Colors.border,
      borderBottomWidth: StyleSheet.hairlineWidth,
   },
   icon: {
      width: 130,
      height: 90,
      borderRadius: 5
   },
   rightContainer: {
      flex: 1,
      justifyContent: 'space-between',
      paddingLeft: 20
   },
   bottomStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
   }

})
export default OrderListWidget
