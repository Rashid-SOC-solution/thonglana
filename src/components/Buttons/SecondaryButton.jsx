const SecondaryButton = (props) => {
  const RightIcon = props.rightIcon;

  return (
    <button
      {...props}
      className="bg-black/15 dark:bg-white/15 hover:opacity-70 px-1 md:px-3 lg:px-6 py-1 md:py-2 font-semibold text-base rounded-full flex items-center transition-all duration-200"
    >
      <span className="text-center w-full">{props.title}</span>
      <RightIcon />
    </button>
  );
};

export default SecondaryButton;
