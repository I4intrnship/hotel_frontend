import Sidebar from "../Layout/Sidebar";
import { FaBed, FaUsers, FaCheckCircle, FaPlus, FaCalendarAlt } from "react-icons/fa";
import ReservationChart from "../Layout/ReservationChart";
import HousekeepingChart from "../Layout/HouseKeepingChart";
import BookingCalendar from "../Layout/BookingCalendar";

const DashboardPage = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">USL Hotel</h1>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center space-x-2">
            <FaPlus />
            <span>Create new booking</span>
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-6 mt-6">
          <StatCard icon={<FaCalendarAlt className="text-blue-500 text-3xl" />} number="172" label="New Booking" />
          <StatCard icon={<FaBed className="text-green-500 text-3xl" />} number="103" label="Available Rooms" />
          <StatCard icon={<FaCheckCircle className="text-yellow-500 text-3xl" />} number="71" label="Check-ins" />
          <StatCard icon={<FaCheckCircle className="text-red-500 text-3xl" />} number="29" label="Check-outs" />
        </div>

        {/* Booking & Stats */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Booking Calendar */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Recent Booking Schedule</h2>
            <BookingCalendar />
          </div>

          {/* Reservation Stats */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Reservation Stats</h2>
            <ReservationChart />
          </div>
        </div>

        {/* Housekeeping Overview */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Housekeeping</h2>
          <HousekeepingChart />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, number, label }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
    {icon}
    <div>
      <h2 className="text-xl font-semibold">{number}</h2>
      <p className="text-gray-500">{label}</p>
    </div>
  </div>
);

export default DashboardPage;
