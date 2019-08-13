import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ProgressBarAndroid } from 'react-native'
import { WebView } from 'react-native-webview'
import Colors from '../../widget/Colors'
import Spinner from 'react-native-loading-spinner-overlay'

export default class WebScene extends PureComponent {

   constructor(props) {
      super((props))
      this.state = {
         spinner: false
      }
   }

   static navigationOptions = ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
      headerTitleStyle: styles.headerStyle,
      headerTintColor: Colors.primary
   })

   render() {
      return (
         <View style={styles.container}>
            <Spinner
               visible={this.state.spinner}
               color={Colors.primary}
            />

            <WebView
               style={styles.webview}
               source={{ uri: this.props.navigation.state.params.url }}
               onLoad={this.onLoad}
               onLoadStart={this.onLoadStart}
               javaScriptEnabled={true}
               scalesPageToFit={false}
            />
         </View>
      )
   }

   onLoad = (e) => {
      this.setState({
         spinner: false
      })
   }

   onLoadStart = (e) => {
      this.setState({
         spinner: true
      })
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   webview: {
      flex: 1
   },
   headerStyle: {
      backgroundColor: "white",
      elevation: 0,
      flex: 1,
      fontSize: 18,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: Colors.gray
   },
})
