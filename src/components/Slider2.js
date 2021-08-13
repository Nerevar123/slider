import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/open-animation/open-animation.scss";
import a from "../images/a.png";
import b from "../images/b.png";
import c from "../images/c.png";
import d from "../images/d.png";
// import AwesomeSliderStyles from "./styles.module.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "./slider2.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = () => {
  return (
    // <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
    //   <div data-src={a} />
    //   <div data-src={b} />
    //   <div data-src={c} />
    //   <div data-src={d} />
    // </AwesomeSlider>

    <AutoplaySlider
      play={false}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      <div data-src={a} />
      <div data-src={b} />
      <div data-src={c} />
      <div data-src={d} />
    </AutoplaySlider>
  );
};
export default slider;
