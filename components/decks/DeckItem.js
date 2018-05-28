import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

class DeckItem extends Component {

	render(){
		const {title, questions} = this.props
		return (
			<View style={styles.deck}>
				<Text style={styles.deckTitle}>
					Deck Item
				</Text>
				<Text style={styles.deckCount}>
					 cards
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 38,
		fontWeight: "700",
		marginLeft: '5%',
		marginTop: 15,
		marginBottom: 15
	},
	deck: {
		backgroundColor: '#fff',
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center',
		width: '90%',
		padding: 20,
		marginTop: 15,
		marginBottom: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
		shadowRadius: 7,
		shadowColor: 'rgba(0, 0, 0, 0.9)',
		shadowOffset: {
	        width: 2,
	        height: 5
	    },
	},
	deckTitle: {
		fontSize: 32,
		color: '#011627',
		fontWeight: '500'
	},
	deckCount: {
		fontSize: 16,
		color: '#999'
	}
})

export default DeckItem;