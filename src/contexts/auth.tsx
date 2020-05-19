import React, { createContext, useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import * as auth from "../services/auth";
//import api from "../services/api";

interface User {
  name?: string;
  email?: string;
}

interface AuthContextData {
  singned: boolean;
  token: string;
  user: User | null;
  loading: boolean;
  singIn(): Promise<void>;
  singOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@RNAauthnative:user");
      const storageToken = await AsyncStorage.getItem("@RNAauthnative:token");

      if (storageToken && storageUser) {
        //api.defaults.headers.Authorization = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function singIn() {
    const response = await auth.singIn();

    setUser(response.user);
    //api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    await AsyncStorage.setItem(
      "@RNAauthnative:user",
      JSON.stringify(response.user)
    );
    await AsyncStorage.setItem("@RNAauthnative:token", response.token);
  }

  function singOut() {
    AsyncStorage.clear().then(() => setUser(null));
  }

  return (
    <AuthContext.Provider
      value={{ singned: !!user, token: "", user, loading, singIn, singOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
