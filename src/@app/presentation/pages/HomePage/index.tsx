import * as React from "react";
import styled from "styled-components/macro";

import {
  Button,
  ButtonRole,
  ButtonTargetKind
} from "@app/presentation/utility/Button";
import { normalWeightMixin } from "@app/presentation/theme/text";
import { spacingInRem } from "@app/presentation/theme/spacing";

const BannerSection = styled.section`
  background-color: ${props => props.theme.palette.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacingInRem.xxxl};
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-basis: 700px;
  flex-grow: 0;
  flex-shrink: 1;

  > *:not(:last-child) {
    margin-bottom: ${spacingInRem.xl};
  }
`;
const BannerTitle = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.palette.whiteText};

  ${normalWeightMixin}
`;
const BannerSubtitle = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.palette.whiteText};

  ${normalWeightMixin}
`;
const Placeholder = styled.div`
  width: 300px;
  height: 300px;
  flex-shrink: 0;
`;
export class HomePage extends React.Component<{}> {
  public render() {
    return (
      <>
        <main>
          <BannerSection>
            <Placeholder />
            <BannerText>
              <BannerTitle>
                Fine Syrian pastries and cuisine since 1873
              </BannerTitle>
              <BannerSubtitle>
                Dine in our store or cater authentic, delicious food from Hamah,
                Syria at your next gathering
              </BannerSubtitle>
              <Button
                role={ButtonRole.PRIMARY_INVERTED}
                onClick={{ kind: ButtonTargetKind.LINK, action: "#contact" }}
              >
                Call or visit us
              </Button>
            </BannerText>
          </BannerSection>
        </main>
      </>
    );
  }
}
