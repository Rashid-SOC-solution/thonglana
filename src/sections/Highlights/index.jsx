import SectionContainer from "../../components/Layout/SectionContainer";
import Heading from "../../components/Heading";
import HeadingPara from "../../components/Heading/HeadingPara";
import Emphasis from "../../components/Text/Emphasis";
import RadialBlur from "./RadialBlur";

const data = [
  {
    id: "1",
    heading: "Highlight 1",
    para: "Nisi et volutpat pulvinar purus. Consequat sit mauris eget sed feugiat. Tellus non ut nibh eleifend maecenas erat. ",
  },
  {
    id: "2",
    heading: "Highlight 2",
    para: "Nisi et volutpat pulvinar purus. Consequat sit mauris eget sed feugiat. Tellus non ut nibh eleifend maecenas erat. ",
  },
  {
    id: "3",
    heading: "Highlight 3",
    para: "Nisi et volutpat pulvinar purus. Consequat sit mauris eget sed feugiat. Tellus non ut nibh eleifend maecenas erat. ",
  },
];

const Card = ({ id, heading, para }) => {
  return (
    <div className="bg-white/50 dark:bg-[#0D0720]/50 rounded-2xl p-7">
      <div className="mb-5 border-[#E01E5A] border font-extrabold p-2 rounded-full w-10 flex justify-center items-center">
        {id}
      </div>
      <h4 className="font-extrabold text-3xl mb-5">{heading}</h4>
      <p>{para}</p>
    </div>
  );
};

function Highlights() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <SectionContainer>
          <Heading>
            Exciting thonglana <Emphasis>highlights</Emphasis>
          </Heading>
          <HeadingPara>
            Nisi et volutpat pulvinar purus. Consequat sit mauris eget sed
            feugiat. Tellus non ut nibh eleifend maecenas erat.{" "}
          </HeadingPara>

          <div className="grid px-7 md:px-0 gird-col-1 md:grid-cols-3 text-start my-20 gap-5">
            {data.map((item) => (
              <div key={`higlights-${item.id}`}>
                <Card id={item.id} heading={item.heading} para={item.para} />
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>
      <RadialBlur />
    </div>
  );
}

export default Highlights;
