import SectionContainer from "../../components/Layout/SectionContainer";
import Heading from "../../components/Heading";
import HeadingPara from "../../components/Heading/HeadingPara";
import Emphasis from "../../components/Text/Emphasis";
import RadialBlur from "./RadialBlur";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

function Video() {
  return (
    <div className="relative mt-10" data-aos="fade-up">
      <div className="relative z-10" >
        <SectionContainer>
          <Heading>
          LanaFlix
            <Emphasis></Emphasis>
          </Heading>
          <HeadingPara>
            Watch our project here{" "}
          </HeadingPara>
          <YoutubeEmbed embedId="rokGy0huYEA" />
        </SectionContainer>
      </div>
      <RadialBlur />
    </div>
  );
}

export default Video;
