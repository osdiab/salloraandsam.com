import * as React from "react";
import styled from "styled-components/macro";

import { Link, LinkAppearance } from "@app/presentation/utility/Link";
import { PageSection } from "@app/presentation/utility/mixins/PageSection";
import { phoneNumber } from "@app/presentation/data";

const FooterElem = styled.footer`
  background-color: ${props => props.theme.palette.grayBackground};
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;
const ContactSection = styled.section`
  ${PageSection};
  padding-bottom: 2rem;
  align-self: flex-start;
  text-align: center;

  h5,
  h6 {
    font-size: ${props => props.theme.text.size.paragraph};
  }
`;
export const Footer: React.FC = () => (
  <FooterElem>
    <ContactSection id="contact">
      <h5>
        Our restaurant is located at{" "}
        <Link
          appearance={LinkAppearance.HYPERLINK}
          href="https://goo.gl/maps/omREEh46EPqMcGkr9"
        >
          8500 S Harlem Ave
        </Link>{" "}
        in Bridgeview, IL.
      </h5>
      <p>We are open everyday.</p>
      <p>
        Sunday to Thursday: 11:30AM–11PM
        <br />
        Friday and Saturday: 11:30AM–midnight
      </p>
    </ContactSection>
    <InfoSection>
      <p>Sallora & Sam, {new Date().getFullYear()}</p>
    </InfoSection>
  </FooterElem>
);
