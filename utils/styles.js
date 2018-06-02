import { StyleSheet } from 'react-native';
import {white, base, grey, border, green} from './colors';

export const globalStyles = StyleSheet.create({ 
	title: {
		fontSize: 38,
		fontWeight: "700",
		marginLeft: '5%',
		marginTop: 15,
		marginBottom: 15
	},
	deck: {
		backgroundColor: white,
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
		color: base,
		fontWeight: '500'
	},
	deckCount: {
		fontSize: 16,
		color: grey
	},
	input: {
	    margin: 25,
	    height: 80,
	    backgroundColor: white,
	    width: 200,
	    borderBottomWidth: 1,
	    borderColor: border,
	    fontSize: 20,
	    textAlign: 'center',
	},
	button: {
		width: 150,
		paddingTop: 10,
		paddingBottom: 10,
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center'
	},
	submitButton: {
		backgroundColor: green,
		borderColor: green,
		borderWidth: 5,
	},
	submitButtonText: {
		color: white,
		fontSize: 16,
		fontWeight: '500'
	},
})