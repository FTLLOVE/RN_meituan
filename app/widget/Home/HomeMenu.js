import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import PageControl from 'react-native-page-control'
import HomeMenuItem from '../../widget/Home/HomeMenuItem'
import DimensionsUtils from '../../utils/DimensionsUtils'
import Colors from '../Colors';

class HomeMenu extends PureComponent {

   static propTypes = {
      menuInfos: PropTypes.array.isRequired,
   }

   constructor(props) {
      super(props)
      this.state = {
         currentPage: 0
      }

   }

   render() {
      let { menuInfos } = this.props

      let pages = Math.ceil(menuInfos.length / 10)

      let MenuItemElement = menuInfos.map((info, index) => (
         <HomeMenuItem
            key={index}
            title={info.title}
            icon={info.icon}
         />
      ))

      let menusElement = []
      for (let index = 0; index < pages; index++) {
         let elementsPerPage = MenuItemElement.slice(index * 10, index * 10 + 10)
         let menuView = (
            <View key={index} style={styles.itemsView}>
               {elementsPerPage}
            </View>
         )
         menusElement.push(menuView)
      }

      return (
         <View style={styles.container}>
            <ScrollView
               horizontal
               pagingEnabled
               showsHorizontalScrollIndicator={false}
               onScroll={this.onScroll}
            >
               <View style={styles.menuContainer}>
                  {menusElement}
               </View>
            </ScrollView>

            <PageControl
               style={styles.pageControl}
               currentPage={this.state.currentPage}
               numberOfPages={pages}
               pageIndicatorTintColor='gray'
               currentPageIndicatorTintColor={Colors.primary}
            />
         </View>

      )
   }

   onScroll = (e) => {
      let x = e.nativeEvent.contentOffset.x
      let currentPage = Math.round(x / DimensionsUtils.width)

      if (this.state.currentPage != currentPage) {
         this.setState({ currentPage: currentPage })
      }
   }
}

const styles = StyleSheet.create({
   container: {
      marginTop: 10,
      backgroundColor: "white",
   },
   menuContainer: {
      flexDirection: 'row',
   },
   itemsView: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: DimensionsUtils.width,
   },
   pageControl: {
      margin: 10
   }
})

export default HomeMenu