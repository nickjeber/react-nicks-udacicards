import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator, createDrawerNavigator } from 'react-navigation';
import { FontAwesome,
		 MaterialIcons, 
		 MaterialCommunityIcons, 
		 Entypo } from '@expo/vector-icons'
import DeckList from '../decks/DeckList';
import DeckNew from '../decks/DeckNew';
import { white, yellow, base } from '../../utils/colors';

const styles = StyleSheet.create({
	navbar: {
		backgroundColor: base,
		height: 90,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 20,
		paddingLeft: 20,
		paddingTop: 40,
		paddingBottom: 20,
	},
	title: {
		color: white,
		fontSize: 20,
	},
	icon: {
		color: white,
	},

})

const Tabs = createMaterialTopTabNavigator({
  Decks: {
    screen: DeckList,
  },
  }, 
  {
    navigationOptions: {
      header: null
  },
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: white,
    },
    activeTintColor: yellow,
    style: {
      backgroundColor: base,
      height: 56,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const Drawer = createDrawerNavigator({
  Home: {
    screen: DeckList
  },
  New: {
    screen: DeckNew,
  }
});

class Navbar extends Component{
  handleNewDeckNavigation = () => {
	this.props.navigation.navigate("DeckNew")
  }
  render(){
	  return (
	  	<View style={{flex: 1}}>
		    <View style={styles.navbar}>
		    	<MaterialCommunityIcons
		              name='menu'
		              style={styles.icon, {opacity: 0}}
		              size={32}
		            />
		    	<Text style={styles.title}>
		    		<MaterialCommunityIcons
		              name='flash'
		              style={styles.icon}
		              size={18}
		            />
			      Flashcards
			      <MaterialCommunityIcons
		              name='flash'
		              style={styles.icon}
		              size={18}
		            />
			    </Text>
			    <TouchableOpacity onPress={() => this.handleNewDeckNavigation()}>
				    <Entypo
				    	name='new-message'
				    	style={styles.icon}
				    	size={25}
			    	/>
		    	</TouchableOpacity>
		    </View>
		    <Tabs navigation={this.props.navigation}/>
	    </View>
	  )
	}
}

Navbar.router = Tabs.router;

export default connect()(Navbar)
