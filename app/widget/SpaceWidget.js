import React, { PureComponent } from 'react'
import { View } from 'react-native'
import Colors from './Colors'

class SpaceWidget extends PureComponent {
   render() {
      return (
         <View style={{ height: 14, backgroundColor: Colors.paper, }}></View>
      )
   }
}

export default SpaceWidget