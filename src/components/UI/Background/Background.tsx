import React, { Fragment, memo } from "react";
import backgroundDarkDoodleFixed from "../../../assets/background/background-dark-doodle-fixed-layer.png";
import backgroundDarkDoodleFirst from "../../../assets/background/background-dark-doodle-first-layer.png";
import backgroundDarkDoodleSecond from "../../../assets/background/background-dark-doodle-second-layer.png";
import devices from "../../../constants/breakpoints";
import styled from "styled-components";

interface Props {}

const BackgroundImageLayer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background-size: cover;
  background-position: left top;
  background-repeat: no-repeat;
  @media ${devices.tablet} {
    display: none;
  }
`;

const Background = ({}: Props) => {
  return (
    <Fragment>
      <BackgroundImageLayer
        style={{
          backgroundImage: `url(${backgroundDarkDoodleFixed})`,
        }}
      />
      <BackgroundImageLayer
        style={{
          backgroundImage: `url(${backgroundDarkDoodleSecond})`,
        }}
      />
      <BackgroundImageLayer
        style={{
          backgroundImage: `url(${backgroundDarkDoodleFirst})`,
        }}
      />
    </Fragment>
  );
};

export default memo(Background);
