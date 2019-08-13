import React, { PureComponent } from 'react'
// import { View, Text } from 'react-native'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

import Colors from '../../widget/Colors'


class NearByPage extends PureComponent {

   static navigationOptions = () => ({
      headerStyle: { backgroundColor: Colors.primary },
      headerTitle: (
         <TouchableOpacity style={styles.searchBar}>
            <Image source={require('../../img/home/search_icon.png')} style={styles.searchIcon} />
            <Text style={{ fontSize: 14 }}>搜索</Text>
         </TouchableOpacity>
      ),
   })

   render() {
      return (
         <View>
            <Text>NearByPage</Text>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   searchIcon: {
      width: 20,
      height: 20,
      margin: 5,
   }
})
export default NearByPage