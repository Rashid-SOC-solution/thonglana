import React, { useState } from "react";
import SectionContainer from "../../components/Layout/SectionContainer";
import Heading from "../../components/Heading";
import HeadingPara from "../../components/Heading/HeadingPara";
import Emphasis from "../../components/Text/Emphasis";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is ThongLana?",
    answer: "ThongLana is a highly intelligent AI rabbit with a neural link implant by Elon Musk, known for its unique fashion choice of wearing a thong, symbolizing the fusion of technology and style.",
  },
  { question: "How does ThongLana combine technology and fashion?", answer: "By supporting a neural link and a thong, ThongLana merges advanced cognitive abilities with a playful fashion sense, representing futuristic enhancements with a sense of humor." },
  { question: "What is Thongonomics?", answer: "Thongonomics is the concept behind ThongLana tokens, blending investment with humor and style, embodying the project's innovative and cheeky spirit." },
  { question: "How can I buy ThongLana tokens?", answer: "ThongLana tokens can be purchased through instructions on the ThongLana website, offering a unique investment in a future filled with laughter and bold fashion." },
  { question: "What is LanaFlix and ThongMap?", answer: "LanaFlix likely features humorous content related to ThongLana, while ThongMap provides a guide to a world of humorous landmarks and meme-filled adventures in the ThongLana universe." },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/50 dark:bg-[#191230]/50 rounded-2xl p-5">
      <h3
        className="py-4 cursor-pointer flex justify-between items-center text-lg font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-left">
          {faq.question}
        </p>
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
    <section id="faqs">
    <div className="relative mt-12">
      <div className="relative z-10 mb-20 md:mb-40" data-aos="fade-up">
        <SectionContainer>
          <Heading>
            Frequently
            <Emphasis> Asked </Emphasis>Questions
          </Heading>
          <HeadingPara>
            Find answers to common queries about Thonglana on our FAQ page{" "}
          </HeadingPara>
          <div className="gap-5 grid grid-cols-1 " data-aos="fade-up">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
        </SectionContainer>
      </div>
    </div>
    </section>
  );
}

export default FAQs;
