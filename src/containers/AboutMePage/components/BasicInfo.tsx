import React, { ReactElement } from "react";
import styled from "styled-components";
import devices from "../../../constants/breakpoints";
import {
  PageContainer,
  SectionContainer,
} from "../../../components/UI/Layout/Layout";
import Title from "../../../components/UI/Title/Title";
interface Props {}

const InfoField = styled.div`
  display: flex;
  margin: 5px 0;
  flex-direction: row;
  font-size: 14px;
  .blue-text {
    font-size: 16px;
    margin-right: 10px;
    font-weight: bold;
  }
  &:first-of-type {
    margin-top: 0;
  }
`;
const AboutMeText = styled.p`
  font-size: 14px;
`;

export default function BasicInfo({}: Props): ReactElement {
  return (
    <SectionContainer>
      <AboutMeText>
        Senior Frontend Engineer with 12 years of experience across fintech and deep-tech, building
        React/TypeScript applications that handle real complexity. At CELUS I co-led a full architecture
        rebuild (~40% smaller codebase, test coverage from near-zero to 90%), founded a design system
        adopted company-wide, and integrated LLM-driven features into production. I write tests, care
        about accessibility, and mentor junior developers — and I'm currently deepening my backend
        skills with Python and FastAPI.
      </AboutMeText>
      <div>
        <InfoField>
          <p className="blue-text">Location:</p>
          <p>Munich (central), Bavaria, Germany</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Citizenship:</p>
          <p>Syrian</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Languages:</p>
          <p>English (fluent, C1), German (A2), Arabic (native)</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Work Authorization:</p>
          <p>EU Blue Card holder (renewable), not tied to a single employer, and eligible to change employers in Germany</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Phone Number: </p>
          <p>
            <a href="tel:+4915560718240">+49 155 60718240</a>
          </p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Email:</p>
          <p>
            <a href="mailto:mohammad.maleh@gmail.com">
              mohammad.maleh@gmail.com
            </a>
          </p>
        </InfoField>
      </div>
    </SectionContainer>
  );
}
