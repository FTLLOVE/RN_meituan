import React, { PureComponent } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, RefreshControl } from 'react-native'
import DimensionsUtils from '../../utils/DimensionsUtils'
import Colors from '../../widget/Colors'
import SpaceWidget from '../SpaceWidget'
import axios from 'axios'
import * as api from '../../api'
import GuessScene from './GuessScene'

class GroupPurchaseScene extends PureComponent {

   constructor(props) {
      super(props)
      this.state = {
         dataList: [],
         refreshing: false
      }
   }

   componentDidMount() {
      let arr = api.guessList.sort(() => (0.5 - Math.random()))
      this.setState({
         dataList: arr
      })
   }

   static navigationOptions = ({ navigation }) => ({
      headerTitle: (
         <Text style={{ fontSize: 16 }}>团购详情</Text>
      ),
      headerTitleStyle: {
         flex: 1,
         textAlign: 'center'
      },
      headerTintColor: Colors.primary,
      headerStyle: { elevation: 0 },
      headerRight: (
         <TouchableOpacity onPress={
            () => {
               alert("分享")
            }
         }
            activeOpacity={0.8}
         >
            <Image source={require("../../img/public/icon_navigationItem_share.png")} style={{
               width: 27,
               height: 27,
               margin: 8
            }} />
         </TouchableOpacity>
      )
   })

   render() {
      return (
         <View style={{ flex: 1 }}>
            <FlatList
               ListHeaderComponent={() => this.renderHeaderComponent()}
               keyExtractor={(item, index) => index}
               data={this.state.dataList}
               renderItem={this.renderItem}
              
            />
         </View>
      )
   }

   renderItem = (rowData) => {
      return (
         <GuessScene
            info={rowData.item}
         />
      )
   }

   renderHeaderComponent = () => {
      let { info } = this.props.navigation.state.params
      let imageUrl = info.imgUrl.replace("w.h", "480.0")
      return (
         <View style={styles.container}>
            <View>
               <Image
                  source={{ uri: imageUrl }}
                  style={styles.banner}
               />
               <View style={styles.topContainer}>
                  <Text style={{ fontSize: 15, color: Colors.primary, fontWeight: 'bold', }}>¥</Text>
                  <Text style={{ fontSize: 30, color: Colors.primary, marginBottom: -10 }}>{info.currentPrice}</Text>
                  <Text style={{ marginLeft: 13 }}>{info.oldPrice}</Text>
                  <View style={{ flex: 1 }}></View>
                  <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer}>
                     <Text style={{ fontSize: 15, color: '#fff' }}>
                        立即抢购
                     </Text>
                  </TouchableOpacity>
               </View>
            </View>
            <View style={{
               width: DimensionsUtils.width,
               height: StyleSheet.hairlineWidth,
               backgroundColor: Colors.border,
               marginTop: 5
            }}
            >
            </View>

            <View style={styles.tagContainer}>
               <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../img/home/icon_deal_anytime_refund.png")}
               />
               <Text style={{ color: '#89B24F', fontSize: 13 }}>   随时退</Text>
               <View style={{ flex: 1 }} />
               <Text>已售{info.currentPrice}件</Text>
            </View>

            <SpaceWidget />

            <View style={styles.guessContainer}>
               <Text style={{ fontSize: 15 }}>猜你喜欢</Text>
            </View>

            <View style={{
               width: DimensionsUtils.width,
               height: StyleSheet.hairlineWidth,
               backgroundColor: Colors.border,

            }}>
            </View>
         </View >
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
   },
   banner: {
      width: DimensionsUtils.width,
      height: DimensionsUtils.width / 2
   },
   topContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      padding: 10
   },
   btnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.primary,
      width: 90,
      height: 33,
      borderRadius: 5,
      marginBottom: -8
   },
   tagContainer: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center'
   },
   guessContainer: {
      padding: 15,
      height: 30,
      justifyContent: 'center',
   }
})

export default GroupPurchaseScene