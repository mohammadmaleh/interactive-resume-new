import React, { ReactElement } from "react";
import styled from "styled-components";
import { pages } from "../../Routes";
import { MenuIconWithTooltip } from "../../components/hoc/MenuIcon/MenuIconWithTooltip";
import { ChevronRight, ChevronLeft } from "@styled-icons/boxicons-regular";
import { useNavigate, useLocation } from "react-router-dom";
import { grey, silver } from "../../constants/colors";
import devices from "../../constants/breakpoints";
import { useTooltip } from "../../hooks/useTooltip";
import { Tooltip } from "../../components/TracerNotification/Tooltip";

const MenuContainer = styled.div`
  height: 100%;
  width: 70px;
  display: flex;
  flex-direction: column;
  @media ${devices.mobileL} {
    width: 100%;
    height: 70px;
  }
`;

const Menu = styled.div`
  background: ${grey};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0;
  align-items: center;
  @media ${devices.mobileL} {
    flex-direction: row;
    border-radius: 0;
  }
`;

const NavigationMenu = styled(Menu)`
  height: 150px;
  margin-top: 10px;
  padding: 15px 0;
  @media ${devices.mobileL} {
    display: none;
  }
`;

const ArrowRight = styled(ChevronRight)`
  height: 45px;
  width: 45px;
  * {
    color: ${silver}!important;
  }
`;

const ArrowLeft = styled(ChevronLeft)`
  height: 45px;
  width: 45px;
  * {
    color: ${silver}!important;
  }
`;

const MainMenuWithTooltip = (): ReactElement => {
  const navigate = useNavigate();
  const location = useLocation();
  const { tooltip, showTooltip, hideTooltip, updatePosition } = useTooltip();

  const swipePage = (direction: string) => {
    const currentLocation = location.pathname;
    const pagesCount = pages.length - 1;
    const currentPageIndex = pages.findIndex(
      (page) => page.link === currentLocation
    );
    let nextPage = "/";
    if (currentPageIndex === -1) navigate("/");
    if (direction === "next") {
      if (currentPageIndex === pagesCount) nextPage = pages[0].link;
      else nextPage = pages[currentPageIndex + 1].link;
    } else if (direction === "prev") {
      if (currentPageIndex === 0) nextPage = pages[pagesCount].link;
      else nextPage = pages[currentPageIndex - 1].link;
    }
    navigate(nextPage);
  };

  return (
    <>
      <MenuContainer>
        <Menu>
          {pages.map((page) => (
            <MenuIconWithTooltip
              key={page.id}
              link={page.link}
              Icon={page.icon}
              name={page.name}
              onTooltipShow={showTooltip}
              onTooltipHide={hideTooltip}
              onMouseMove={updatePosition}
            />
          ))}
        </Menu>
        <NavigationMenu>
          <MenuIconWithTooltip
            Icon={ArrowRight}
            handleOnClick={() => swipePage("next")}
            name="Next"
            onTooltipShow={showTooltip}
            onTooltipHide={hideTooltip}
            onMouseMove={updatePosition}
          />
          <MenuIconWithTooltip
            Icon={ArrowLeft}
            handleOnClick={() => swipePage("prev")}
            name="Prev"
            onTooltipShow={showTooltip}
            onTooltipHide={hideTooltip}
            onMouseMove={updatePosition}
          />
        </NavigationMenu>
      </MenuContainer>
      <Tooltip
        text={tooltip.text}
        show={tooltip.show}
        x={tooltip.x}
        y={tooltip.y}
      />
    </>
  );
};

export default MainMenuWithTooltip;

