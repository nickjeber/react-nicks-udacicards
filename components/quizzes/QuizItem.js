import React, { Component } from "react";
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


class QuizItem extends Component {
	state = {
		index: 0,
		score: 0
	}
	render(){
		const {deck} = this.props
		const {index} = this.state
		return (
			<View style={styles.deck}>
				<Text style={styles.question}>
					{deck.questions[index].question}
				</Text>
				<Text style={styles.deckCount}>
					{deck.questions.length - index+1} questions left
				</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity 
						style={[styles.button, styles.correctButton]}
					>
						<Text style={styles.buttonText}>
							Correct
						</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={[styles.button, styles.incorrectButton]}
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