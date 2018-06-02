import React, { Component } from "react";
import { connect } from 'react-redux';
import { StyleSheet, Text, View, 
		 TextInput, TouchableOpacity } from 'react-native';
import { clearLocalNotification, setLocalNotification } from "../../utils/helpers"
import { globalStyles } from '../../utils/styles';
import { green, white, yellow, red, base, border } from '../../utils/colors';

class QuizItem extends Component {
	state = {
		flipped: false,
		index: 0,
		score: 0,
	}

	resetQuiz = () => {
		this.setState(()=> ({
			flipped: false,
			index: 0,
			score: 0
		}))
	}

	calculateScore = () => {
		const { score } = this.state
		const { deck } = this.props

		return Math.round(score/deck.questions.length * 100)
		
	}

	flipCard = () => {
		this.setState((currentState)=> ({
			flipped: !currentState.flipped,
		}))
	}

	handleAnswer = answer => {
		this.setState((currentState)=> ({
			score: answer ? currentState.score + 1 : currentState.score,
			index: currentState.index + 1,
			flipped: false,
		}))
	}

	render(){
		const {deck, navigation} = this.props
		const {index} = this.state

		if (index >= deck.questions.length ) {
			
			clearLocalNotification().then(setLocalNotification)

			return (
				<View style={globalStyles.deck}>
					<Text style={styles.question}>
						Score: {this.calculateScore()}%
					</Text>
					<Text style={globalStyles.deckCount}>
						Congrats! You completed the quiz!
					</Text>
					<View style={styles.buttonContainer}>
						<TouchableOpacity 
							style={[globalStyles.button, styles.resetButton]}
							onPress={this.resetQuiz}
						>
							<Text style={styles.resetButtonText}>
								Reset
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={[globalStyles.button, styles.correctButton]}
							onPress={() => navigation.pop()}
						>
							<Text style={styles.buttonText}>
								Go Back
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			)
		}

		return (
			<View style={globalStyles.deck}>
				<Text style={styles.question}>
					{this.state.flipped? deck.questions[index].answer : deck.questions[index].question}
				</Text>
				<Text style={globalStyles.deckCount}>
					{deck.questions.length - (index+1)} questions left
				</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={[globalStyles.button, styles.flipButton]}
						onPress={this.flipCard}
					>
						<Text style={styles.buttonText}>
							{this.state.flipped ? "Show Question" : "Show Answer"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={[globalStyles.button, styles.correctButton]}
						onPress={() => this.handleAnswer(true)}
					>
						<Text style={styles.buttonText}>
							Correct
						</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={[globalStyles.button, styles.incorrectButton]}
						onPress={() => this.handleAnswer(false)}
					>
						<Text style={styles.buttonText}>
							Incorrect
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	question: {
		fontSize: 42,
		fontWeight: '500',
		textAlign: 'center',
	},
	questionCount: {
		fontSize: 22,
		color: border
	},
	buttonContainer: {
		marginTop: 60
	},
	incorrectButton: {
		backgroundColor: red,
		borderColor: red,
		borderWidth: 5,
	},
	correctButton: {
		backgroundColor: green,
		borderColor: green,
		borderWidth: 5,
	},
	resetButton: {
		backgroundColor: 'transparent',
		borderColor: yellow,
		borderWidth: 5,
	},
	resetButtonText: {
		color: yellow,
		fontSize: 20,
		fontWeight: '500',
	},
	flipButton: {
		backgroundColor: base,
		borderColor: base,
		borderWidth: 5,
	},
	buttonText: {
		color: white,
		fontSize: 20,
		fontWeight: '500'
	},
})

function mapStateToProps(state, { navigation }){
	const deck = navigation.state.params.deckTitle;
	return {
		deck: state.decks[deck]
	}
}

export default connect(mapStateToProps)(QuizItem);