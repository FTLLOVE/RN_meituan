import React, { PureComponent } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import HomeGridItem from './HomeGridItem'
import Colors from '../Colors'
import PropTypes from 'prop-types'

class HomeGrid extends PureComponent {

   static propTypes = {
      recommendList: PropTypes.array.isRequired
   }

   render() {
      let { recommendList } = this.props
      return (
         <View style={styles.container}>
            {
               recommendList.map((item, index) => (
                  <HomeGridItem
                     key={item.title}
                     title={item.title}
                     titleColor={item.titleColor}
                     subTitle={item.subTitle}
                     subTitleColor={item.subTitleColor}
                     icon={item.icon}
                     isLink={item.isLink}
                     url={item.url}
                  />
               ))
            }
         </View>
      )
   }

   onPress = (item) => {
      console.log(item)
   }
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderLeftWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.border
   }
})
export default HomeGrid