import React, { useState } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, spacing } from "../../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on?"
          style={styles.textInput}
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton
            size={50}
            title="+"
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    justifyContent: "flex-start",
    padding: spacing.lg,
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.lg,
  },
  button: {
    justifyContent: "center",
  },
});
