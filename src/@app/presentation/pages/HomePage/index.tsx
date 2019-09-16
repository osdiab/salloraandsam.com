import * as React from "react";

import styled from "@app/presentation/theme/styled-components";
import { PageBody } from "@app/presentation/utility/layout/PageBody";
import { Paragraph } from "@app/presentation/utility/Paragraph";

const BannerTitle = styled(Paragraph)`
  font-size: 2rem;
  font-weight: 700;
  max-width: 80%;
  margin: auto;
  text-align: center;
`;
export class HomePage extends React.Component<{}> {
  public render() {
    return (
      <>
        <PageBody>
          <BannerTitle>
            Omar designs and implements products for the betterment of society.
          </BannerTitle>
        </PageBody>
      </>
    );
  }
}
