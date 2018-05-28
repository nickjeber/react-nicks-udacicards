import React, { Component } from "react";
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { addDeck } from '../../actions/decks';
import { saveDeck } from "../../utils/api";

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
			<View>
				<Text style={styles.title}>
					New Deck
				</Text>
				<View style={styles.deck}>
					<TextInput 
						style={styles.input}
						underlineColorAndroid="transparent" 
						onChangeText={this.handleChange}
						value={this.state.title}
					/>
					<TouchableOpacity 
						style={[styles.button, styles.submitButton]}
						disabled={this.state.title.length > 1 ? false : true}
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

export default connect()(DeckNew);