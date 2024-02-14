const SecondaryButton = (props) => {
  const RightIcon = props.rightIcon;

  return (
    <button
      {...props}
      className="bg-black/15 hover:opacity-70 px-6 py-2 font-semibold rounded-full flex items-center transition-all duration-200"
    >
      <span>{props.title}</span>
      <RightIcon />
    </button>
  );
};

export default SecondaryButton;
