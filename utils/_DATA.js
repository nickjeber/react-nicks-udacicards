import { AsyncStorage } from "react-native";

export const FLASHCARDS_STORAGE_KEY = "Flashcards:decks";

export function setData() {
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
          question: "What do cows eat?",
          answer: "Grass"
        }
      ]
    }
  };
  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks));
  return decks;
}
