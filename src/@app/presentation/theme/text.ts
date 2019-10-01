import { css } from "styled-components/macro";

export const text = {
  fontFamily: "'EB Garamond', serif",
  size: {
    paragraph: "1.2rem"
  }
};

const TextBlockStyle = css`
  :not(:last-child) {
    margin-bottom: 1.2rem;
  }
`;

const TextStyle = css`
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const normalWeightMixin = css`
  font-weight: 400;
`;

export const boldWeightMixin = css`
  font-weight: 600;
`;

const headingStyles = css`
  h1 {
    font-size: 5rem;
    @media (max-width: ${props => props.theme.mediaQueries.sizes.phoneLarge}) {
      font-size: 3.5rem;
    }

    ${boldWeightMixin}
  }

  h2 {
    font-size: 3.5rem;
    @media (max-width: ${props => props.theme.mediaQueries.sizes.phoneLarge}) {
      font-size: 2.5rem;
    }
    ${boldWeightMixin};
  }

  h3 {
    font-size: 2.5rem;
    @media (max-width: ${props => props.theme.mediaQueries.sizes.phoneLarge}) {
      font-size: 2rem;
    }
    ${boldWeightMixin};
  }

  h4 {
    font-size: 2rem;
    @media (max-width: ${props => props.theme.mediaQueries.sizes.phoneLarge}) {
      font-size: 1.6rem;
    }
    ${boldWeightMixin};
  }

  h5 {
    font-size: 1.4rem;
    ${boldWeightMixin};
  }

  h6 {
    font-size: 1.4rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${TextBlockStyle}
  }
`;

export const globalTextStyles = css`
  p {
    ${TextBlockStyle}
    ${TextStyle}
  }
  ${headingStyles}
`;
