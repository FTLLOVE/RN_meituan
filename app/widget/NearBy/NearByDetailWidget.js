import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Colors from '../Colors'
import DimensionsUtils from '../../utils/DimensionsUtils'

class NearByDetailWidget extends PureComponent {

   constructor(props) {
      super(props)
   }

   render() {
      let { info } = this.props
      let CommentEle
      if (info.allCommentNum === 0) {
         CommentEle = <View></View>
      } else {
         CommentEle = <Text style={{ color: '#f60' }}>{info.allCommentNum}条评论</Text>
      }
      return (
         <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <Image source={{ uri: info.frontImg }} style={styles.imageStyle} />
            <View style={styles.rightContainer}>
               <Text style={{ color: '#3E3E3E', fontSize: 15 }}>{info.title}</Text>
               <Text style={{ color: '#666', fontSize: 14, marginTop: 5 }}>{info.address}</Text>
               <View style={styles.bottomStyle}>
                  <Text>人均
                     <Text style={{ color: Colors.primary }}>￥{info.avgPrice}</Text>
                  </Text>
                  {CommentEle}
               </View>
            </View>
         </TouchableOpacity>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: "#fff",
      padding: 13,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.border
   },
   imageStyle: {
      width: 130,
      height: 90,
      borderRadius: 5
   },
   rightContainer: {
      flex: 1,
      justifyContent: 'space-between',
      paddingLeft: 10
   },
   bottomStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
   }
})
export default NearByDetailWidget
