import * as React from "react";
import styled from "styled-components/macro";
import { useLocation } from "react-router-dom";

import { spacingInRem } from "@app/presentation/theme/spacing";
import { boldWeightMixin } from "@app/presentation/theme/text";
import {
  Button,
  ButtonRole,
  ButtonTargetKind
} from "@app/presentation/utility/Button";

const AlertSection = styled.section`
  background: #eee999;
  padding: ${spacingInRem.m};
  @media (min-width: ${props => props.theme.mediaQueries.sizes.tablet}) {
    padding: ${spacingInRem.m};
  }
`;
const AlertSectionContent = styled.section`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  b {
    ${boldWeightMixin};
  }
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacingInRem.m};
  }
`;

export const Header: React.FC = () => {
  const location = useLocation();
  const showMenuButton = !location.pathname.includes("/menu/");
  return (
    <React.Fragment>
      <AlertSection style={{ paddingBottom: 0 }}>
        <AlertSectionContent>
          <p>
            Due to coronavirus,{" "}
            <b>we are currently open for takeout and delivery.</b> Once it is
            safe to do so, we will re-open for dine in service.
          </p>
        </AlertSectionContent>
      </AlertSection>
      <AlertSection style={{ position: "sticky", top: "0" }}>
        <AlertSectionContent>
          {showMenuButton && (
            <Button
              role={ButtonRole.PRIMARY}
              onClick={{
                kind: ButtonTargetKind.LINK,
                action: { href: "/menu/main.pdf", forceExternal: true }
              }}
            >
              Takeout &amp; Delivery Menu
            </Button>
          )}
          <h6>
            Call us at <b>(708) 581-4239</b> to place your order!
          </h6>
          <p>We&rsquo;re open everyday from 2pm–11pm.</p>
        </AlertSectionContent>
      </AlertSection>
    </React.Fragment>
  );
};
