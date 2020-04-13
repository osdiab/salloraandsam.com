import isRelativeUrl from "is-relative-url";
import * as React from "react";
import {
  HashLink as RouterLink,
  HashLinkProps as RouterLinkProps
} from "react-router-hash-link";
import * as smoothscroll from "smoothscroll-polyfill";
import styled from "styled-components/macro";

import { logger } from "@app/utility/logger";

smoothscroll.polyfill();

export enum LinkAppearance {
  HYPERLINK = "HYPERLINK",
  UNSTYLED = "UNSTYLED"
}

export interface LinkProps {
  className?: string;
  href: string;
  appearance?: LinkAppearance;
  forceExternal?: boolean;
}

const HyperlinkA = styled.a`
  color: ${props => props.theme.palette.primary};
  font-weight: 700;
  transition: color 0.1s ease-in;

  :hover {
    color: ${props => props.theme.palette.primary};
  }
`;
const UnstyledA = styled.a`
  text-decoration: none;
  color: inherit;
`;
const HyperlinkRouterLink = HyperlinkA.withComponent(RouterLink);
const UnstyledRouterLink = UnstyledA.withComponent(RouterLink);

function logInvalidAppearance(appearance: never) {
  logger.error(
    `Invalid link appearance: '${appearance}'. Rendering as hyperlink.`
  );
}

const AbsoluteLink: React.FC<LinkProps> = ({ appearance, ...rest }) => {
  switch (appearance) {
    default:
      logInvalidAppearance(appearance);
    // fallthrough
    case undefined: // fallthrough
    case LinkAppearance.HYPERLINK:
      return <HyperlinkA {...rest} />;
    case LinkAppearance.UNSTYLED:
      return <UnstyledA {...rest} />;
  }
};

const RelativeLink: React.FC<LinkProps> = ({ href, appearance, ...rest }) => {
  const linkProps: RouterLinkProps = {
    ...rest,
    smooth: true,
    to: href
  };
  switch (appearance) {
    default:
      logInvalidAppearance(appearance);
    // fallthrough
    case undefined: // fallthrough
    case LinkAppearance.HYPERLINK:
      return <HyperlinkRouterLink {...linkProps} />;
    case LinkAppearance.UNSTYLED:
      return <UnstyledRouterLink {...linkProps} />;
  }
};

/**
 * A link to external content.
 */
export const Link: React.FC<LinkProps> = props => {
  return isRelativeUrl(props.href) && !props.forceExternal ? (
    <RelativeLink {...props} />
  ) : (
    <AbsoluteLink {...props} />
  );
};
