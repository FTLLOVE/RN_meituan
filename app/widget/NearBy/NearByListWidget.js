import React, { PureComponent } from 'react'
import { View, Text, FlatList, RefreshControl } from 'react-native'
import NearByHeaderWidget from './NearByHeaderWidget'
import PropTypes from 'prop-types'
import NearByDetailWidget from './NearByDetailWidget'
import * as api from '../../api'

class NearByListWidget extends PureComponent {

   static propTypes = {
      categories: PropTypes.array.isRequired,
   }

   constructor(props) {
      super(props)
      this.state = {
         categoryIndex: 0,
         dataList: api.foodList,
         refreshing: false
      }
   }

   renderHeaderComponent = () => {
      return (
         <NearByHeaderWidget
            categories={this.props.categories}
            selectedIndex={this.state.categoryIndex}
            onSelected={(index) => {
               if (index != this.state.categoryIndex) {
                  this.setState({
                     categoryIndex: index
                  })
               }
            }}
         />
      )
   }

   renderItem = (rowData) => {
      return (
         <NearByDetailWidget
            info={rowData.item}
         />
      )

   }

   randomSort = (a, b) => {
      return Math.random() > 0.5 ? -1 : 1;
   }

   onRefresh = () => {
      this.setState({
         refreshing: true
      })

      setTimeout(() => {
         this.setState({
            dataList: api.foodList.sort(this.randomSort),
            refreshing: false
         })
      }, 1000);
   }

   render() {
      return (
         <View style={{ flex: 1 }}>
            <FlatList
               ListHeaderComponent={() => this.renderHeaderComponent()}
               keyExtractor={(item, index) => index}
               data={this.state.dataList}
               renderItem={this.renderItem}
               refreshControl={
                  <RefreshControl
                     colors={['#ff0000', '#00ff00', '#0000ff']}
                     progressBackgroundColor={"#ffffff"}
                     refreshing={this.state.refreshing}
                     onRefresh={this.onRefresh}
                  />
               }

            />
         </View>
      )
   }
}

export default NearByListWidget