import * as React from "react";

import styled from "@app/presentation/theme/styled-components";
import { Link } from "@app/presentation/utility/Link";
import { PageSection } from "../mixins/PageSection";

export interface INavBarEntry {
  displayText: string;
  to: string;
}
export interface INavBarProps {
  entries: INavBarEntry[];
}

const NavElem = styled.nav`
  ${PageSection};
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 2;

  @media (max-width: 576px) {
    justify-content: center;
  }

  > li:not(:last-child) {
    margin-right: 20px;
  }
`;

export const NavBar: React.StatelessComponent<INavBarProps> = ({ entries }) => {
  return (
    <NavElem>
      <NavList>
        {entries.map(({ displayText, to }, index) => (
          <li key={index}>
            <Link to={to}>{displayText}</Link>
          </li>
        ))}
      </NavList>
    </NavElem>
  );
};