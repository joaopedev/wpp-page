import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import AppRoutes from "./routes/routes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppRoutes />
  </ChakraProvider>
);
