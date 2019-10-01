import * as React from "react";
import styled from "styled-components/macro";

import { Link } from "@app/presentation/utility/Link";
import { PageSection } from "@app/presentation/utility/mixins/PageSection";

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
export const Footer: React.StatelessComponent<{}> = () => (
  <footer>
    <ContactSection id="contact">
      <h5>
        Our restaurant is located at{" "}
        <a href="https://goo.gl/maps/omREEh46EPqMcGkr9">8500 S Harlem Ave</a> in
        Bridgeview, IL.
      </h5>
      {/* <p>Our hours are as follows:</p>
      <ul>
        <li>Monday-Friday: 10am–9pm</li>
        <li>Saturday: 10am–10pm</li>
      </ul> */}

      <h5>Call us to ask about catering or delivery.</h5>
      <h6>(708) 581-4239</h6>
    </ContactSection>
    <InfoSection>
      <p>Sallora & Sam, {new Date().getFullYear()}</p>
    </InfoSection>
  </footer>
);
