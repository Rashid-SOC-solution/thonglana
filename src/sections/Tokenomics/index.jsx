import React from "react";
import { Doughnut } from "react-chartjs-2";
import { CategoryScale, Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "chart.js/auto";

import RadialBlur from "./RadialBlur";
import { useTheme } from "../../contexts/themeContext";

Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6"],
  datasets: [
    {
      label: "Dataset 1",
      data: [300, 50, 100, 300, 50, 100],
      backgroundColor: [
        "#992DF2",
        "#3859EE",
        "#CC4DB8",
        "#F26C8C",
        "#FCA482",
        "#8BE0DD",
      ],
      hoverBackgroundColor: [
        "#992DF2",
        "#3859EE",
        "#CC4DB8",
        "#F26C8C",
        "#FCA482",
        "#8BE0DD",
      ],
      borderColor: "transparent",
      borderWidth: 0,
    },
  ],
  text: "Total: 9000+",
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const TileData = [
  {
    id: "1",
    text: "11% Team",
    amount: "$1,500",
    color: "#992DF2",
  },
  {
    id: "2",
    text: "24% Team",
    amount: "$1,500,000",
    color: "#3859EE",
  },
  {
    id: "3",
    text: "10% Team",
    amount: "$1,500",
    color: "#CC4DB8",
  },
  {
    id: "4",
    text: "53% Team",
    amount: "$1,500",
    color: "#F26C8C",
  },
  {
    id: "5",
    text: "11% Team",
    amount: "$1,500",
    color: "#FCA482",
  },
  {
    id: "6",
    text: "11% Team",
    amount: "$1,500",
    color: "#8BE0DD",
  },
];

const Tile = ({ text, amount, color }) => {
  return (
    <div
      className="flex justify-between px-6 py-2 my-2 text-lg rounded-[12px] font-semibold items-center border-l-[6px] bg-white/50 dark:bg-[#191230]/50 backdrop-blur-sm"
      style={{ borderColor: color }}
    >
      <p>{text}</p>
      <p>{amount}</p>
    </div>
  );
};

function Tokenomics() {
  const { theme } = useTheme();

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx } = chart;

      ctx.save();
      ctx.font = "bolder 20px Inter";
      ctx.fillStyle = theme == "dark" ? "#fff" : "#0D0720 text-center";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "",
        288,
        288
        // chart.getDatasetMeta(0).data(0).x,
        // chart.getDatasetMeta(0).data(0).y
      );
    },
  };

  return (
    <div className="mt-40 mx-5 md:mx-40 text-center" data-aos="fade-up">
      <h3 className="font-extrabold text-3xl md:text-4xl lg:text-5xl leading-8 md:leading-[55px]">
        <span className="text-[#E01E5A]">Thongonomics</span>
      </h3>
      <p className="text-lg md:text-xl my-5">
        Unveiling the Cheeky Economics Behind ThongLana Token!

      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10">
        <div className="flex justify-center items-center pt-6">
          <Doughnut
            height={50}
            width={20}
            className="Doughnut"
            data={data}
            options={options}
            plugins={[textCenter]}
          />
        </div>
        <div className="relative pt-12">
          <div className="relative z-10">
            {TileData.map((item) => (
              <div key={item.id}>
                <Tile
                  text={item.text}
                  amount={item.amount}
                  color={item.color}
                />
              </div>
            ))}
          </div>
          <RadialBlur />
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
