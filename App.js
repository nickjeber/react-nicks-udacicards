import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Navbar from './components/navigation/Navbar'
import DeckList from './components/decks/DeckList';
import DeckItem from './components/decks/DeckItem';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

const Tabs = createMaterialTopTabNavigator({
  Decks: {
    screen: DeckList,
  },
  Quizzes: {
    screen: DeckList,
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: '#fff',
    },
    activeTintColor: '#FF9F1C',
    style: {
      backgroundColor: '#011627',
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

const StackNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    headerMode: "none",
    header: null,
    navigationOptions: {
      header: null
    }
  },
  DeckList: {
    screen: DeckList
  },
  DeckItem: {
    screen: DeckItem,
    navigationOptions: {
      title: "Back",
      headerStyle: {
        marginTop: -20
      },
    },
  },
})

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Navbar />
          <StackNavigator />
        </View>
      </Provider>
    );
  }
}
