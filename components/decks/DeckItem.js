import React, { Component } from "react";
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class DeckItem extends Component {

	render(){
		const {deck} = this.props
		return (
			<View style={styles.deck}>
				<Text style={styles.deckTitle}>
					{deck.title}
				</Text>
				<Text style={styles.deckCount}>
					 {deck.questions.length} Cards
				</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={[styles.button, styles.addButton]}>
						<Text style={styles.addButtonText}>
							Add Card
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.button, styles.startButton]}>
						<Text style={styles.startButtonText}>
							Start Quiz
						</Text>
					</TouchableOpacity>
				</View>
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
		fontSize: 42,
		color: '#011627',
		fontWeight: '500'
	},
	deckCount: {
		fontSize: 22,
		color: '#999'
	},
	buttonContainer: {
		marginTop: 60
	},
	button: {
		width: 200,
		paddingTop: 20,
		paddingBottom: 20,
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center'
	},
	addButton: {
		backgroundColor: 'transparent',
		borderColor: '#FF9F1C',
		borderWidth: 5,
	},
	addButtonText: {
		color: '#FF9F1C',
		fontSize: 20,
		fontWeight: '500'
	},
	startButton: {
		backgroundColor: '#2EC4B6',
		borderColor: '#2EC4B6',
		borderWidth: 5,
	},
	startButtonText: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '500'
	},
})

function mapStateToProps(state, {navigation} ){
	const deck = navigation.state.params.deckTitle;
	return {
		deck: state.decks[deck]
	}
}

export default connect(mapStateToProps)(DeckItem);