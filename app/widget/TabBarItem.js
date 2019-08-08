import React, { PureComponent } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

class TabBarItem extends PureComponent {

   static propTypes = {
      focused: PropTypes.any.isRequired,
      normalImage: PropTypes.any.isRequired,
      selectedImage: PropTypes.any.isRequired,
      tintColor: PropTypes.any
   }

   render() {
      let { normalImage, selectedImage, tintColor, focused } = this.props
      return (
         <Image
            source={focused ? selectedImage : normalImage}
            style={styles.imageStyle}
         />
      )
   }
}

const styles = StyleSheet.create({
   imageStyle: {
      height: 25,
      width: 25,
   }
})

export default TabBarItem