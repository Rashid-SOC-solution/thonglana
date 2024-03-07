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
import phantom from '/phantom.png'
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";
import image4 from "../../assets/images/image-4.png";
import image6 from "../../assets/images/image-6.png";


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
      <div >
        <img className="mt-10" src={phantom} alt="" />
      </div>
      <h5 className="text-lg font-extrabold mt-3">Phantom Wallet</h5>
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
        <img className="mt-10" src={image2} alt="" />
      </div>
    </div>
  );
};

const Content3 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 h-[350px]">
      <div className="mt-5 max-w-[270px] w-full">
        <div className="my-10">
          <img className="mt-10" src={image3} alt="" />
        </div>

        <BlueButton title="Swap" />
      </div>
    </div>
  );
};

const Content4 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 h-[350px]">
      <div className="mt-5 max-w-[270px] w-full">
        <div className="my-10">
          <img className="mt-10" src={image4} alt="" />
        </div>
      </div>
    </div>
  );
};

const Content5 = () => {
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
            You are paying <img className="h-5 w-5 mx-2" src={image6} />
            <span className="font-bold">SOL</span>{" "}
            <ChevronDown className="ml-1" size={14} />
          </div>
          <div className="flex items-center mt-3 font-bold">
            <img className="h-10 w-10 mr-2" src={image6} /> Solana{" "}
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
const Content6 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 h-[350px]">
      <div className="mt-5 max-w-[270px] w-full">
        <div className="my-10">
          <img className="mt-10" src={image6} alt="" />
        </div>

      </div>
    </div>
  );
};

const data = [
  {
    id: "1",
    heading: "Open a Phantom Wallet Account",
    para: "Start by opening a Phantom Wallet account. If you don't have one, you can easily set it up. Phantom is a user-friendly Solana wallet available as a browser extension.",
    content: <Content1 />,
  },
  {
    id: "2",
    heading: "Visit the Fluxbeam Swap Platform",
    para: "Go to https://fluxbeam.xyz/app/swap. This platform allows you to swap various tokens, including $TLana. The user interface is intuitive and engaging.",
    content: <Content2 />,
  },
  {
    id: "3",
    heading: "Alternative Platform - Jup.ag",
    para: "Alternatively, you can use https://jup.ag for the $TLana swap. Choose the platform that suits your preferences for a more enjoyable experience.",
    content: <Content3 />,
  },
  {
    id: "4",
    heading: "Connect Your Phantom Wallet",
    para: "Once on the swap platform, connect your Phantom Wallet to the website. This ensures that you can securely access your Solana assets for the swap.",
    content: <Content4 />,
  },
  {
    id: "5",
    heading: "Use Solana to Swap for $TLana",
    para: "Deposit Solana into your connected wallet, and then use it to swap for $TLana. Follow the on-screen instructions to complete the transaction. The process is designed to be interactive and entertaining.",
    content: <Content5 />,
  },
  {
    id: "6",
    heading: "Have Fun with Your $TLana",
    para: "Congratulations! You've successfully swapped Solana for $TLana. Now, you can have fun exploring the possibilities and features that come with $TLana.",
    content: <Content6 />,
  },
];

const Card = ({ heading, para, content }) => {
  const parsePara = (para) => {
    return para.replace(/\bhttps?:\/\/\S+/gi, match => {
      return `<a href="${match}" style="color: #E9618B;">${match}</a>`;
    });
  };

  return (

    <div>
      <div className="bg-white/50 dark:bg-[#120C27]/50 backdrop-blur-md rounded-2xl overflow-hidden mt-20" data-aos="fade-up">
        <div className="bg-[#0D0720] dark:bg-white h-10 flex items-center space-x-2">
          <div className="ml-3 h-3 w-3 bg-[#FD5F56] rounded-full"></div>
          <div className="h-3 w-3 bg-[#F6B53C] rounded-full"></div>
          <div className="h-3 w-3 bg-[#24C53E] rounded-full"></div>
        </div>
        {content}

      </div>
      <div className="rounded-2xl p-7">
        <h4 className="font-extrabold text-2xl mb-5">{heading}</h4>
        <p dangerouslySetInnerHTML={{ __html: parsePara(para) }}></p>
      </div>
    </div>
  );
};

function Buy() {
  return (
    <div className="relative mt-20">
      <div className="relative z-10" data-aos="fade-up">
        <SectionContainer>
          <Heading>
            How to buy
            <Emphasis> Thonglana </Emphasis>
            Token
          </Heading>
          <HeadingPara>
            Ready to hop into the Thonglana revolution? Snag your piece of the
            action and make a leap for the bunnies "Buy ThongLana tokens now!
            It's not just a purchase; it's a stylish investment in the future,
            wrapped in a cheeky thong of financial flair! 🐇
            #ThongLanaMadness"
          </HeadingPara>

          <div className="grid px-7 md:px-0 gird-col-1 md:grid-cols-3 my-0 gap-5" data-aos="fade-up">
            {data.map((item, index) => (
              <div key={`higlights-${item.id}`} className={index >= data.length - 3 ? "marginCss" : ""}>
                <Card
                  heading={item.heading}
                  para={item.para}
                  content={item.content}
                />
              </div>
            ))}
          </div>
          <PrimaryButton className="" title="Copy Token Address" />
        </SectionContainer>
      </div>

      <div className="absolute top-50  md:bottom-96 left-20 z-[-3]">
        <div class="absolute bg-[#AE1EE0] filter blur-[125px] w-[270px] h-[220px] right-10 bottom-[150px]"></div>
        <div class="absolute bg-[#E01E5A] filter blur-[125px] w-[270px] h-[220px] right-10 bottom-[50px]"></div>
        <Star />
      </div>
    </div>
  );
}

export default Buy;
