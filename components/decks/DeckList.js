import React, { Component } from "react";
import { connect } from 'react-redux';
import { receiveDecks } from '../../actions/decks';
import { AppLoading} from 'expo'
import DeckItem from './DeckItem';
import { fetchDecks } from "../../utils/api";
import { globalStyles } from '../../utils/styles';
import { Text, View, FlatList, TouchableOpacity, Animated } from 'react-native';

class DeckList extends Component {

	state = {
		ready: false,
		opacity: new Animated.Value(0),
		width: new Animated.Value(0)
	}

	componentDidMount() {
		const { dispatch } = this.props
		fetchDecks()
		.then((decks) => dispatch(receiveDecks(decks)))
		.then(() => this.setState(() => ({ready: true})))

		Animated.timing(this.state.opacity, {
	      toValue: 1,
	      duration: 1500
	    }).start()
	}

	componentWillUpdate(){
		Animated.spring(this.state.width, {
			toValue: 330, 
			speed: 5
		}).start()
	}

	handleDeckNavigation = title => {

		Animated.timing(this.state.width, {
	      toValue: 0,
	      duration: 250
	    }).start()

		this.props.navigation.navigate("DeckItem", {
			deckTitle: title
		})
	}

	render(){
		const { decks } = this.props
		const { opacity, width } = this.state

		if (!this.state.ready){
			return <AppLoading />
		}

		return (
			<View style={{paddingBottom: 100}}>
				<Text style={globalStyles.title}>Decks</Text>
				<FlatList
				data={decks}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => this.handleDeckNavigation(item.title)}>
						<Animated.View style={[globalStyles.deck, {opacity, width}]}>
							<Text style={globalStyles.deckTitle}>
								{item.title}
							</Text>
							<Text style={globalStyles.deckCount}>
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

function mapStateToProps (state) {
  const decks = Object.values(state.decks)
  return {
  	decks
  }
}

export default connect(mapStateToProps)(DeckList);