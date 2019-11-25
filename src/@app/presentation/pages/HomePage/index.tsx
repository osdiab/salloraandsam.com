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

const ComingSoon = styled.h1`
  text-align: center;
`;
export const HomePage: React.FC = () => (
  <>
    <main>
      <ComingSoon>Great food coming soon!</ComingSoon>
      <BannerSection>
        <BannerContent>
          <BannerTitle>
            Authentic Syrian and Mediterranean Cuisine Since 1870
          </BannerTitle>
          <BannerActions>
            <Button
              role={ButtonRole.PRIMARY_INVERTED}
              onClick={{
                kind: ButtonTargetKind.LINK,
                action: { href: "#restaurant" }
              }}
            >
              Visit our restaurant in Bridgeview
            </Button>
            <Button
              role={ButtonRole.PRIMARY_INVERTED}
              onClick={{
                kind: ButtonTargetKind.LINK,
                action: { href: "#cater" }
              }}
            >
              Cater your next gathering
            </Button>
          </BannerActions>
        </BannerContent>
      </BannerSection>
      <Section id="food">
        <SectionContent>
          <h2>The heritage of Syria</h2>
          <p></p>
        </SectionContent>
      </Section>
      <Section id="restaurant">
        <SectionContent>
          <h2>Join us for dinner</h2>
          <p>
            Come to our restaurant conveniently located in Bridgeview and
            experience the Sallora legacy.
          </p>
          <Button
            role={ButtonRole.PRIMARY}
            onClick={{
              kind: ButtonTargetKind.LINK,
              action: {
                href: "/menu.pdf",
                forceExternal: true
              }
            }}
          >
            Check out our menu
          </Button>
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
