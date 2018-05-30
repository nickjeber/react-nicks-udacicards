import React, { Component } from "react";
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


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
			return (
				<View style={styles.deck}>
					<Text style={styles.question}>
						Score: {this.calculateScore()}%
					</Text>
					<Text style={styles.deckCount}>
						Congrats! You completed the quiz!
					</Text>
					<View style={styles.buttonContainer}>
						<TouchableOpacity 
							style={[styles.button, styles.resetButton]}
							onPress={this.resetQuiz}
						>
							<Text style={styles.resetButtonText}>
								Reset
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={[styles.button, styles.correctButton]}
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
			<View style={styles.deck}>
				<Text style={styles.question}>
					{this.state.flipped? deck.questions[index].answer : deck.questions[index].question}
				</Text>
				<Text style={styles.deckCount}>
					{deck.questions.length - (index+1)} questions left
				</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={[styles.button, styles.flipButton]}
						onPress={this.flipCard}
					>
						<Text style={styles.buttonText}>
							{this.state.flipped ? "Show Question" : "Show Answer"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={[styles.button, styles.correctButton]}
						onPress={() => this.handleAnswer(true)}
					>
						<Text style={styles.buttonText}>
							Correct
						</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={[styles.button, styles.incorrectButton]}
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
		color: '#999'
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
	input: {
	    margin: 25,
	    height: 80,
	    backgroundColor: "#fff",
	    width: 200,
	    borderBottomWidth: 1,
	    borderColor: "#ddd",
	    fontSize: 24,
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
	buttonContainer: {
		marginTop: 60
	},
	incorrectButton: {
		backgroundColor: '#E71D36',
		borderColor: '#E71D36',
		borderWidth: 5,
	},
	correctButton: {
		backgroundColor: '#2EC4B6',
		borderColor: '#2EC4B6',
		borderWidth: 5,
	},
	resetButton: {
		backgroundColor: 'transparent',
		borderColor: '#FF9F1C',
		borderWidth: 5,
	},
	resetButtonText: {
		color: '#FF9F1C',
		fontSize: 20,
		fontWeight: '500',
	},
	flipButton: {
		backgroundColor: "#011627",
		borderColor: '#011627',
		borderWidth: 5,
	},
	buttonText: {
		color: '#fff',
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