import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProvider } from "./src/contexts/UserContext";
import { CartContextProvider } from "./src/contexts/CartContext";
import Routes from "./src/routes";

export type RootStackParamList = {
  Cart: undefined;
  Payment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <RootSiblingParent>
      <UserProvider>
        <CartContextProvider>
        <Routes />
        </CartContextProvider>
      </UserProvider>
    </RootSiblingParent>
  );
}
