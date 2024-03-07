const PrimaryButton = (props) => {
  return (
    <button
      {...props}
      className="buttonPadding bg-[#E01E5A] px-1 md:px-3 lg:px-6 py-1 md:py-2 font-semibold text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
    >
      {props.title}
    </button>
  );
};

export default PrimaryButton;
