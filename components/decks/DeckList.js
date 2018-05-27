import React, { Component } from "react";
import DeckItem from './DeckItem';
import { fetchDecks } from "../../utils/api";
import { StyleSheet, Text, View } from 'react-native';

class DeckList extends Component {

	state = {
		decks: []
	}

	componentDidMount() {
		fetchDecks()
		.then((decks) => {
        this.setState({
          decks: decks
        })
      })
	}

	render(){
			return (
				<View>
				<Text>Deck List</Text>
				<DeckItem />
				<DeckItem />
				<DeckItem />
			</View>
			)
	}
}

export default DeckList;