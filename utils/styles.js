import { StyleSheet } from "react-native";
import { white, base, grey, border, green } from "./colors";

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "700",
    marginLeft: "5%",
    marginTop: 15,
    marginBottom: 15
  },
  deck: {
    backgroundColor: white,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    padding: 48,
    marginTop: 24,
    marginBottom: 8,
    marginLeft: "auto",
    marginRight: "auto",
    shadowRadius: 7
  },
  deckTitle: {
    fontSize: 32,
    color: base,
    fontWeight: "500"
  },
  deckCount: {
    fontSize: 16,
    fontStyle: "italic",
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
    textAlign: "center"
  },
  button: {
    width: 250,
    paddingTop: 24,
    paddingBottom: 24,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  submitButton: {
    backgroundColor: green,
    borderColor: green,
    borderWidth: 5
  },
  submitButtonText: {
    color: white,
    fontSize: 16,
    fontWeight: "500"
  }
});
