import * as React from "react";
import styled from "styled-components/macro";

import { PageSection } from "@app/presentation/utility/mixins/PageSection";
import { ReactComponent as FullLogoOrig } from "@app/assets/images/fullLogo.svg";
import { spacingInRem } from "@app/presentation/theme/spacing";
import { boldWeightMixin } from "@app/presentation/theme/text";

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
`;
const HeaderElem = styled.header`
  margin-bottom: 0;
  border: 0;

  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacingInRem.m};
  }
`;

const FullLogo = styled(FullLogoOrig)`
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: ${props => props.theme.spacingInRem.m};
  padding-top: 0;
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
      </AlertSectionContent>
    </AlertSection>
    <FullLogo />
  </HeaderElem>
);
