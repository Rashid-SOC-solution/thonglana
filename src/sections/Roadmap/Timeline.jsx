import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <section className="ps-timeline-sec -top-24">
      <div className="container">
        <ol className="ps-timeline">
          <li>
            <div className="img-handler-bot">
              <p className="font-semibold">Founding of Thonglana meme token</p>
            </div>
            <div className="ps-top">
              <p className="pl-16 font-extrabold text-2xl">2020</p>
            </div>
            <span className="ps-sp-bot flex justify-center items-center">
              <div className="h-3 w-3 bg-[#E01E5A] rounded-full"></div>
            </span>
          </li>
          <li className="">
            <div className="img-handler-top">
              <p className="font-semibold">Founding of Thonglana meme token</p>
            </div>
            <div className="ps-bot">
              <p className="pl-16 font-extrabold text-2xl">2021</p>
            </div>
            <span className="ps-sp-top flex justify-center items-center">
              <div className="h-3 w-3 bg-[#E01E5A] rounded-full"></div>
            </span>
          </li>

          <li>
            <div className="img-handler-bot">
              <p className="font-semibold">Founding of Thonglana meme token</p>
            </div>
            <div className="ps-top">
              <p className="pl-16 font-extrabold text-2xl">2022</p>
            </div>
            <span className="ps-sp-bot flex justify-center items-center">
              <div className="h-3 w-3 bg-[#E01E5A] rounded-full"></div>
            </span>
          </li>
          <li>
            <div className="img-handler-top">
              <p className="font-semibold">Founding of Thonglana meme token</p>
            </div>
            <div className="ps-bot">
              <p className="pl-16 font-extrabold text-2xl">2023</p>
            </div>
            <span className="ps-sp-top flex justify-center items-center">
              <div className="h-3 w-3 bg-[#E01E5A] rounded-full"></div>
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Timeline;
