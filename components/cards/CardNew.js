import React, { Component } from "react";
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { addCard } from '../../actions/decks';
import { saveCard } from "../../utils/api";

class CardNew extends Component {

	state = {
		question: '',
		answer: ''
	}

	handleSubmit = () => {
		const { question, answer } = this.state
		const { dispatch, navigation, deck } = this.props

		const card = {
			question,
			answer
		}

		saveCard(deck, card)
		.then(dispatch(addCard(deck, card)))
		.then(navigation.pop())
	}

	render(){
		return (
			<View>
				<Text style={styles.title}>
					New Card
				</Text>
				<View style={styles.deck}>
					<TextInput 
						style={styles.input}
						underlineColorAndroid="transparent" 
						onChangeText={question => this.setState(() => ({ question }))}
						value={this.state.question}
					/>
					<TextInput 
						style={styles.input}
						underlineColorAndroid="transparent" 
						onChangeText={answer => this.setState(() => ({ answer }))}
						value={this.state.answer}
					/>
					<TouchableOpacity 
						style={[styles.button, styles.submitButton]}
						disabled={this.state.question.length > 0 ? false : true}
						onPress={this.handleSubmit}
					>
						<Text style={styles.submitButtonText}>
							Submit
						</Text>
					</TouchableOpacity>
				</View>
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
		width: 150,
		paddingTop: 5,
		paddingBottom: 5,
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center'
	},
	submitButton: {
		backgroundColor: '#2EC4B6',
		borderColor: '#2EC4B6',
		borderWidth: 5,
	},
	submitButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '500'
	},
})

function mapStateToProps(state, { navigation }){
	const deck = navigation.state.params.deckTitle;
	return {
		deck: state.decks[deck]
	}
}

export default connect(mapStateToProps)(CardNew);