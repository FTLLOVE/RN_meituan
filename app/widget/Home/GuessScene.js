import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import * as api from '../../api'
import Colors from '../Colors'


class GuessScene extends PureComponent {

   render() {
      let { info } = this.props
      let CommentEle
      if (info.allCommentNum === 0) {
         CommentEle = <View></View>
      } else {
         CommentEle = <Text style={{ color: '#f60' }}>{info.allCommentNum}条评论</Text>
      }
      return (
         <TouchableOpacity style={styles.container}>
            <Image source={{ uri: info.frontImg }} style={styles.image} />

            <View style={styles.rightContainer}>
               <Text style={{ color: '#3E3E3E', fontSize: 15 }}>{info.title}</Text>
               <Text style={{ color: '#666', fontSize: 14 }}>{info.address}</Text>
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
      padding: 16,
      flexDirection: 'row',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.border,
      backgroundColor: "#fff",
   },
   image: {
      width: 130,
      height: 90,
      borderRadius: 5
   },
   rightContainer: {
      flex: 1,
      paddingLeft: 20,
      justifyContent: 'space-between',
   },
   bottomStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
   }
})

export default GuessScene