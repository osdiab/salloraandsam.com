import * as React from "react";
import styled from "styled-components/macro";

import { spacingInRem } from "@app/presentation/theme/spacing";
import { boldWeightMixin } from "@app/presentation/theme/text";

const AlertSection = styled.section`
  background: #eee999;
  padding: ${spacingInRem.m};
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
  return (
    <React.Fragment>
      <AlertSection>
        <AlertSectionContent>
          <p>
            Our store is now open for dine-in service! We are looking forward to
            serve you.
          </p>
        </AlertSectionContent>
      </AlertSection>
    </React.Fragment>
  );
};
