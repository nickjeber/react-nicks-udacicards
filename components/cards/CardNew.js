import React, { Component } from "react";
import { connect } from 'react-redux';
import { StyleSheet, Text, 
		 View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { addCard } from '../../actions/decks';
import { saveCard } from "../../utils/api";
import { globalStyles } from '../../utils/styles';

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
			<KeyboardAvoidingView
				behavior="padding"
				style={{paddingBottom: 100}}
			>
				<Text style={globalStyles.title}>
					New Card
				</Text>
				<View style={globalStyles.deck}>
					<TextInput 
						style={globalStyles.input}
						underlineColorAndroid="transparent" 
						onChangeText={question => this.setState(() => ({ question }))}
						value={this.state.question}
						placeholder="Question Goes Here"
					/>
					<TextInput 
						style={globalStyles.input}
						underlineColorAndroid="transparent" 
						onChangeText={answer => this.setState(() => ({ answer }))}
						value={this.state.answer}
						placeholder="Answer Goes Here"
					/>
					<TouchableOpacity 
						style={[globalStyles.button, globalStyles.submitButton]}
						disabled={this.state.question.length > 0 && this.state.answer.length
								  ? false : true}
						onPress={this.handleSubmit}
					>
						<Text style={globalStyles.submitButtonText}>
							Submit
						</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		)
	}
}

function mapStateToProps(state, { navigation }){
	const deck = navigation.state.params.deckTitle;
	return {
		deck: state.decks[deck]
	}
}

export default connect(mapStateToProps)(CardNew);