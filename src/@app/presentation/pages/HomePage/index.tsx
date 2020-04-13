import * as React from "react";
import styled from "styled-components/macro";

import dessertsImg from "@app/assets/images/cropped-desserts.jpg";
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
  > *:not(:last-child) {
    margin-bottom: ${spacingInRem.m};
  }
`;

const HeroSection = styled.section`
  background-color: ${props => props.theme.palette.primary};

  display: flex;
  align-items: center;

  @media (max-width: ${props => props.theme.mediaQueries.sizes.tablet}) {
    flex-direction: column;
    > img {
      order: 1;
      flex-grow: 0;
      width: 100%;
    }
    > article {
      margin: ${spacingInRem.l};
    }
  }

  @media (min-width: ${props => props.theme.mediaQueries.sizes.tablet}) {
    > * {
      flex: 1;
    }
    > :not(:last-child) {
      margin-right: ${spacingInRem.xl};
    }
  }

  h1 {
    font-size: 2rem;
    color: ${props => props.theme.palette.whiteText};
    @media (min-width: ${props => props.theme.mediaQueries.sizes.tablet}) {
      font-size: 3rem;
    }

    ${normalWeightMixin}
  }
`;

const MenusGroup = styled.section`
  > *:not(:last-child) {
    margin-right: ${spacingInRem.s};
  }
`;

const HighlightText = styled.span`
  color: ${props => props.theme.palette.primary};
`;

const HeroActions = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: ${props => props.theme.mediaQueries.sizes.tablet}) {
    > *:not(:last-child) {
      margin-right: ${props => props.theme.spacingInRem.s};
    }
  }
  @media (max-width: ${props => props.theme.mediaQueries.sizes.tablet}) {
    flex-direction: column;
    align-items: stretch;
    > *:not(:last-child) {
      margin-bottom: ${props => props.theme.spacingInRem.s};
    }
  }
`;

export const HomePage: React.FC = () => (
  <>
    <main>
      <HeroSection>
        <img src={dessertsImg} alt="Our delicious, authentic desserts" />
        <article>
          <h1>Authentic Syrian and Mediterranean Cuisine Since 1870</h1>
          <HeroActions>
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
          </HeroActions>
        </article>
      </HeroSection>
      <Section id="restaurant">
        <SectionContent>
          <h2>Join us for dinner</h2>
          <p>
            Come to our restaurant conveniently located in Bridgeview and
            experience the Sallora legacy.
          </p>
          <h3>Check out our menus</h3>
          <MenusGroup>
            <Button
              role={ButtonRole.PRIMARY}
              onClick={{
                kind: ButtonTargetKind.LINK,
                action: {
                  href: "/menu/main.pdf",
                  forceExternal: true
                }
              }}
            >
              Restaurant Menu
            </Button>
            <Button
              role={ButtonRole.PRIMARY}
              onClick={{
                kind: ButtonTargetKind.LINK,
                action: {
                  href: "/menu/desserts.pdf",
                  forceExternal: true
                }
              }}
            >
              Dessert Menu
            </Button>
          </MenusGroup>
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
