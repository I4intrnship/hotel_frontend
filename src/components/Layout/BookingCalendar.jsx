import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const BookingCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar onChange={setDate} value={date} className="w-full border-none shadow-md" />
      <p className="text-center mt-4 text-gray-700">Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default BookingCalendar;
