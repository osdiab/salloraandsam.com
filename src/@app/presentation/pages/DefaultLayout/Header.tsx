import * as React from "react";
import styled from "styled-components/macro";

import { PageSection } from "@app/presentation/utility/mixins/PageSection";
import { normalWeightMixin } from "@app/presentation/theme/text";
import { TextLogo as SvgTextLogo } from "@app/presentation/svg/TextLogo";

const HeaderElem = styled.header`
  ${PageSection}
  margin-bottom: 0;
  border: 0;
`;
const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const HeaderTitle = styled.h1`
  color: ${props => props.theme.palette.primary};
  text-align: center;
  font-size: 2.5rem;
  ${normalWeightMixin}
`;

const HeaderSubtitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  ${normalWeightMixin};
`;

const TextLogo = styled(SvgTextLogo)`
  height: 2.2rem;
  padding: 0.15rem;
`;

export const Header: React.StatelessComponent<{}> = () => (
  <HeaderElem>
    <HeaderRow>
      <HeaderTitle>Sallora & Sam</HeaderTitle>
    </HeaderRow>
    <HeaderRow>
      <TextLogo />
    </HeaderRow>
    <HeaderRow>
      <HeaderSubtitle>pastry and catering</HeaderSubtitle>
    </HeaderRow>
  </HeaderElem>
);
