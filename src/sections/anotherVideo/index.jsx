import SectionContainer from "../../components/Layout/SectionContainer";
import Heading from "../../components/Heading";
import HeadingPara from "../../components/Heading/HeadingPara";
import Emphasis from "../../components/Text/Emphasis";
// import RadialBlur from "./RadialBlur";
import lanaFlixVideo from '../../assets/video/lanaFlix.mp4'
const VideoToPlay = () => (
    <div className="video-container">
        <video
            className="responsive-video"

            autoPlay
            controls
        >
            <source src={lanaFlixVideo} type="video/mp4" />
        </video>

    </div>
);

function Video() {
    return (
        <div className="relative mt-10" data-aos="fade-up">
            <div className="relative z-10" >
                <SectionContainer>
                    {/* <Heading>
                        LanaFlix
                        <Emphasis></Emphasis>
                    </Heading>
                    <HeadingPara>
                        Watch our project here{" "}
                    </HeadingPara> */}
                    <VideoToPlay />
                </SectionContainer>
            </div>
        </div>
    );
}

export default Video;