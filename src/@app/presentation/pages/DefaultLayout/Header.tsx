import * as React from "react";
import styled from "styled-components/macro";

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
const HeaderElem = styled.header`
  margin-bottom: 0;
  border: 0;

  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacingInRem.m};
  }
`;

export const Header: React.FC = () => (
  <HeaderElem>
    <AlertSection>
      <AlertSectionContent>
        <p>
          Due to coronavirus,{" "}
          <b>we are currently open for takeout and delivery.</b> Once it is safe
          to do so, we will re-open for dine in service.
        </p>
        <Button
          role={ButtonRole.PRIMARY}
          onClick={{
            kind: ButtonTargetKind.LINK,
            action: {
              href: "/menu/takeout.pdf",
              target: "menu",
              forceExternal: true
            }
          }}
        >
          Takeout Menu
        </Button>
        <h6>
          Call us at <b>(708) 581-4239</b> to place your order!
        </h6>
      </AlertSectionContent>
    </AlertSection>
  </HeaderElem>
);
