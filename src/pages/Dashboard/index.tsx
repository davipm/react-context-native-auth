import React, { useContext } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import AuthContext from "../../contexts/auth";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});

function Dashboard() {
  const { singOut, user } = useContext(AuthContext);

  function handleSingInOut() {
    singOut();
  }

  return (
    <View style={style.container}>
      <Text style={style.text}>{user?.name}</Text>
      <Button title="Log Out" onPress={handleSingInOut} />
    </View>
  );
}

export default Dashboard;
