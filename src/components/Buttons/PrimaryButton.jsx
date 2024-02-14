const PrimaryButton = (props) => {
  return (
    <button
      {...props}
      className="bg-[#E01E5A] px-6 py-2 font-semibold text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
    >
      {props.title}
    </button>
  );
};

export default PrimaryButton;
