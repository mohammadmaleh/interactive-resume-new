import React, { ReactElement, useState } from "react";
import { SectionContainer } from "../../../components/UI/Layout/Layout";
import Title from "../../../components/UI/Title/Title";
import styled from "styled-components";
import { grey, blue, lightBlack, silver } from "../../../constants/colors";
import { QuoteAltRight } from "@styled-icons/boxicons-solid/QuoteAltRight";
import { useSpring, animated } from "react-spring";
import { testimonialsData } from "../../../constants/data";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import devices from "../../../constants/breakpoints";
interface Props {}

const CARD_WIDTH = 380;
const CARD_GAP = 20;
const STEP = CARD_WIDTH + CARD_GAP; // distance to advance per slide

// The viewport clips the horizontal strip; the track holds every card in a row
// and is translated by a single spring so exactly one card moves into view.
const Viewport = styled.div`
  grid-column: 1 / 3;
  width: 100%;
  overflow: hidden;
  padding: 40px 0;
`;
const Track = styled(animated.div)`
  display: flex;
  gap: ${CARD_GAP}px;
  width: max-content;
  will-change: transform;
`;
const TestimonialContainer = styled.div`
  flex: 0 0 ${CARD_WIDTH}px;
  width: ${CARD_WIDTH}px;
  height: auto;
  background-color: ${lightBlack};
  border: 2px solid ${grey};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 20px;
  padding: 20px;
  @media ${devices.mobileL} {
    flex-basis: 330px;
    width: 330px;
  }
`;
const ImageContainer = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  position: absolute;
  top: -40px;
`;
const Quote = styled.p`
  font-size: 20px;
  margin-top: 40px;
`;
const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 14px;
  .position {
    color: ${blue};
    text-transform: capitalize;
  }
`;
const BlueQuote = styled(QuoteAltRight)`
  font-size: 30px;
  color: ${blue};
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
`;
const NextButton = styled(ChevronRight)`
  height: 60px;
  width: 60px;
  color: ${silver};
  cursor: pointer;
`;
const PrevButton = styled(ChevronLeft)`
  height: 60px;
  width: 60px;
  color: ${silver};
  cursor: pointer;
`;
const ControlsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export default function Testimonials({}: Props): ReactElement {
  const [counter, setCounter] = useState(0);
  const total = testimonialsData.length;

  // Declarative spring: re-targets whenever `counter` changes. No imperative
  // ref, so it stays reliable under React StrictMode's double-mounting.
  const slide = useSpring({
    x: -counter * STEP,
    config: { mass: 1, tension: 210, friction: 26 },
  });

  const goPrev = () => setCounter((c) => (c === 0 ? total - 1 : c - 1));
  const goNext = () => setCounter((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <SectionContainer>
      <Title>Testimonials</Title>
      <ControlsContainer>
        <PrevButton aria-label="Previous testimonial" onClick={goPrev} />
        <NextButton aria-label="Next testimonial" onClick={goNext} />
      </ControlsContainer>
      <Viewport>
        <Track
          style={{
            transform: slide.x.to((x) => `translate3d(${x}px, 0, 0)`),
          }}
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialContainer key={testimonial.id}>
              <ImageContainer
                src={testimonial.picture}
                alt={testimonial.name}
              />
              <Quote>{testimonial.quote}</Quote>
              <BottomContainer>
                <NameContainer>
                  <p>{testimonial.name}</p>
                  <p className="position">{testimonial.position}</p>
                </NameContainer>
                <BlueQuote />
              </BottomContainer>
            </TestimonialContainer>
          ))}
        </Track>
      </Viewport>
    </SectionContainer>
  );
}
