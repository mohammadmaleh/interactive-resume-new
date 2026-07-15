import React, { ReactElement } from "react";
import styled from "styled-components";
import profilePicture from "../../assets/main-image.jpeg";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Mail } from "@styled-icons/entypo/Mail";
import { Download } from "@styled-icons/boxicons-regular/Download";
import { white } from "../../constants/colors";
import devices from "../../constants/breakpoints";
interface Props {}

const IconContainerDiv = styled.div`
  cursor: pointer;
`;
const Container = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 330px;
  overflow: auto;
  height: 100%;
  @media ${devices.tablet} {
    display: none;
  }
`;
const ProfileImage = styled.div`
  border: 1px solid ${white};
  height: 150px;
  width: 150px;
  border-radius: 170px;
  background-image: url(${profilePicture});
  background-size: cover;
  background-position: 60% center;
`;
const Name = styled.p`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1.4px;
  margin-top: 30px;
`;
const JobDescription = styled.p`
  font-size: 1.6rem;
  margin-top: 10px;
`;
const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
const GithubIcon = styled(Github)`
  color: ${white};
  height: 30px;
`;
const LinkedInIcon = styled(LinkedinSquare)`
  color: ${white};
  height: 30px;
`;
const MailIcon = styled(Mail)`
  color: ${white};
  height: 30px;
`;
const DownloadIcon = styled(Download)`
  color: ${white};
  height: 30px;
`;

export default function BasicInfo({}: Props): ReactElement {
  return (
    <Container data-test="basic-info">
      <ProfileImage />
      <Name>MOHAMAD AL MALEH</Name>
      <JobDescription>Senior Frontend Engineer</JobDescription>
      <IconsContainer>
        <IconContainerDiv title="Checkout my Github Account">
          <a
            href="https://github.com/mohammadmaleh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Checkout my Github account"
          >
            <GithubIcon />
          </a>
        </IconContainerDiv>
        <IconContainerDiv title="Message me on LinkedIn">
          <a
            href="https://www.linkedin.com/in/mohammad-maleh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message me on LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </IconContainerDiv>
        <IconContainerDiv title="Send me an email">
          <a
            href="mailto:mohammad.maleh@gmail.com"
            aria-label="Send me an email"
          >
            <MailIcon />
          </a>
        </IconContainerDiv>
        <IconContainerDiv title="Download my resume">
          <a
            href="https://drive.google.com/file/d/1pND9_EnxjL6o6tbLl3yj-B_pB-nvIkH4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download my resume"
          >
            <DownloadIcon />
          </a>
        </IconContainerDiv>
      </IconsContainer>
      {/*<Button>Download Resume!</Button>*/}
    </Container>
  );
}
