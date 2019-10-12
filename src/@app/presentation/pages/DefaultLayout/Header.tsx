import * as React from "react";
import styled from "styled-components/macro";

import { PageSection } from "@app/presentation/utility/mixins/PageSection";
import { TextLogoArabic as SvgTextLogoArabic } from "@app/presentation/svg/TextLogoArabic";
import { TextLogoEnglish as SvgTextLogoEnglish } from "@app/presentation/svg/TextLogoEnglish";
import { HeaderSubtitle as SvgHeaderSubtitle } from "@app/presentation/svg/HeaderSubtitle";
import { SweetsShopArabic as SvgSweetsShopArabic } from "@app/presentation/svg/SweetsShopArabic";

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

const TextLogoEnglish = styled(SvgTextLogoEnglish)`
  height: 2rem;
  path {
    fill: ${props => props.theme.palette.primary};
  }
`;

const ArabicLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TextLogoArabic = styled(SvgTextLogoArabic)`
  height: 2.4rem;
  path {
    fill: ${props => props.theme.palette.primary};
  }
`;

const SweetsShopArabic = styled(SvgSweetsShopArabic)`
  height: 1.4rem;
  path {
    fill: ${props => props.theme.palette.bodyText};
  }
  margin-bottom: -1rem; /* tuning spacing */
  @media (min-width: ${props => props.theme.mediaQueries.sizes.tablet}) {
    margin-bottom: -0.4rem;
  }
`;
const HeaderSubtitle = styled(SvgHeaderSubtitle)`
  display: none;
  @media (min-width: ${props => props.theme.mediaQueries.sizes.tablet}) {
    display: block;
    height: 1.6rem;
  }
`;

export const Header: React.FC = () => (
  <HeaderElem>
    <TextLogoEnglish />
    <ArabicLogo>
      <TextLogoArabic />
      <SweetsShopArabic />
    </ArabicLogo>
    <HeaderSubtitle />
  </HeaderElem>
);
