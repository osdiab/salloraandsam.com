import * as React from "react";
import styled from "styled-components/macro";

import {
  Button,
  ButtonTargetKind,
  ButtonRole
} from "@app/presentation/utility/Button";
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
const ButtonsSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: ${spacingInRem.m};
  > * {
    margin: ${spacingInRem.s}
  }
`;
export const MenuPage: React.FC = () => {
  const pdfPath = `/menu/main.pdf`;

  return (
    <main>
      <ButtonsSection>
        <Button
          onClick={{ kind: ButtonTargetKind.LINK, action: { href: "/" } }}
          role={ButtonRole.TEXT_ONLY}
        >
          Return Home
        </Button>
        <Button
          onClick={{
            kind: ButtonTargetKind.LINK,
            action: {
              href: pdfPath,
              forceExternal: true,
              target: `sallora-menu`
            }
          }}
          role={ButtonRole.PRIMARY}
        >
          Open the menu in a separate tab
        </Button>
      </ButtonsSection>
      <MenuContainer>
        <MenuIframe
          title="Menu embed"
          src={
            process.env.NODE_ENV === "development" ||
            navigator.userAgent === "ReactSnap"
              ? pdfPath
              : `https://drive.google.com/viewerng/viewer?${new URLSearchParams(
                  {
                    url: `${window.location.origin}/${pdfPath}`,
                    pid: "explorer",
                    efh: "false",
                    a: "v",
                    chrome: "false",
                    embedded: "true"
                  }
                ).toString()}`
          }
        />
      </MenuContainer>
    </main>
  );
};
