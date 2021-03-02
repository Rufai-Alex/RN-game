import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGame = (props) => {
  const [entervallue, setentervallue] = useState("");
  const [confirmed, setconfirmed] = useState(false);
  const [seleNumber, setSeleNumber] = useState();
  const numberInputHandler = (inputText) => {
    setentervallue(inputText.replace(/[^0-9]/g), "");
  };
  const resetInput = () => {
    setentervallue("");
    setconfirmed(false);
  };
  const confirmInput = () => {
    const choosenNumber = parseInt(entervallue);
    if (isNaN(choosenNumber) || choosenNumber > 99 || choosenNumber < 0) {
      Alert.alert(
        "Invalid number!",
        "Number has to be number between 1 and 99.",
        [{ text: "yap", style: "default", onPress: resetInput }]
      );
      return;
    }
    setconfirmed(true);
    setentervallue("");
    setSeleNumber(choosenNumber);
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        {" "}
        <Text>the choosen Number is {seleNumber}</Text>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Selact a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={entervallue}
          />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="Reset"
              onPress={resetInput}
              color={Colors.accent}
            />
            <Button
              style={styles.button}
              title="Confirm"
              onPress={confirmInput}
              color={Colors.primary}
            />
          </View>
        </Card>
        <View>{confirmedOutput}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
  },
});
