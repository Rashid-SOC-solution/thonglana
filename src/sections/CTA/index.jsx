import SectionContainer from "../../components/Layout/SectionContainer";

const JoinDiscordButton = () => {
  return (
    <button className="bg-[#1D93D2] flex items-center px-2 mt-5 md:mt-0 md:px-3 lg:px-6 py-1 md:py-2 font-semibold text-white rounded-full hover:bg-opacity-70 transition-all duration-200">
      <div style={{ marginRight: "10px" }}>Join Telegram </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="26"
        fill="currentColor"
        class="bi bi-telegram"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
      </svg>
    </button>
  );
};

function CTA() {
  return (
    <div className="relative z-10" data-aos="fade-up">
      <SectionContainer>
        <div className="p-5 md:p-10 py-5 md:py-16 relative flex flex-col md:flex-row justify-center md:justify-between md:items-center w-full bg-[#dddddd6b] dark:bg-[#191230]/50 rounded-2xl">
          <div className="">
            <h4 className="font-extrabold text-3xl md:text-5xl md:max-w-xl text-left">
              Join ThongLana's{" "}
              <span className="text-[#1D93D2]"> Telegram </span>
              <p className="text-lg md:text-xl font-normal my-5">
                Where laughter is the only currency, and the memes flow faster
                than group chat replies – be part of the hilarity, one
                notification at a time!
              </p>
            </h4>
          </div>
          <div>
            <JoinDiscordButton />
          </div>
        </div>

        {/* <img className="" src="/telegram.png" /> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={140}
          height={87}
          fill="none"
          className="absolute top-0 right-40 hidden md:flex"
        >
          <path
            fill="#C8DAEA"
            d="m34.858 35.331 15.267 43.766s1.908 4.094 3.952 4.094S86.52 50.437 86.52 50.437l33.805-67.626-84.922 41.223-.545 11.297Z"
          />
          <path
            fill="#A9C6D8"
            d="m55.1 46.554-2.93 32.259s-1.227 9.885 8.314 0c9.542-9.885 18.675-17.507 18.675-17.507"
          />
          <path
            fill="#fff"
            d="M35.133 36.892 3.73 26.295s-3.753-1.577-2.544-5.154c.249-.737.75-1.365 2.252-2.443 6.958-5.023 128.792-50.378 128.792-50.378s3.44-1.2 5.469-.402c.502.161.953.457 1.308.858.356.401.601.893.713 1.425.219.939.311 1.905.272 2.87-.009.836-.107 1.61-.181 2.824-.742 12.4-22.947 104.946-22.947 104.946s-1.329 5.415-6.089 5.6a8.45 8.45 0 0 1-3.427-.603 8.696 8.696 0 0 1-2.927-1.942c-9.34-8.322-41.626-30.794-48.76-35.737a1.39 1.39 0 0 1-.398-.434 1.444 1.444 0 0 1-.188-.565c-.1-.521.448-1.166.448-1.166s56.217-51.755 57.713-57.188c.116-.421-.322-.629-.909-.444-3.734 1.422-68.462 43.758-75.605 48.43a3.328 3.328 0 0 1-1.588.1Z"
          />
        </svg>
      </SectionContainer>
    </div>
  );
}

export default CTA;
