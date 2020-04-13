import * as React from "react";
import styled, { css } from "styled-components/macro";

import { ThemeInterface } from "@app/presentation/theme";
import {
  Link,
  LinkAppearance,
  LinkProps
} from "@app/presentation/utility/Link";
import { logger } from "@app/utility/logger";

export enum ButtonTargetKind {
  LINK = "LINK",
  FUNCTION = "FUNCTION",
  SUBMIT = "SUBMIT"
}

export enum ButtonRole {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  PRIMARY_INVERTED = "PRIMARY_INVERTED",
  TEXT_ONLY = "TEXT_ONLY"
}

export enum ButtonSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE"
}

export interface OnClickShape<Kind extends ButtonTargetKind, action> {
  kind: Kind;
  action: action;
}

export type OnClick =
  | OnClickShape<ButtonTargetKind.LINK, Omit<LinkProps, "children">>
  | OnClickShape<ButtonTargetKind.FUNCTION, () => void>
  | OnClickShape<ButtonTargetKind.SUBMIT, undefined>;

export interface ButtonProps {
  onClick: OnClick;
  size?: ButtonSize;
  disabled?: boolean;
  role?: ButtonRole;
}

type StyledButtonProps = Pick<
  Required<ButtonProps>,
  "size" | "disabled" | "role"
> & { fullWidth?: boolean };

function borderColor(params: {
  theme: ThemeInterface;
  role: ButtonRole;
  focus: boolean;
}): string {
  const { role, theme, focus } = params;
  switch (role) {
    case ButtonRole.PRIMARY:
    case ButtonRole.SECONDARY:
      return focus ? theme.palette.primaryHighlight : theme.palette.primary;
    case ButtonRole.PRIMARY_INVERTED:
      return theme.palette.whiteText;
    case ButtonRole.TEXT_ONLY:
      return "transparent";
  }
}

function backgroundColor(params: {
  theme: ThemeInterface;
  role: ButtonRole;
  focus: boolean;
}): string {
  const { role, theme, focus } = params;
  switch (role) {
    case ButtonRole.PRIMARY:
      return focus ? theme.palette.primaryHighlight : theme.palette.primary;
    case ButtonRole.PRIMARY_INVERTED:
      return theme.palette.whiteText;
    case ButtonRole.SECONDARY:
    case ButtonRole.TEXT_ONLY:
      return "transparent";
  }
}

function fontColor(params: {
  theme: ThemeInterface;
  role: ButtonRole;
  focus: boolean;
}): string {
  const { role, theme, focus } = params;
  switch (role) {
    case ButtonRole.PRIMARY:
      return theme.palette.whiteText;
    case ButtonRole.SECONDARY:
    case ButtonRole.PRIMARY_INVERTED:
    case ButtonRole.TEXT_ONLY:
      return focus ? theme.palette.primaryHighlight : theme.palette.primary;
  }
}

const StyledButton = styled.button<StyledButtonProps>`
  ${props =>
    props.fullWidth
      ? css`
          width: 100%;
        `
      : ""};
  display: inline-block;
  border: 2px solid;
  border-color: ${props => borderColor({ ...props, focus: false })};
  border-radius: 2px;
  padding: 10px 20px;
  background-color: ${props => backgroundColor({ ...props, focus: false })};
  font-size: ${props => buttonFontSize(props.size)};
  font-weight: 700;
  appearance: none;
  color: ${props => fontColor({ ...props, focus: false })};
  transition: background-color 0.1s ease-in, border-color 0.1s ease-in,
    color 0.1s ease-in;
  text-align: center;

  :hover,
  :focus,
  :active {
    border-color: ${props => borderColor({ ...props, focus: true })};
    background-color: ${props => backgroundColor({ ...props, focus: true })};
    color: ${props => fontColor({ ...props, focus: true })};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    text-decoration: underline;
  }
`;
const StyledDivButton = StyledButton.withComponent(styled.div``);

function logInvalidTargetKind(onClick: never) {
  logger.error(
    `Invalid button target kind ${(onClick as OnClick).kind}. Not rendering.`
  );
}

function logInvalidSize(size: never) {
  logger.error(`Invalid button size '${size}'. Rendering as medium size.`);
}

function buttonFontSize(size: ButtonProps["size"]) {
  switch (size) {
    default:
      logInvalidSize(size);
    // fallthrough
    case undefined:
    case ButtonSize.MEDIUM:
      return "1.2rem";
    case ButtonSize.SMALL:
      return "1rem";
    case ButtonSize.LARGE:
      return "1.4rem";
  }
}
const ButtonLink = styled(Link)`
  display: inline-block;
`;

export const Button: React.FC<ButtonProps> = props => {
  const {
    onClick,
    size = ButtonSize.MEDIUM,
    disabled = false,
    role = ButtonRole.PRIMARY,
    children
  } = props;

  switch (onClick.kind) {
    case ButtonTargetKind.LINK: {
      const linkContent = (
        <StyledDivButton disabled={disabled} size={size} role={role} fullWidth>
          {children}
        </StyledDivButton>
      );
      if (disabled) {
        return linkContent;
      }

      return (
        <ButtonLink
          appearance={LinkAppearance.UNSTYLED}
          href={onClick.action.href}
          forceExternal={onClick.action.forceExternal || false}
        >
          {linkContent}
        </ButtonLink>
      );
    }
    case ButtonTargetKind.SUBMIT:
      return (
        <StyledButton disabled={disabled} size={size} role={role} type="submit">
          {children}
        </StyledButton>
      );
    case ButtonTargetKind.FUNCTION:
      return (
        <StyledButton
          disabled={disabled}
          size={size}
          role={role}
          onClick={onClick.action}
        >
          {children}
        </StyledButton>
      );
    default:
      logInvalidTargetKind(onClick);
      return <React.Fragment />;
  }
};
