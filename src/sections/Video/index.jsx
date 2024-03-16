import SectionContainer from "../../components/Layout/SectionContainer";
import Heading from "../../components/Heading";
import HeadingPara from "../../components/Heading/HeadingPara";
import Emphasis from "../../components/Text/Emphasis";
import RadialBlur from "./RadialBlur";
const VideoToPlay = ({ embedId }) => (
  <div>
    <div className="pinataVideo">
      <video width="100%" autoPlay controls>
        <source src="https://moccasin-written-gorilla-328.mypinata.cloud/ipfs/Qmbtq7a88CVFHA8TacVH79WZPs1CryFtLe5eksSy1zn6Zm" />
      </video>
    </div>
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
          <VideoToPlay embedId="XMnmlpWngf4" />
        </SectionContainer>
      </div>
      <RadialBlur />
    </div>
  );
}

export default Video;