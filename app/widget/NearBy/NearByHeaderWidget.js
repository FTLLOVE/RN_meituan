import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import DimensionsUtils from '../../utils/DimensionsUtils'
import PropTypes from 'prop-types'
import Colors from '../Colors'

class NearByHeaderWidget extends PureComponent {

   static propTypes = {
      categories: PropTypes.array.isRequired,
      selectedIndex: PropTypes.number.isRequired,
      onSelected: PropTypes.func.isRequired
   }

   render() {
      let { categories, selectedIndex, onSelected } = this.props
      return (
         <View style={styles.container}>
            {
               categories.map((item, index) => (
                  <TouchableOpacity
                     key={index}
                     style={[styles.itemStyle, { backgroundColor: selectedIndex === index ? '#f26966' : '#fff' }]}
                     onPress={() => {
                        onSelected(index)
                     }}
                  >
                     <Text style={{ fontSize: 13, color: selectedIndex === index ? '#fff' : '#555' }}>{item}</Text>

                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }

}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      flexWrap: 'wrap'
   },
   itemStyle: {
      width: DimensionsUtils.width / 4 - 10,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 15,
      borderColor: Colors.border,
      marginLeft: 8,
      marginTop: 5,
      marginBottom: 5
   }
})

export default NearByHeaderWidget