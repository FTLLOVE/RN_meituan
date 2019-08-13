import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import DimensionsUtils from '../../utils/DimensionsUtils'

class HomeMenuItem extends PureComponent {

   render() {
      let { title, icon } = this.props
      return (
         <View style={styles.container}>
            <Image source={icon} style={styles.icon} />
            <Text>{title}</Text>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: DimensionsUtils.width / 5,
      height: DimensionsUtils.width / 5
   },
   icon: {
      width: DimensionsUtils.width / 9,
      height: DimensionsUtils.width / 9,
      margin: 5
   }
})

export default HomeMenuItem