import Sidebar from "../Layout/Sidebar";
import { FaCalendarAlt, FaUserCheck } from "react-icons/fa";

const ReservationPage = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800">Reservations</h1>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Recent Reservations</h2>
          <table className="w-full mt-4 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Guest</th>
                <th className="border border-gray-300 px-4 py-2">Room</th>
                <th className="border border-gray-300 px-4 py-2">Check-in</th>
                <th className="border border-gray-300 px-4 py-2">Check-out</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">John Doe</td>
                <td className="border border-gray-300 px-4 py-2">Deluxe Suite</td>
                <td className="border border-gray-300 px-4 py-2">Feb 10, 2024</td>
                <td className="border border-gray-300 px-4 py-2">Feb 15, 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Jane Smith</td>
                <td className="border border-gray-300 px-4 py-2">Standard Room</td>
                <td className="border border-gray-300 px-4 py-2">Mar 1, 2024</td>
                <td className="border border-gray-300 px-4 py-2">Mar 5, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
