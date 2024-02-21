import React, { useState } from "react";
import SectionContainer from "../../components/Layout/SectionContainer";
import Heading from "../../components/Heading";
import HeadingPara from "../../components/Heading/HeadingPara";
import Emphasis from "../../components/Text/Emphasis";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I use this feature?",
    answer: "Here is how you use it...",
  },
  { question: "What is the return policy?", answer: "Our return policy is..." },
  { question: "What is the return policy?", answer: "Our return policy is..." },
  { question: "What is the return policy?", answer: "Our return policy is..." },
  { question: "What is the return policy?", answer: "Our return policy is..." },
  { question: "What is the return policy?", answer: "Our return policy is..." },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/50 dark:bg-[#191230]/50 rounded-2xl p-5">
      <h3
        className="py-4 cursor-pointer flex justify-between items-center text-lg font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {faq.question}
        <span>
          {isOpen ? <ChevronUp className="text-[#E01E5A]" /> : <ChevronDown />}
        </span>
      </h3>
      {isOpen && <p className="text-left py-4">{faq.answer}</p>}
    </div>
  );
};

function FAQs() {
  return (
    <div className="relative">
      <div className="relative z-10 mb-20 md:mb-40">
        <SectionContainer>
          <Heading>
            Frequently
            <Emphasis> Asked </Emphasis>Questions
          </Heading>
          <HeadingPara>
            Nisi et volutpat pulvinar purus. Consequat sit mauris eget sed
            feugiat. Tellus non ut nibh eleifend maecenas erat.{" "}
          </HeadingPara>
          <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}

export default FAQs;
