import * as React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import loadable from "loadable-components";

import { BlogPost } from "@app/presentation/pages/BlogPost";
import { HomePage } from "@app/presentation/pages/HomePage";
import { NotFound } from "@app/presentation/pages/NotFound";
import { DefaultLayoutRoute } from "@app/Router/DefaultLayoutRoute";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <DefaultLayoutRoute exact={true} path="/" component={HomePage} />
      <DefaultLayoutRoute path="/blog/:blogPostId" component={BlogPost} />
      <DefaultLayoutRoute
        path="/components"
        component={loadable(() =>
          import("@app/presentation/pages/ComponentGallery")
        )}
      />
      <DefaultLayoutRoute component={NotFound} />
    </Switch>
  </BrowserRouter>
);
