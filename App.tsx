import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "./src/screens/Cart"; // ajuste o caminho conforme necessário
import Pay from "./src/screens/Payment"; // ajuste o caminho conforme necessário
import { UserProvider } from "./src/contexts/UserContext";
import { CartContextProvider } from "./src/contexts/CartContext";
import Routes from "./src/routes";

export type RootStackParamList = {
  Cart: undefined;
  Payment: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

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
