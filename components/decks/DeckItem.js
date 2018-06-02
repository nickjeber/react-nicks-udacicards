import React, { Component } from "react";
import { connect } from 'react-redux';
import { globalStyles } from '../../utils/styles';
import { green, white, yellow } from '../../utils/colors';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class DeckItem extends Component {
	handleNewCardNavigation = title => {
		this.props.navigation.navigate("CardNew", {
			deckTitle: title
		})
	}
	handleStartQuizNavigation = title => {
		this.props.navigation.navigate("QuizItem", {
			deckTitle: title
		})
	}
	render(){
		const {deck} = this.props
		return (
			<View style={globalStyles.deck}>
				<Text style={globalStyles.deckTitle}>
					{deck.title}
				</Text>
				<Text style={globalStyles.deckCount}>
					 {deck.questions.length} Cards
				</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity 
						style={[globalStyles.button, styles.addButton]}
						onPress={() => this.handleNewCardNavigation(deck.title)}
						>
						<Text style={styles.addButtonText}>
							Add Card
						</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={[globalStyles.button, styles.startButton]}
						onPress={() => this.handleStartQuizNavigation(deck.title)}
						>
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
	buttonContainer: {
		marginTop: 60
	},
	addButton: {
		backgroundColor: 'transparent',
		borderColor: yellow,
		borderWidth: 5,
	},
	addButtonText: {
		color: yellow,
		fontSize: 20,
		fontWeight: '500'
	},
	startButton: {
		backgroundColor: green,
		borderColor: green,
		borderWidth: 5,
	},
	startButtonText: {
		color: white,
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