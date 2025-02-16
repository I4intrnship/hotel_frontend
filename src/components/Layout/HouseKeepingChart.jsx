import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Clean", "Cleaning", "Dirty"],
  datasets: [
    {
      data: [70, 18, 15],
      backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
    },
  ],
};

const options = { responsive: true, plugins: { legend: { position: "bottom" } } };

const HousekeepingChart = () => <Doughnut data={data} options={options} />;

export default HousekeepingChart;
