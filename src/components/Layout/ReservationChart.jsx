import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    { label: "New Booking", data: [40, 60, 75, 20, 90, 30, 50], backgroundColor: "rgb(54, 162, 235)" },
    { label: "Check-in", data: [30, 50, 60, 80, 70, 90, 40], backgroundColor: "rgb(255, 206, 86)" },
    { label: "Check-out", data: [20, 40, 50, 60, 80, 100, 30], backgroundColor: "rgb(255, 99, 132)" },
  ],
};

const options = { responsive: true, plugins: { legend: { position: "top" } } };

const ReservationChart = () => <Bar data={data} options={options} />;

export default ReservationChart;
