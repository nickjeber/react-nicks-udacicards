import React, { Component } from "react";
import { connect } from 'react-redux';
import { receiveDecks } from '../../actions/decks';
import { AppLoading} from 'expo'
import DeckItem from './DeckItem';
import { fetchDecks } from "../../utils/api";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Animated } from 'react-native';

class DeckList extends Component {

	state = {
		ready: false,
		opacityValue: new Animated.Value(0)
	}

	componentDidMount() {
		const { dispatch } = this.props
		fetchDecks()
		.then((decks) => dispatch(receiveDecks(decks)))
		.then(() => this.setState(() => ({ready: true})))

		Animated.timing(this.state.opacityValue, {
	      toValue: 1,
	      duration: 1500
	    }).start()
	}

	handleDeckNavigation = title => {
		this.props.navigation.navigate("DeckItem", {
			deckTitle: title
		})
	}

	render(){
		const { decks } = this.props
		const { opacityValue } = this.state

		if (!this.state.ready){
			return <AppLoading />
		}

		return (
			<View>
				<Text style={styles.title}>Decks</Text>
				<FlatList
				data={decks}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => this.handleDeckNavigation(item.title)}>
						<Animated.View style={[styles.deck, {opacity: opacityValue}]}>
							<Text style={styles.deckTitle}>
								{item.title}
							</Text>
							<Text style={styles.deckCount}>
								 {item.questions.length} cards
							</Text>
						</Animated.View>
					</TouchableOpacity>
				)}
				keyExtractor={item => item.title}
				/>
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
	deckTitle: {
		fontSize: 32,
		color: '#011627',
		fontWeight: '500'
	},
	deckCount: {
		fontSize: 16,
		color: '#999'
	}
})

function mapStateToProps (state) {
  const decks = Object.values(state.decks)
  return {
  	decks
  }
}

export default connect(mapStateToProps)(DeckList);