import styled, { css, keyframes } from "styled-components";
import { Breakpoint, Container } from "../../globalStyles";

const moveFromLeft = keyframes`
    0%{left:-9000px}to{left:0}
`;

const fadedIn = keyframes`
   0%{opacity:0}to{opacity:1}
`;

const moveFromRight = keyframes`
  0%{right:-9000px}to{right:0}
`;

export const SliderWrapper = styled.div`
  @media (min-width: 1200px) {
    height: 420px;
  }
  position: relative;
`;

export const Heading = styled.div`
  font-weight: 700;
  color: #34bcec;
  font-size: 18px;
  margin: 0 auto 2.3%;
  padding: 0;
  line-height: 0.9;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

export const SubHeading = styled.div`
  color: #333e48;
  font-size: 48px;
  line-height: 1.3;
  margin: 0 auto 3%;
  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

export const ImageLayerSlide = styled.div`
  height: 100%;
  position: relative;
`;

export const BackgroundCover = styled.span`
  position: relative;
  display: block;
  padding-top: 36.61458333333334%;
  @media (max-width: 767px) {
    padding-top: 50.78219013237064%;
  }
  ${(props) =>
    props.active
      ? css`
          animation-name: ${fadedIn};
          animation-delay: 0s;
          animation-iteration-count: 1;
          animation-fill-mode: backwards;
          animation-duration: 1s;
        `
      : ""}
`;

export const SLiderContainer = styled.div`
  left: 0;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  opacity: ${(props) => (props.active ? "1" : "0")};

  ${Heading} {
    ${(props) =>
      props.active
        ? css`
            animation-name: ${fadedIn};
            animation-delay: 0.3s;
          `
        : ""}
  }
  ${SubHeading} {
    ${(props) =>
      props.active
        ? css`
            animation-name: ${moveFromLeft};
            animation-delay: 0.3s;
          `
        : ""}
  }
  ${SubHeading} {
    ${(props) =>
      props.active
        ? css`
            animation-name: ${moveFromLeft};
            animation-delay: 0.3s;
          `
        : ""}
  }
  ${ImageLayerSlide} {
    ${(props) =>
      props.active
        ? css`
            animation-iteration-count: 1;
            animation-fill-mode: backwards;
            animation-duration: 1s;
            animation-name: ${moveFromRight};
            animation-delay: 0.3s;
          `
        : ""}
  }
  ${BackgroundCover} {
    ${(props) =>
      props.active
        ? css`
            animation-name: ${fadedIn};
            animation-delay: 0s;
            animation-iteration-count: 1;
            animation-fill-mode: backwards;
            animation-duration: 1s;
          `
        : ""}
  }
`;

export const SliderContent = styled(Container)`
  background-color: transparent;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: auto;
  ${Heading} {
    ${(props) =>
      props.active
        ? css`
            animation-name: ${fadedIn};
            animation-delay: 0.3s;
          `
        : ""}
  }
  ${SubHeading} {
    ${(props) =>
      props.active
        ? css`
            animation-name: ${moveFromLeft};
            animation-delay: 0.3s;
          `
        : ""}
  }
  ${ImageLayerSlide} {
    ${(props) =>
      props.active
        ? css`
            animation-iteration-count: 1;
            animation-fill-mode: backwards;
            animation-duration: 1s;
            animation-name: ${moveFromRight};
            animation-delay: 0.3s;
          `
        : ""}
  }
`;

export const ContainerTextBox = styled.div`
  top: 20%;
  left: 40%;
  text-align: left;
  transform: translate(-45%, -15%);
  position: absolute;
  z-index: 99;
  padding: 0;
  @media (min-width: ${Breakpoint.Mobile}) {
    left: 41%;
  }
  @media (min-width: ${Breakpoint.Tablet}) {
    left: 52%;
  }
  @media (min-width: ${Breakpoint.Desktop}) {
    left: 43%;
  }

  > div {
    background: transparent;
    text-transform: uppercase;
    font-family: Open Sans, "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    animation-duration: 1s;
    animation-fill-mode: backwards;
    animation-iteration-count: 1;
    position: relative;
  }
`;

export const ImageLayerBox = styled.div`
  top: 0%;
  left: 95%;
  transform: translate(-95%, -0%);
  display: none;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 400px;
    left: 100%;
  }
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1025px) {
    width: 520px;
  }
  position: absolute;
`;

export const IMGContent = styled.img`
  max-width: 100%;
  height: auto;
  border: none;
  vertical-align: middle;
  backface-visibility: hidden;
  transform: translateZ(0);
  object-position: center center;
`;

export const IMGBackgroundCover = styled.img`
  object-fit: cover;
  height: 100%;
  font-family: "object-fit:cover";
  filter: blur(0);
  object-position: center center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  opacity: 1;
  max-width: 100%;
  border: none;
  vertical-align: middle;
  backface-visibility: hidden;
  transform: translateZ(0);
  @media (max-width: 767px) {
    display: none;
  }
`;

export const IIMGBackgroundCoverMobile = styled(IMGBackgroundCover)`
  display: none;
  @media (max-width: 767px) {
    display: unset;
  }
`;
