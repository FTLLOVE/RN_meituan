import React, { PureComponent } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Colors from '../Colors'
import * as api from '../../api'
import NavigationUtils from '../../utils/NavigationUtils'

class GroupPurchaseCell extends PureComponent {

  static propTypes = {
    info: PropTypes.object.isRequired
  }

  render() {
    let { info } = this.props
    let imageUrl = info.imgUrl.replace("w.h", "160.0")
    return (
      <TouchableOpacity
        onPress={this.onPress.bind(this, info.id)}
        style={styles.container}
        activeOpacity={0.7}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View style={styles.rightContainer}>
          <Text style={{ fontSize: 15, color: '#3E3E3E', fontWeight: 'bold' }}>{info.title}</Text>
          <Text style={{ fontSize: 14, color: '#C9C9C9', marginTop: 8 }}>{info.subTitle}</Text>
          <View style={styles.price}>
            <Text style={{ color: Colors.primary }}>¥{info.currentPrice}</Text>
            <Text style={{ fontSize: 13, color: Colors.gray }}>{info.oldPrice}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  onPress(id) {
    let newId = id.split("_")[1]
    NavigationUtils.goPage("GroupPurchaseScene", {
      info: this.props.info
    })
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    backgroundColor: "#fff",
  },
  image: {
    width: 120,
    height: 80,
    borderRadius: 8
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 20
  },
  price: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
})
export default GroupPurchaseCell