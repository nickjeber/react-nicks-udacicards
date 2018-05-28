import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions/decks';

export default function decks (state={}, action){
	switch(action.type){
		case RECEIVE_DECKS:
			return {
				...state,
				...action.decks
			}
		case ADD_DECK:
			return {
				...state,
				[action.deck.title]: action.deck
			}
		case ADD_CARD:
			return {
				...state,
				[action.deck.title]: {
					...state[action.deck.title],
					questions: state[action.deck.title].questions.concat([action.card])
				}
			}
		default:
			return state
	}
}