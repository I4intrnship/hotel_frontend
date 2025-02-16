import { FaHome, FaBed, FaUsers, FaClipboardList, FaEnvelope, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold text-white mb-6">nginap</h2>
      <ul className="space-y-4">
        <SidebarItem icon={<FaHome />} text="Home" active />
        <SidebarItem icon={<FaBed />} text="Room" />
        <SidebarItem icon={<FaUsers />} text="Guest" />
        <SidebarItem icon={<FaClipboardList />} text="Booking" />
        <SidebarItem icon={<FaEnvelope />} text="Message" />
        <SidebarItem icon={<FaCog />} text="Settings" />
        <SidebarItem icon={<FaSignOutAlt />} text="Logout" />
      </ul>
    </div>
  );
};

const SidebarItem = ({ icon, text, active }) => (
  <li className={`flex items-center space-x-3 p-2 rounded-md ${active ? "bg-green-500" : "hover:bg-gray-800"}`}>
    {icon}
    <span>{text}</span>
  </li>
);

export default Sidebar;
