import { ChevronDown } from "lucide-react";

import SectionContainer from "../../components/Layout/SectionContainer";
import Heading from "../../components/Heading";
import HeadingPara from "../../components/Heading/HeadingPara";
import Emphasis from "../../components/Text/Emphasis";
import Metamask from "../../assets/svgs/Metamask";
import GreenCheck from "../../assets/svgs/GreenCheck";
import SwapIcon from "../../assets/svgs/Swap";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Star from "../../assets/svgs/Star";

const BlueButton = ({ title }) => {
  return (
    <button className="text-white bg-[#037DD6] w-full py-2 rounded-full font-bold my-1">
      {title}
    </button>
  );
};

const GrayButton = ({ title }) => {
  return (
    <button className="bg-[#E9E9E9] dark:bg-[#2C2C2C] w-full py-2 rounded-full font-bold my-1">
      {title}
    </button>
  );
};

const Content1 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 h-[350px]">
      <div>
        <Metamask />
      </div>
      <h5 className="text-lg font-extrabold">Metamask</h5>
      <p className="text-sm">A crypto wallet for DeFi & NFTs</p>
      <div className="mt-5 max-w-[270px]">
        <BlueButton title="Create New Wallet" />
        <GrayButton title="Use Secret Recovery Phrase" />
      </div>
    </div>
  );
};

const Content2 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8 h-[350px]">
      <div className="my-10">
        <GreenCheck />
      </div>
      <h5 className="text-lg font-extrabold max-w-60">
        3.2 SOL was successfully sent to Wallet!
      </h5>

      <div className="mt-5 text-sm text-[#037DD6] underline cursor-pointer font-semibold max-w-[270px]">
        <a className="">View Transaction</a>
      </div>
    </div>
  );
};

const Content3 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 h-[350px]">
      <div className="relative flex flex-col">
        <div className="bg-[#F0F0F0] dark:bg-[#221B38] p-5 text-sm rounded-xl flex flex-col justify-start w-full min-w-[250px]">
          <div className="flex items-center">
            You are paying <img className="h-5 w-5 mx-2" src="/solana.png" />
            <span className="font-bold">SOL</span>{" "}
            <ChevronDown className="ml-1" size={14} />
          </div>
          <div className="flex items-center mt-3 font-bold">
            <img className="h-10 w-10 mr-2" src="/solana.png" /> Solana{" "}
            <div className="w-full flex justify-end">0</div>
          </div>
          <div></div>
        </div>

        <div className="bg-[#F0F0F0] dark:bg-[#221B38] mt-5 p-5 text-sm rounded-xl flex flex-col justify-start w-full min-w-[250px]">
          <div className="flex items-center">
            You are paying <img className="h-5 w-5 mx-2" src="/thonglana.png" />
            <span className="font-bold">SOL</span>{" "}
            <ChevronDown className="ml-1" size={14} />
          </div>
          <div className="flex items-center mt-3 font-bold">
            <img className="h-10 w-10 mr-2" src="/thonglana.png" /> Solana{" "}
            <div className="w-full flex justify-end">0</div>
          </div>
          <div></div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] dark:bg-[#433D5B] w-10 h-10 flex justify-center items-center rounded-full">
          <SwapIcon />
        </div>
      </div>
      <div className="mt-5 max-w-[270px] w-full">
        <BlueButton title="Swap" />
      </div>
    </div>
  );
};

const data = [
  {
    id: "1",
    heading: "Create a wallet",
    para: "Nisi et volutpat pulvinar purus. Consequat sit mauris eget sed feugiat. Tellus non ut nibh eleifend maecenas erat. ",
    content: <Content1 />,
  },
  {
    id: "2",
    heading: "Deposit $SOL",
    para: "Nisi et volutpat pulvinar purus. Consequat sit mauris eget sed feugiat. Tellus non ut nibh eleifend maecenas erat. ",
    content: <Content2 />,
  },
  {
    id: "2",
    heading: "Buy Thonglana",
    para: "Nisi et volutpat pulvinar purus. Consequat sit mauris eget sed feugiat. Tellus non ut nibh eleifend maecenas erat. ",
    content: <Content3 />,
  },
];

const Card = ({ heading, para, content }) => {
  return (
    <div className="bg-white/50 dark:bg-[#0D0720]/50 backdrop-blur-md rounded-2xl overflow-hidden">
      <div className="bg-[#0D0720] dark:bg-white h-10 flex items-center space-x-2">
        <div className="ml-3 h-3 w-3 bg-[#FD5F56] rounded-full"></div>
        <div className="h-3 w-3 bg-[#F6B53C] rounded-full"></div>
        <div className="h-3 w-3 bg-[#24C53E] rounded-full"></div>
      </div>
      {content}
      <div className="rounded-2xl p-7">
        <h4 className="font-extrabold text-3xl mb-5">{heading}</h4>
        <p>{para}</p>
      </div>
    </div>
  );
};

function Buy() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <SectionContainer>
          <Heading>
            How to buy
            <Emphasis> Thonglana </Emphasis>
            Token
          </Heading>
          <HeadingPara>
            Nisi et volutpat pulvinar purus. Consequat sit mauris eget sed
            feugiat. Tellus non ut nibh eleifend maecenas erat.{" "}
          </HeadingPara>

          <div className="grid px-7 md:px-0 gird-col-1 md:grid-cols-3 my-20 gap-5">
            {data.map((item) => (
              <div key={`higlights-${item.id}`}>
                <Card
                  heading={item.heading}
                  para={item.para}
                  content={item.content}
                />
              </div>
            ))}
          </div>
          <PrimaryButton title="Copy Token Address" />
        </SectionContainer>
      </div>

      <div className="absolute -top-36  md:top-10 left-5 z-0">
        <Star />
      </div>
    </div>
  );
}

export default Buy;
