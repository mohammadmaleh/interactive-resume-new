import React, { Fragment, memo, useEffect } from "react";
import backgroundDarkDoodleFixed from "../../../assets/background/background-dark-doodle-fixed-layer.png";
import backgroundDarkDoodleFirst from "../../../assets/background/background-dark-doodle-first-layer.png";
import backgroundDarkDoodleSecond from "../../../assets/background/background-dark-doodle-second-layer.png";
import devices from "../../../constants/breakpoints";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

interface Props {}

// The layers are oversized and offset so that translating them on mouse move
// never exposes the page background at the edges.
const BackgroundImageLayer = styled(animated.div)`
  position: absolute;
  left: -60px;
  top: -60px;
  width: calc(100% + 120px);
  height: calc(100% + 120px);
  z-index: -10;
  background-size: cover;
  background-position: left top;
  background-repeat: no-repeat;
  will-change: transform;
  @media ${devices.tablet} {
    display: none;
  }
`;

// Depth factor per layer — the "closer" a layer is, the more it shifts.
const FIXED_DEPTH = 0;
const SECOND_DEPTH = 18;
const FIRST_DEPTH = 40;

const Background = ({}: Props) => {
  const [{ xy }, api] = useSpring(() => ({
    xy: [0, 0] as [number, number],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize cursor position to the range [-0.5, 0.5].
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      api.start({ xy: [x, y] });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [api]);

  const layerTransform = (depth: number) =>
    xy.to((x, y) => `translate3d(${-x * depth}px, ${-y * depth}px, 0)`);

  return (
    <Fragment>
      <BackgroundImageLayer
        style={{
          backgroundImage: `url(${backgroundDarkDoodleFixed})`,
          transform: layerTransform(FIXED_DEPTH),
        }}
      />
      <BackgroundImageLayer
        style={{
          backgroundImage: `url(${backgroundDarkDoodleSecond})`,
          transform: layerTransform(SECOND_DEPTH),
        }}
      />
      <BackgroundImageLayer
        style={{
          backgroundImage: `url(${backgroundDarkDoodleFirst})`,
          transform: layerTransform(FIRST_DEPTH),
        }}
      />
    </Fragment>
  );
};

export default memo(Background);
