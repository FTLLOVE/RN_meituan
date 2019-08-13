import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'
import Colors from '../../widget/Colors'
import * as api from '../../api'
import HomeMenu from '../../widget/Home/HomeMenu'
import DimensionsUtils from '../../utils/DimensionsUtils'
import HomeGrid from '../../widget/Home/HomeGrid'
import SpaceWidget from '../../widget/SpaceWidget'
import NavigationUtils from '../../utils/NavigationUtils'
import axios from 'axios'
import GroupPurchaseCell from '../../widget/Home/GroupPurchaseCell'

class HomePage extends PureComponent {

   constructor(props) {
      super(props)
      this.state = {
         recommendList: [],
         dataList: []
      }
   }

   componentDidMount() {
      this.setState({
         recommendList: api.recommendList
      })
      this.requestData()
   }

   requestData = async () => {
      await axios.get(api.recommendUrl).then((resp) => {
         let result = resp.data
         if (result.code === 0) {
            let dataList = result.data.map((item) => ({
               id: item.id,
               title: item.title,
               subTitle: item.subTitle,
               imgUrl: item.imgUrl,
               currentPrice: item.currentPrice,
               oldPrice: item.oldPrice
            }))
            this.setState({
               dataList: dataList
            })
         } else {
            console.log("服务器返回报错")
         }
      })

   }

   static navigationOptions = ({ navigation }) => {
      return {
         headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
               <Image source={require("../../img/home/search_icon.png")} style={styles.searchIcon} />
               <Text style={{ fontSize: 14 }}>关键字搜索</Text>
            </TouchableOpacity>
         ),
         headerStyle: { backgroundColor: Colors.primary, elevation: 0 },
         headerLeft: (
            <TouchableOpacity style={styles.locatinStyl}>
               <Text style={{ color: "white" }}>定位</Text>
            </TouchableOpacity>
         ),
         headerRight: (
            <TouchableOpacity style={styles.notifyStyl}>
               <Image source={require("../../img/mine/icon_navigationItem_message_white.png")} style={{ width: 27, height: 27, margin: 8 }} />
            </TouchableOpacity>
         )
      }
   }

   renderHeaderComponent = () => {
      return (
         <View style={styles.container}>
            <HomeMenu menuInfos={api.menuInfos} />

            <SpaceWidget />

            <HomeGrid recommendList={this.state.recommendList} />

            <SpaceWidget />
         </View>
      )
   }

   renderItem = (rowData) => {
      return (
         <GroupPurchaseCell
            info={rowData.item}
         />
      )
   }

   render() {
      NavigationUtils.navigation = this.props.navigation
      return (
         <View style={{ flex: 1 }}>
            <FlatList
               ListHeaderComponent={() => this.renderHeaderComponent()}
               data={this.state.dataList}
               renderItem={this.renderItem}
               keyExtractor={(item, index) => index}
            />
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   searchIcon: {
      width: 20,
      height: 20,
      margin: 5,
   },
   searchBar: {
      flexDirection: 'row',
      width: DimensionsUtils.width * 0.7,
      height: 38,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "white",
      alignSelf: 'center'
   },
   locatinStyl: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center",
      width: DimensionsUtils.width * 0.15,
      marginRight: 10
   },
   notifyStyl: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: DimensionsUtils.width * 0.15
   },
   menuContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: DimensionsUtils.width / 5,
      height: DimensionsUtils.width / 5
   }
})
export default HomePage