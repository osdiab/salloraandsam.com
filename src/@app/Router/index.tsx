import * as React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import isRelativeUrl from "is-relative-url";

import { HomePage } from "@app/presentation/pages/HomePage";
import { NotFound } from "@app/presentation/pages/NotFound";
import { DefaultLayoutRoute } from "@app/Router/DefaultLayoutRoute";
import { MenuPage } from "@app/presentation/pages/Menu";

const Redirector = () => {
  const location = useLocation();
  const path = new URLSearchParams(location.search.substr(1)).get("to");
  if (!path || !isRelativeUrl(path)) {
    return <Redirect to="/" />;
  }
  return <Redirect to={path} />;
};

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <DefaultLayoutRoute exact={true} path="/" component={HomePage} />
      <DefaultLayoutRoute exact={true} path="/menu" component={MenuPage} />
      <Route exact={true} path="/r">
        <Redirector />
      </Route>
      <DefaultLayoutRoute component={NotFound} />
    </Switch>
  </BrowserRouter>
);
