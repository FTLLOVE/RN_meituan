import React, { PureComponent } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import DimensionsUtils from '../../utils/DimensionsUtils'
import Colors from '../Colors'
import PropTypes from 'prop-types'
import NavigationUtils from '../../utils/NavigationUtils'

class HomeGridItem extends PureComponent {

   static propTypes = {
      title: PropTypes.string.isRequired,
      titleColor: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      subTitleColor: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      isLink: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired
   }

   render() {
      const { title, titleColor, subTitle, subTitleColor, icon, isLink, url } = this.props
      return (
         <TouchableOpacity onPress={this.onPress.bind(this, isLink, url, title)} style={styles.container} activeOpacity={0.8}>
            <View>
               <Text style={{ fontSize: 15, fontWeight: 'bold', color: titleColor, marginBottom: 5 }}>{title}</Text>
               <Text style={{ fontSize: 14, color: subTitleColor }}>{subTitle}</Text>
            </View>
            <Image
               source={{ uri: icon }}
               style={styles.icon}
            />
         </TouchableOpacity>

      )
   }

   onPress(isLink, url, title) {
      if (isLink === 0) {
         return;
      } else {
         NavigationUtils.goPage("Web", {
            title: title,
            url: url
         })
      }
   }
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: DimensionsUtils.width / 2 - StyleSheet.hairlineWidth,
      height: DimensionsUtils.width / 4,
      backgroundColor: "white",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderRightWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.border
   },
   icon: {
      width: DimensionsUtils.width / 6,
      height: DimensionsUtils.width / 6,
      marginLeft: 15,
      borderRadius: DimensionsUtils.width / 12
   },
   title: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#222',
      marginBottom: 5
   },
   subTitle: {
      fontSize: 14,
      color: '#222'
   }
})

export default HomeGridItem