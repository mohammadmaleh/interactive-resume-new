import React, { ReactElement } from "react";
import Title from "../../../components/UI/Title/Title";
import styled from "styled-components";
import { SectionContainer } from "../../../components/UI/Layout/Layout";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { CodeAlt } from "@styled-icons/boxicons-regular/CodeAlt";
import { DesignServices } from "@styled-icons/material-outlined/DesignServices";
import { Bulb } from "@styled-icons/boxicons-regular/Bulb";
import { blue } from "../../../constants/colors";
interface Props {}

const BlueReactLogo = styled(ReactLogo)`
  color: ${blue};
  width: 40px;
`;
const BlueCode = styled(CodeAlt)`
  color: ${blue};
  width: 40px;
`;
const BlueDesign = styled(DesignServices)`
  color: ${blue};
  width: 40px;
`;
const BlueBulb = styled(Bulb)`
  color: ${blue};
  width: 40px;
`;
const DescriptionTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;
const WhatIDoDescription = styled.p`
  font-size: 14px;
`;
export default function WhatIDo({}: Props): ReactElement {
  return (
    <SectionContainer>
      <Title>What i do</Title>
      <span />
      <div>
        <BlueReactLogo />
        <DescriptionTitle>FrontEnd Development</DescriptionTitle>
        <WhatIDoDescription>
          My main profession and passion is to develop cutting edge technology
          frontend projects. <br /> I'm always looking forward to learn new
          technologies and trends
        </WhatIDoDescription>
      </div>
      <div>
        <BlueCode />

        <DescriptionTitle>Fullstack Development</DescriptionTitle>
        <WhatIDoDescription>
          I build features end to end — React/TypeScript on the frontend and
          Node.js/Express on the backend. <br />
          I'm currently deepening my Python & FastAPI skills on a side project.
        </WhatIDoDescription>
      </div>
      <div>
        <BlueDesign />

        <DescriptionTitle>Designing</DescriptionTitle>
        <WhatIDoDescription>
          I'm not a professional designer, but If there is no design is
          available, I can come up with my own attractive design.
        </WhatIDoDescription>
      </div>
      <div>
        <BlueBulb />

        <DescriptionTitle>Product &amp; Mentoring</DescriptionTitle>
        <WhatIDoDescription>
          I care about outcomes, not just code. I founded a company-wide design
          system, ran frontend guilds, and mentor junior developers while
          collaborating closely with product and design.
        </WhatIDoDescription>
      </div>
    </SectionContainer>
  );
}
