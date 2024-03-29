import React from "react";
import { ActivityIndicator, View } from "react-native";

import { useAuth } from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

function Routes() {
  const { singned, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return singned ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
