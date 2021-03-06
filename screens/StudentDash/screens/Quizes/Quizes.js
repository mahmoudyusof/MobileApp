import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";
import QuizzCard from "./components/QuizzCard";

import Submit from "../../../../shared/Submit";
import Input from "../../../../shared/Input";
import axios from "axios";
// import { Button } from "react-native-paper";

export default ({ title, subtitle, handleClick, assID, navigation }) => {
  const [Title, setTitle] = useState("");

  const showModal = () => setVisible(true);

  useEffect(() => {}, []);

  function handleSubmit() {
    console.log("Submit");
  }
  function handleNavigate(assTitle, assId) {
    navigation.navigate("Quizz screen", { assId, assTitle });
  }
  return (
    <ScrollView style={styles.root}>
      <QuizzCard
        title="Quiz 1"
        subtitle="hello world"
        quizzId="23456"
        handleClick={handleNavigate}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
