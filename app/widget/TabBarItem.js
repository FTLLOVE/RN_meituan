import React, {PureComponent} from 'react'
import {Image} from 'react-native'
import PropTypes from 'prop-types'

class TabBarItem extends PureComponent {

	static propTypes = {
		focused: PropTypes.any.isRequired,
		normalImage: PropTypes.any.isRequired,
		selectedImage: PropTypes.any.isRequired,
		tintColor: PropTypes.any
	}

	render() {
		let {normalImage, selectedImage, tintColor, focused} = this.props
		return (
			<Image
				source={focused ? selectedImage : normalImage}
				style={{height: 25, width: 25, tintColor: tintColor}}
			/>
		)
	}
}


export default TabBarItem