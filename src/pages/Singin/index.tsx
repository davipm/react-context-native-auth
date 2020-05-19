import React, { useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import AuthContext from "../../contexts/auth";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

function Singin() {
  const { singIn } = useContext(AuthContext);

  function handleSingIn() {
    singIn();
  }

  return (
    <View style={style.container}>
      <Button title="Sing in" onPress={handleSingIn} />
    </View>
  );
}

export default Singin;
