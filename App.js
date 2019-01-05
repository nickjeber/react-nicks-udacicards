import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import Navbar from "./components/navigation/Navbar";
import DeckList from "./components/decks/DeckList";
import DeckItem from "./components/decks/DeckItem";
import DeckNew from "./components/decks/DeckNew";
import CardNew from "./components/cards/CardNew";
import QuizItem from "./components/quizzes/QuizItem";
import { StyleSheet, Text, View } from "react-native";
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import { setLocalNotification } from "./utils/helpers";

const StackNavigator = createStackNavigator({
  Home: {
    screen: Navbar,
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
      title: "Back"
    }
  },
  DeckNew: {
    screen: DeckNew,
    navigationOptions: {
      title: "Back"
    }
  },
  CardNew: {
    screen: CardNew,
    navigationOptions: {
      title: "Back"
    }
  },
  QuizItem: {
    screen: QuizItem,
    navigationOptions: {
      title: "Back"
    }
  }
});

const store = createStore(reducer);

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StackNavigator />
        </View>
      </Provider>
    );
  }
}
