import * as React from "react";
import styled from "styled-components/macro";

import {
  Button,
  ButtonRole,
  ButtonTargetKind
} from "@app/presentation/utility/Button";
import { normalWeightMixin } from "@app/presentation/theme/text";
import { spacingInRem } from "@app/presentation/theme/spacing";
import { phoneNumber } from "@app/presentation/data";
import { Link } from "@app/presentation/utility/Link";

const Section = styled.section`
  padding: ${props => props.theme.spacingInRem.m};

  @media (min-width: ${props => props.theme.mediaQueries.sizes.tablet}) {
    padding: ${props => props.theme.spacingInRem.xxxl};
  }
`;
const SectionContent = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const BannerSection = styled(Section)`
  background-color: ${props => props.theme.palette.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerContent = styled(SectionContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  > *:not(:last-child) {
    margin-bottom: ${spacingInRem.xl};
  }
  @media (min-width: ${props => props.theme.mediaQueries.sizes.tablet}) {
    padding-left: 300px;
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
const HighlightText = styled.span`
  color: ${props => props.theme.palette.primary};
`;
const BannerActions = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  > *:not(:last-child) {
    margin-right: ${props => props.theme.spacingInRem.s};
  }
`;

export const HomePage: React.FC = () => (
  <>
    <main>
      <BannerSection>
        <BannerContent>
          <BannerTitle>Fine Syrian pastries and cuisine since 1870</BannerTitle>
          <BannerSubtitle>
            Dine in our restaurant or cater the authentic, delicious cuisine of
            Hamah, Syria at your next gathering
          </BannerSubtitle>
          <BannerActions>
            <Button
              role={ButtonRole.PRIMARY_INVERTED}
              onClick={{
                kind: ButtonTargetKind.LINK,
                action: { href: "#restaurant" }
              }}
            >
              Visit our restaurant
            </Button>
            <Button
              role={ButtonRole.PRIMARY_INVERTED}
              onClick={{
                kind: ButtonTargetKind.LINK,
                action: { href: "#cater" }
              }}
            >
              Cater an event
            </Button>
          </BannerActions>
        </BannerContent>
      </BannerSection>
      <Section id="food">
        <SectionContent>
          <h2>The heritage of Syria</h2>
          <p></p>
          <Button
            role={ButtonRole.PRIMARY}
            onClick={{
              kind: ButtonTargetKind.LINK,
              action: {
                href: "/2019-10-12-menu.pdf",
                forceExternal: true
              }
            }}
          >
            Check out our menu
          </Button>
        </SectionContent>
      </Section>
      <Section id="restaurant">
        <SectionContent>
          <h2>Join us for dinner</h2>
          <h4>Interested in catering an event?</h4>
          <Button
            role={ButtonRole.SECONDARY}
            onClick={{
              kind: ButtonTargetKind.LINK,
              action: { href: "#cater" }
            }}
          >
            Learn more
          </Button>
        </SectionContent>
      </Section>
      <Section id="cater">
        <SectionContent>
          <h2>Make your gathering special</h2>
          <p>
            Amer Sallora and his dedicated team will bring the culinary spark to
            delight guests at your next event.
          </p>
          <p>
            Call us at <HighlightText>{phoneNumber}</HighlightText> to plan and
            schedule delivery. We are excited to take responsibility for the
            success of your event.
          </p>
        </SectionContent>
      </Section>
    </main>
  </>
);
