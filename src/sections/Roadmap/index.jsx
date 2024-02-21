import SectionContainer from "../../components/Layout/SectionContainer";
import Heading from "../../components/Heading";
import HeadingPara from "../../components/Heading/HeadingPara";
import Emphasis from "../../components/Text/Emphasis";
import RoadmapTimeline from "./Timeline";
import RadialBlur from "./RadialBlur";

function Roadmap() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <SectionContainer>
          <Heading>Thonglana Roadmap</Heading>
          <HeadingPara>
            Nisi et volutpat pulvinar purus. Consequat sit mauris eget sed
            feugiat. Tellus non ut nibh eleifend maecenas erat.{" "}
          </HeadingPara>
          <RoadmapTimeline />
        </SectionContainer>
      </div>
      <RadialBlur />
    </div>
  );
}

export default Roadmap;
