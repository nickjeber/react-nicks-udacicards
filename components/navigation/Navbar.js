import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { DrawerNavigator } from 'react-navigation';
import { FontAwesome,
		 MaterialIcons, 
		 MaterialCommunityIcons, 
		 Entypo } from '@expo/vector-icons'

const styles = StyleSheet.create({
	navbar: {
		backgroundColor: '#011627',
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
		color: '#ffffff',
		fontSize: 20,
	},
	icon: {
		color: '#fff',
	},

})

export default function Navbar(){
  return (
    <View style={styles.navbar}>
    	<MaterialCommunityIcons
              name='menu'
              style={styles.icon}
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
	    <Entypo
	    	name='new-message'
	    	style={styles.icon}
	    	size={25}
    	/>
    </View>
  )
}