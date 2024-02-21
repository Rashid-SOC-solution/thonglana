import SectionContainer from "../../components/Layout/SectionContainer";

const JoinDiscordButton = () => {
  return (
    <button className="bg-[#5865F2] flex items-center px-2 mt-5 md:mt-0 md:px-3 lg:px-6 py-1 md:py-2 font-semibold text-white rounded-full hover:bg-opacity-70 transition-all duration-200">
      <div>Join Discord </div>
      <svg
        className="ml-2"
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={16}
        fill="none"
      >
        <path
          fill="#fff"
          d="M16.095 2.09a15.475 15.475 0 0 0-3.92-1.232c-.169.306-.366.716-.502 1.043-1.462-.22-2.91-.22-4.344 0A11.14 11.14 0 0 0 6.82.858a15.424 15.424 0 0 0-3.922 1.235C.417 5.842-.256 9.498.08 13.101a15.671 15.671 0 0 0 4.807 2.464c.387-.533.732-1.1 1.03-1.696a10.117 10.117 0 0 1-1.622-.79c.136-.1.27-.205.398-.314 3.126 1.463 6.523 1.463 9.612 0 .13.109.263.214.398.315a10.09 10.09 0 0 1-1.625.79c.297.596.641 1.164 1.03 1.696a15.64 15.64 0 0 0 4.81-2.465c.395-4.177-.674-7.8-2.824-11.01Zm-9.751 8.795c-.939 0-1.708-.876-1.708-1.943 0-1.067.753-1.945 1.708-1.945s1.724.876 1.708 1.945c.001 1.067-.753 1.943-1.708 1.943Zm6.312 0c-.938 0-1.708-.876-1.708-1.943 0-1.067.753-1.945 1.708-1.945s1.725.876 1.708 1.945c0 1.067-.753 1.943-1.708 1.943Z"
        />
      </svg>
    </button>
  );
};

function CTA() {
  return (
    <div className="relative z-10">
      <SectionContainer>
        <div className="p-5 md:p-10 py-5 md:py-16 relative flex flex-col md:flex-row justify-center md:justify-between md:items-center w-full bg-white/50 dark:bg-[#191230]/50 rounded-2xl">
          <div className="">
            <h4 className="font-extrabold text-3xl md:text-5xl md:max-w-xl text-left">
              Be a part of our amazing{" "}
              <span className="text-[#5865F2]"> discord </span> community
            </h4>
          </div>
          <div>
            <JoinDiscordButton />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={186}
          height={155}
          fill="none"
          className="absolute top-0 right-40 hidden md:flex"
        >
          <g clipPath="url(#a)">
            <path
              fill="#fff"
              d="M256.939-37.404a190.327 190.327 0 0 0-38.688-32.521c-3.361 2.668-7.542 6.398-10.631 9.464-15.557-9.407-32.001-16.254-49.331-20.54 0-4.353-.349-9.97-.84-14.242a189.705 189.705 0 0 0-50.385-4.525C61.17-68.93 36.249-30.598 23.028 11.913 35.902 33.645 50.48 49.661 65.972 62.62a147.059 147.059 0 0 0 19.71-14.388 124.534 124.534 0 0 1-14.68-16.627 99.174 99.174 0 0 0 6-1.691C105.589 61.299 144.16 77.36 186.15 75.36c.964 1.845 1.976 3.67 3.027 5.45a124.223 124.223 0 0 1-22.184 1.297 146.544 146.544 0 0 0 3.674 24.125c20.128 1.873 41.781.943 66.281-5.247 24.233-45.573 29.225-91.755 19.99-138.39ZM104.627 16.36C93.971 11.923 89.374-1.665 94.418-13.78c5.045-12.116 17.747-18.52 28.591-14.005 10.844 4.515 15.441 18.102 10.202 30.157-5.028 12.123-17.74 18.503-28.584 13.988Zm71.681 29.846c-10.657-4.437-15.254-18.025-10.21-30.14 5.045-12.115 17.747-18.52 28.591-14.005 10.844 4.515 15.441 18.102 10.203 30.158-5.045 12.115-17.741 18.502-28.584 13.987Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path
                fill="#fff"
                d="m90-151.511 215.754 89.836-89.836 215.754L.164 64.243z"
              />
            </clipPath>
          </defs>
        </svg>
      </SectionContainer>
    </div>
  );
}

export default CTA;
