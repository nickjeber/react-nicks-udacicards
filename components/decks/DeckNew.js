import React, { Component } from "react";
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, 
		 TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { addDeck } from '../../actions/decks';
import { saveDeck } from "../../utils/api";
import { globalStyles } from '../../utils/styles';

class DeckNew extends Component {

	state = {
		title: ''
	}

	handleChange = deckTitle => {
		this.setState(() => (
			{title: deckTitle}
		))
	}

	handleSubmit = () => {
		const { title } = this.state
		const { dispatch, navigation } = this.props

		const deck = {
			title,
			questions: []
		}

		saveDeck(deck)
		.then(dispatch(addDeck(deck)))
		.then(navigation.pop())
	}

	render(){
		return (
			<KeyboardAvoidingView
				behavior="padding"
				style={{paddingBottom: 100}}
			>
				<Text style={globalStyles.title}>
					New Deck
				</Text>
				<View style={globalStyles.deck}>
					<TextInput 
						style={globalStyles.input}
						underlineColorAndroid="transparent" 
						onChangeText={this.handleChange}
						value={this.state.title}
						placeholder="Deck Name"
					/>
					<TouchableOpacity 
						style={[globalStyles.button, globalStyles.submitButton]}
						disabled={this.state.title.length > 1 ? false : true}
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

export default connect()(DeckNew);