import * as React from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components/macro";

import { NotFound } from "@app/presentation/pages/NotFound";
import { Button, ButtonTargetKind } from "@app/presentation/utility/Button";
import { spacingInRem } from "@app/presentation/theme/spacing";

const MenuIframe = styled.iframe`
  width: 100%;
  min-height: 100vh;
`;
const ReturnHomeP = styled.p`
  display: flex;
  justify-content: center;
  margin: ${spacingInRem.m};
`;
export const MenuPage: React.FC = () => {
  const match = useRouteMatch<{ menu: string }>();
  const pdfPath = `/menu/${match.params.menu}.pdf`;
  const [notFound, setNotFound] = React.useState<boolean>();

  React.useEffect(() => {
    let subscribed = true;
    if (notFound !== undefined) {
      return;
    }
    fetch(pdfPath).then(res => {
      if (!subscribed) {
        return;
      }
      setNotFound(res.headers.get("Content-Type") !== "application/pdf");
    });
    return () => {
      subscribed = false;
    };
  }, [notFound, pdfPath]);

  if (notFound === undefined) {
    return <p>Loading...</p>;
  }
  if (notFound) {
    return <NotFound />;
  }

  return (
    <main>
      <MenuIframe title="Menu embed" src={pdfPath} />
      <ReturnHomeP>
        <Button
          onClick={{ kind: ButtonTargetKind.LINK, action: { href: "/" } }}
        >
          Return Home
        </Button>
      </ReturnHomeP>
    </main>
  );
};
