import * as React from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components/macro";

import { NotFound } from "@app/presentation/pages/NotFound";
import { Button, ButtonTargetKind } from "@app/presentation/utility/Button";
import { spacingInRem } from "@app/presentation/theme/spacing";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
`;

const MenuIframe = styled.iframe`
  flex-grow: 1;
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
      <MenuContainer>
        <MenuIframe title="Menu embed" src={pdfPath} />
      </MenuContainer>
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
