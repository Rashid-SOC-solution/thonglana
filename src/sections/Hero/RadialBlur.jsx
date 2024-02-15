function RadialBlur() {
  return (
    <div className="relative w-full flex md:hidden">
      <div className="absolute bg-[#E01E5A] filter blur-[125px] w-[150px] h-[120px] left-10 top-10 z-[]"></div>
      <div className="absolute bg-[#AE1EE0] filter blur-[125px] w-[150px] h-[120px] left-10 top-10 z-[]"></div>
    </div>
  );
}

export default RadialBlur;
