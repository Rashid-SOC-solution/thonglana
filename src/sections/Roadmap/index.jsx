import SectionContainer from "../../components/Layout/SectionContainer";
import Heading from "../../components/Heading";
import HeadingPara from "../../components/Heading/HeadingPara";
import Emphasis from "../../components/Text/Emphasis";
import RoadmapTimeline from "./Timeline";
import RadialBlur from "./RadialBlur";

function Roadmap() {
  return (
    <section id="roadmap">
    <div className="relative mt-20">
      <div className="relative z-10" data-aos="fade-up">
        <SectionContainer>
          <Heading >ThongMap</Heading>
          <HeadingPara>
          Navigating the cheeky terrain of humor with pit stops at laugh-out-loud landmarks and meme-filled milestones. $TLana your roadmap to a giggly adventure!
          </HeadingPara>
          <RoadmapTimeline />
        </SectionContainer>
      </div>
      <RadialBlur />
    </div>
    </section>
  );
}

export default Roadmap;
