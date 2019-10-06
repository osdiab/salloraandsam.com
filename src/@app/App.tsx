import * as React from "react";
import { ThemeProvider } from "styled-components/macro";

import { theme } from "@app/presentation/theme";
import { Router } from "@app/Router";

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);
