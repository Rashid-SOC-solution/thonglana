const Heading = ({ children }) => {
  return (
    <h3 className="font-extrabold text-3xl md:text-4xl lg:text-5xl leading-8 md:leading-[55px]">
      {children}
    </h3>
  );
};

export default Heading;
