import { ArrowRight } from "lucide-react";

const OutlineButtonArrow = (props) => {
  return (
    <button
      {...props}
      className="border-2 border-[#E01E5A] hover:border-transparent px-3 lg:px-6 py-2 font-semibold text-base rounded-full flex items-center transition-all duration-200"
    >
      <span className="text-center w-full">{props.title}</span>
      <ArrowRight className="mt-[2px] ml-2" />
    </button>
  );
};

export default OutlineButtonArrow;
