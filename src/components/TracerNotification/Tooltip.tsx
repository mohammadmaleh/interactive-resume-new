import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { animated, useSpring, useTransition } from "react-spring";
import { lightBlack, blue, white, darkBlack } from "../../constants/colors";

interface TooltipProps {
  text: string;
  show: boolean;
  x: number;
  y: number;
}

const TooltipContainer = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  pointer-events: none;
  will-change: transform;
`;

const TooltipBubble = styled(animated.div)`
  height: 30px;
  padding: 0 20px;
  background-color: ${lightBlack};
  border-radius: 70px;
  border: 2px solid ${blue};
  box-shadow: 10px -7px 15px ${darkBlack}, ${darkBlack} 0px 0px 3px inset;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;

const TooltipText = styled.span`
  font-size: 1.2em;
  color: ${white};
`;

const OFFSET_Y = 70; // Distance above cursor

export const Tooltip: React.FC<TooltipProps> = ({ text, show, x, y }) => {
  const [width, setWidth] = useState(0);
  const bubbleRef = useRef<HTMLDivElement>(null);

  // Measure tooltip width
  useEffect(() => {
    if (bubbleRef.current) {
      setWidth(bubbleRef.current.offsetWidth);
    }
  }, [text]);

  // Smooth position animation
  const positionSpring = useSpring({
    x: x - width / 2,
    y: y - OFFSET_Y,
    config: {
      tension: 280,
      friction: 60,
    },
  });

  // Fade in/out transition
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: show ? 100 : 50,
    },
  });

  return (
    <>
      {transitions((style, item) =>
        item ? (
          <TooltipContainer
            style={{
              transform: positionSpring.x.to(
                (xVal) => `translate3d(${xVal}px, ${positionSpring.y.get()}px, 0)`
              ),
            }}
          >
            <TooltipBubble ref={bubbleRef} style={style}>
              <TooltipText>{text}</TooltipText>
            </TooltipBubble>
          </TooltipContainer>
        ) : null
      )}
    </>
  );
};

