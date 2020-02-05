import * as React from "react";
import { hydrate, render } from "react-dom";

import { App } from "@app/App";

async function startApp() {
  const rootElement = document.getElementById("reactRoot");

  if (!rootElement) {
    alert("Something went wrong, please try again soon");
    return;
  }
  if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
  } else {
    render(<App />, rootElement);
  }
}

startApp();
