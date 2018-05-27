import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

class DeckItem extends Component {

	render(){
		return (
			<View style={styles.deck}>
				<Text style={styles.deckTitle}>
					Deck Item Title
				</Text>
				<Text style={styles.deckCount}>
					10 cards
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	deck: {
		backgroundColor: '#fff',
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center',
		width: '95%',
		padding: 20,
		marginTop: 15,
		marginBottom: 15,
		marginLeft: 'auto',
		marginRight: 'auto',
		shadowRadius: 3,
		shadowOpacity: 0.8, 
		shadowColor: 'rgba(0, 0, 0, 0.24)',
		shadowOffset: {
	        width: 0,
	        height: 3
	    },
	},
	deckTitle: {
		fontSize: 32,
		color: '#011627'
	},
	deckCount: {
		fontSize: 16,
		color: '#999'
	}
})

export default DeckItem;