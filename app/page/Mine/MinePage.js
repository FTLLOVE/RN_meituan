import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, RefreshControl, ScrollView } from 'react-native'
import Colors from '../../widget/Colors'
import DimensionsUtils from '../../utils/DimensionsUtils'
import SpaceWidget from '../../widget/SpaceWidget'
import * as api from '../../api'

class MinePage extends PureComponent {

   constructor(props) {
      super(props)
   }

   static navigationOptions = ({ navigation }) => ({
      headerRight: (
         <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
               <Image
                  source={require("../../img/mine/icon_navigationItem_set_white.png")}
                  style={{ width: 25, height: 25, margin: 8 }}
               />
            </TouchableOpacity>
            <TouchableOpacity>
               <Image
                  source={require("../../img/mine/icon_navigationItem_message_white.png")}
                  style={{ width: 25, height: 25, margin: 8 }}
               />
            </TouchableOpacity>
         </View>
      ),
      headerStyle: {
         backgroundColor: Colors.primary,
         elevation: 0
      }
   })

   renderHeaderComponent = () => {
      return (
         <View style={{ flex: 1 }}>
            < View style={styles.headerStyle} >
               <Image source={require('../../img/mine/avatar.png')} style={styles.icon} />
               <View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff', marginRight: 5 }}>豆芽菜不爱吃豆芽</Text>
                     <Image source={require('../../img/mine/beauty_technician_v15.png')} />
                  </View>
                  <Text style={{ fontSize: 13, color: '#fff', marginTop: 5 }} >个人信息</Text>
               </View>

            </View >
            <SpaceWidget />
         </View>

      )
   }

   renderListComponent = () => {
      let newInfoList = []
      let infoList = api.infoList
      for (let i = 0; i < infoList.length; i++) {
         const element = infoList[i];
         for (let j = 0; j < element.length; j++) {
            const subEle = element[j];
            let cell = (
               <TouchableOpacity style={styles.cellStyle} activeOpacity={0.9} key={subEle.title} onPress={() => {
                  alert('别着急嘛，慢慢来~~~')
               }}>
                  <Image source={subEle.image} style={{ width: 25, height: 25, marginRight: 10 }} />
                  <Text style={{ fontSize: 14, color: '#222' }}>{subEle.title}</Text>
                  <View style={{ flex: 1 }}></View>
                  <Text style={{ fontSize: 13, color: '#777' }}>{subEle.subtitle}</Text>
                  <Image source={require('../../img/public/cell_arrow.png')} style={styles.arrowStyle} />
               </TouchableOpacity>
            )
            newInfoList.push(cell)
         }
         newInfoList.push(<SpaceWidget key={i} />)
      }

      return (
         <View>
            {newInfoList}
         </View>
      )
   }

   render() {
      return (
         <View>
            <FlatList
               ListHeaderComponent={() => this.renderHeaderComponent()}
               ListFooterComponent={() => this.renderListComponent()}
               keyExtractor={(item, index) => index}
            />
         </View>
         // <ScrollView style={styles.container}>
         //    {this.renderHeaderComponent()}
         //    <SpaceWidget />
         //    {this.renderListComponent()}
         // </ScrollView>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   headerStyle: {
      backgroundColor: Colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      paddingBottom: 20
   },
   icon: {
      height: 50,
      width: 50,
      borderRadius: 25,
      marginRight: 10,
      borderWidth: 2,
      borderColor: Colors.primary
   },
   cellStyle: {
      backgroundColor: "#fff",
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: Colors.border
   },
   arrowStyle: {
      width: 14,
      height: 14,
      marginLeft: 5
   }
})

export default MinePage