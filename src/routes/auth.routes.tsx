import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Singin from "../pages/Singin";

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SingIn" component={Singin} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
