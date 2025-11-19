import React, { ReactElement, useRef } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { white, blue, silver } from "../../../constants/colors";
import * as easings from "d3-ease";

interface MenuIconProps {
  Icon: any;
  name?: string;
  link?: string;
  handleOnClick?: () => void;
  onTooltipShow?: (text: string, x: number, y: number) => void;
  onTooltipHide?: () => void;
  onMouseMove?: (x: number, y: number) => void;
}

interface IconContainerProps {
  active: boolean;
}

const IconContainer = styled.div<IconContainerProps>`
  position: relative;
  margin: 20px auto;
  cursor: pointer;
  * {
    color: ${(props) => (props.active ? white : silver)};
    z-index: 2;
  }
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const IconBackground = styled(animated.div)`
  background-color: ${blue};
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  z-index: 0;
`;

export const MenuIconWithTooltip = ({
  Icon,
  link,
  name,
  handleOnClick,
  onTooltipShow,
  onTooltipHide,
  onMouseMove,
}: MenuIconProps): ReactElement => {
  const location = useLocation();
  const isActive = location.pathname === link;
  const containerRef = useRef<HTMLDivElement>(null);

  const transitions = useTransition(isActive ? [true] : [], {
    from: { transform: "scale(0)" },
    enter: { transform: "scale(1)" },
    leave: { transform: "scale(0)" },
    config: {
      easing: easings.easeCubic,
    },
    reset: true,
  });

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (name && onTooltipShow) {
      onTooltipShow(name, e.clientX, e.clientY);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (name && onMouseMove) {
      onMouseMove(e.clientX, e.clientY);
    }
  };

  const handleMouseLeave = () => {
    if (onTooltipHide) {
      onTooltipHide();
    }
  };

  return (
    <IconContainer
      ref={containerRef}
      active={isActive}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if (handleOnClick) handleOnClick();
      }}
    >
      {link && (
        <Link to={link}>
          <Icon size={30} />
        </Link>
      )}
      {!link && (
        <div>
          <Icon size={30} style={{ color: white }} />
        </div>
      )}

      {transitions((props, item) => item && <IconBackground style={props} />)}
    </IconContainer>
  );
};

