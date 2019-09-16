import styled, { css } from "styled-components/macro";
import { TextBlockStyle } from "@app/presentation/utility/mixins/text/TextBlockStyle";
import { Paragraph } from "@app/presentation/utility/Paragraph";

const HeaderMixin = css`
  font-weight: 700;
`;

export const H1 = styled.h1`
  font-size: 5rem;
  @media (max-width: ${props => props.theme.mediaQueries.sizes.phoneLarge}) {
    font-size: 3.5rem;
  }
  ${HeaderMixin};
  ${TextBlockStyle};
`;
export const H2 = styled.h2`
  font-size: 3.5rem;
  @media (max-width: ${props => props.theme.mediaQueries.sizes.phoneLarge}) {
    font-size: 2.5rem;
  }
  ${HeaderMixin};
  ${TextBlockStyle};
`;
export const H3 = styled.h3`
  font-size: 2.5rem;
  @media (max-width: ${props => props.theme.mediaQueries.sizes.phoneLarge}) {
    font-size: 2rem;
  }
  ${HeaderMixin};
  ${TextBlockStyle};
`;
export const H4 = styled(Paragraph)`
  font-size: 2rem;
  @media (max-width: ${props => props.theme.mediaQueries.sizes.phoneLarge}) {
    font-size: 1.6rem;
  }
  ${HeaderMixin};
  ${TextBlockStyle};
`;
export const H5 = styled(Paragraph)`
  font-size: 1.4rem;
  ${HeaderMixin};
  ${TextBlockStyle};
`;
