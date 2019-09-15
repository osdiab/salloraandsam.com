import * as React from "react";

import styled from "@app/presentation/theme/styled-components";
import { H2, H3, H4 } from "@app/presentation/utility/Heading";
import { INavBarProps, NavBar } from "@app/presentation/utility/layout/NavBar";
import { PageBody } from "@app/presentation/utility/layout/PageBody";
import { Link } from "@app/presentation/utility/Link";
import { Emphasis } from "@app/presentation/utility/mixins/text/Emphasis";
import { Paragraph } from "@app/presentation/utility/Paragraph";

const pageEntries: INavBarProps["entries"] = [
  {
    displayText: "Professional life",
    to: "#professional-life"
  },
  {
    displayText: "Passions",
    to: "#passions"
  },
  {
    displayText: "Get in touch",
    to: "#contact"
  }
];

const BannerTitle = styled(Paragraph)`
  font-size: 2rem;
  font-weight: 700;
  max-width: 80%;
  margin: auto;
  text-align: center;
`;
const PageSection = styled.section`
  margin-top: 2rem;
  border-top: 1px solid darkblue;
  padding-top: 2rem;
`;

const SectionSubtitle = styled(H3)`
  /* color: ${props => props.theme.palette.primary}; */
  font-weight: 400;
`;
const EmphasisSpan = styled.span`
  ${Emphasis};
`;
export class HomePage extends React.Component<{}> {
  public render() {
    return (
      <>
        <NavBar entries={pageEntries} />
        <PageBody>
          <BannerTitle>
            I create simple, effective tools that enable those around me to
            realize their goals.
          </BannerTitle>

          <PageSection>
            <H2 id="professional-life">Professional life</H2>

            <SectionSubtitle>Looking forward,</SectionSubtitle>
            <Paragraph>
              I am not looking for new work opportunities or collaborations, but
              I might be in the future.
            </Paragraph>
            <Paragraph>
              If you'd like to keep stay in contact, feel free to{" "}
              <Link to="#contact">get in touch</Link>.
            </Paragraph>

            <SectionSubtitle>In retrospect,</SectionSubtitle>
            <H4>
              At <Link to="https://clever.com">Clever</Link>, I built{" "}
              <Link to="https://clever.com/products/badges">Clever Badges</Link>
              , enabling PreK-2nd grade students to use education apps in the
              classroom <EmphasisSpan>over 50 million times.</EmphasisSpan>
            </H4>
            <Paragraph>
              I also played a key role in deciding the company's frontend stack.
              I lead development on our{" "}
              <Link to="https://clever.github.io/components">
                React component library and design system
              </Link>{" "}
              to make our visual style consistent, and advocated and delivered
              tools like TypeScript into our workflow to make our code more
              reliable.
            </Paragraph>

            <H4>
              I co-founded <Link to="https://raha.app">Raha</Link>, a non-profit
              to make the value of a universal basic income tangible today.
            </H4>
            <Paragraph>
              I designed the frameworks and infrastructure for the entire
              technology stack, from{" "}
              <Link to="https://github.com/rahafoundation/raha-api">
                our server and API
              </Link>{" "}
              to mobile application.
            </Paragraph>
            <Paragraph>
              It's all designed to be reusable—for instance, the code that makes
              our API servers work, also produces API clients for our web and
              mobile apps. That saves us time and money, both because we never
              push code that misuses our API, but also because working on the
              app doesn't require understanding of the API.
            </Paragraph>
            <Paragraph>
              I also wireframed, designed and implemented the UI and UX of the
              the app <Link to="https://raha.app">and website</Link>, besides
              the hand-drawn characters (thanks Tina!).
            </Paragraph>
          </PageSection>

          <PageSection>
            <H2 id="passions">Passions</H2>

            <SectionSubtitle>
              Foreign language and cultural immersion
            </SectionSubtitle>
            <H4>
              I enjoy living in other countries for extended periods of time and
              picking up their languages.
            </H4>
            <Paragraph>
              I am living in Tokyo, a place I've always admired for its profound
              culture and superb urban character. I speak beginner-level
              Japanese. どうぞよろしく、頑張ります！
            </Paragraph>
            <Paragraph>
              I lived in Shanghai last year, achieving upper-intermediate level
              Mandarin (HSK4-5). 我很高兴认识你。
            </Paragraph>
            <Paragraph>
              I'm very rusty at Spanish and Levantine Arabic, as I haven't
              practiced them for a long time.
            </Paragraph>

            <SectionSubtitle>Urban design</SectionSubtitle>
            <H4>I advocate for housing and transit development in the USA.</H4>
            <Paragraph>
              Living in San Francisco, attending SF Board of Supervisor
              hearings, and canvassing for political candidates made it clear:
              there are structural problems with how the Bay Area (and USA more
              broadly) decides when and how to build housing and infrastructure.
            </Paragraph>
            <Paragraph>
              I generally align with the idea pushed by{" "}
              <Link to="https://www.sfyimby.org/">SFYIMBY</Link> and similar
              groups throughout the country, that the acute shortage of supply
              coupled with weak transportation infrastructure drives American
              housing prices up.
            </Paragraph>
            <Paragraph>
              Any long-term strategy to reduce the cost of living in major
              American economic centers will require large amounts of new
              housing and transport; but I am worried, however, that the lack of
              political will to produce that infrastructure will make the
              exclusion of people from existing major cities, and the production
              of new ones, a more likely scenario.
            </Paragraph>
            <Paragraph>
              Feel free to <Link to="#contact">get in touch</Link> if you'd like
              to chat about it.
            </Paragraph>

            <SectionSubtitle>Electronic music</SectionSubtitle>
            <H4>I love DJing house and techno music.</H4>
            <Paragraph>
              I haven't been active as of late, but my mixes run a broad variety
              of styles from{" "}
              <Link to="https://www.mixcloud.com/osdiab/club-montage/">
                smooth, soulful vibes
              </Link>
              {" to "}
              <Link to="https://soundcloud.com/osdiab/yellow-five-bob-progressive-1">
                minimal, tech-house
              </Link>
              {" and "}
              <Link to="https://soundcloud.com/osdiab/2011-10-26-lucid_dreaming?in=osdiab/sets/dj-mixes">
                euphoric trance
              </Link>
              . My mixing style tends to be smooth, seamless, harmonic mixes.
            </Paragraph>
            <Paragraph>
              I've taken a recent interest in mobile DJing, with just a tablet
              and portable speakers. It's a great deal of fun!
            </Paragraph>
            <H4>I also produce my own tunes.</H4>
            <Paragraph>
              It's been a while since I've been active, but I feel good about{" "}
              <Link to="https://soundcloud.com/osdiab/work-in-progress-andy-mckee">
                this remix of Andy McKee
              </Link>
              {" and "}
              <Link to="https://soundcloud.com/osdiab/existentialism">
                this simple chiptunesey house song
              </Link>{" "}
              I made a while back.
            </Paragraph>
          </PageSection>
        </PageBody>
      </>
    );
  }
}