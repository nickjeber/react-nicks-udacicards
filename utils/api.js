import { AsyncStorage } from "react-native";

export const FLASHCARDS_STORAGE_KEY = "Flashcards:decks";

function setData() {
  const decks = {
    Math: {
      title: "Math",
      questions: [
        {
          question: "1+1",
          answer: "2"
        },
        {
          question: "2+2",
          answer: "4"
        }
      ]
    },
    Science: {
      title: "Science",
      questions: [
        {
          question: "What does a cow eat?",
          answer: "Grass"
        }
      ]
    }
  };
  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks));
  return decks;
}

export const fetchDecks = () =>
  AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(decks =>
    decks ? JSON.parse(decks) : setData()
  );

export const saveDeck = deck =>
  AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({ [deck.title]: deck })
  );

export const saveCard = (deck, card) =>
  fetchDecks().then(decks => {
    const fetchedDecks = {
      ...decks,
      [deck.title]: {
        ...decks[deck.title],
        questions: decks[deck.title].questions.concat([card])
      }
    };
    return AsyncStorage.setItem(
      FLASHCARDS_STORAGE_KEY,
      JSON.stringify(fetchedDecks)
    );
  });
