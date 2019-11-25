import * as React from "react";
import styled from "styled-components/macro";

import { PageSection } from "@app/presentation/utility/mixins/PageSection";
import { ReactComponent as FullLogoOrig } from "@app/assets/images/fullLogo.svg";

const HeaderElem = styled.header`
  ${PageSection}
  margin-bottom: 0;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacingInRem.m};
  }
`;

const FullLogo = styled(FullLogoOrig)`
  height: 8rem;
  max-width: 80vw;
`;

export const Header: React.FC = () => (
  <HeaderElem>
    <FullLogo />
  </HeaderElem>
);
