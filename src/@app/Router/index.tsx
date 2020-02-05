import * as React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { HomePage } from "@app/presentation/pages/HomePage";
import { NotFound } from "@app/presentation/pages/NotFound";
import { DefaultLayoutRoute } from "@app/Router/DefaultLayoutRoute";
import { MenuPage } from "@app/presentation/pages/Menu";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <DefaultLayoutRoute exact={true} path="/" component={HomePage} />
      <DefaultLayoutRoute exact={true} path="/menu" component={MenuPage} />
      <DefaultLayoutRoute component={NotFound} />
    </Switch>
  </BrowserRouter>
);
