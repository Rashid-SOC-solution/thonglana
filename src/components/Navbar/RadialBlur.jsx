function RadialBlur() {
  return (
    <div className="relative w-full hidden md:flex">
      <div className="absolute bg-[#E01E5A] filter blur-[125px] w-[150px] md:w-[450px] h-[120] md:h-[350px] left-96 top-[-320px] z-[]"></div>
      <div className="absolute bg-[#AE1EE0] filter blur-[125px] w-[150px] md:w-[450px] h-[120] md:h-[350px] left-52 top-[-127px] z-[]"></div>
    </div>
  );
}

export default RadialBlur;
