import * as React from "react";
import { Route, RouteProps } from "react-router";

import { DefaultLayout } from "@app/presentation/pages/DefaultLayout";

function createRender(
  Component: RouteProps["component"]
): RouteProps["render"] {
  return function renderLayout(matchProps) {
    return (
      <DefaultLayout>
        {Component && <Component {...matchProps} />}
      </DefaultLayout>
    );
  };
}
export const DefaultLayoutRoute: React.FC<RouteProps> = ({
  component,
  ...rest
}) => {
  return <Route {...rest} render={createRender(component)} />;
};
