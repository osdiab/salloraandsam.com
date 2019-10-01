import * as React from "react";
import styled from "styled-components/macro";

import {
  Button,
  ButtonRole,
  ButtonTargetKind
} from "@app/presentation/utility/Button";
import { normalWeightMixin } from "@app/presentation/theme/text";

const BannerSection = styled.section`
  background-color: ${props => props.theme.palette.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${props => props.theme.spacingInRem.xxxl};
  padding-bottom: ${props => props.theme.spacingInRem.xxxl};
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const BannerTitle = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.palette.whiteText};
  ${normalWeightMixin};
`;
const BannerSubtitle = styled.h2`
  font-size: 1.3rem;
  color: ${props => props.theme.palette.whiteText};
`;
const Placeholder = styled.div`
  width: 300px;
  height: 300px;
`;
export class HomePage extends React.Component<{}> {
  public render() {
    return (
      <>
        <main>
          <BannerSection>
            <Placeholder />
            <BannerText>
              <BannerTitle>Fine Syrian pastries since 1873</BannerTitle>
              <BannerSubtitle>
                Order catering for your next gathering
              </BannerSubtitle>
              <Button
                role={ButtonRole.PRIMARY_INVERTED}
                onClick={{ kind: ButtonTargetKind.LINK, action: "#contact" }}
              >
                Get in touch
              </Button>
            </BannerText>
          </BannerSection>
        </main>
      </>
    );
  }
}
