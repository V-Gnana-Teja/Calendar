import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(selectedMonth, selectedYear);

    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days.map((day) => (
      <div className="p-2 border border-gray-300 text-center" key={day}>
        {day}
      </div>
    ));
  };

  const handleMonthChange = (event) => {
    const newMonth = parseInt(event.target.value, 10);
    setSelectedMonth(newMonth);
    setSelectedDate(new Date(selectedYear, newMonth, 1));
  };

  const handleYearChange = (event) => {
    const newYear = parseInt(event.target.value, 10);
    setSelectedYear(newYear);
    setSelectedDate(new Date(newYear, selectedMonth, 1));
  };

  return (
    <div className="max-w-xs mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={() => setSelectedDate(new Date(selectedYear, selectedMonth - 1, 1))}
        >
          Prev
        </button>
        <select className="px-3 py-1 bg-blue-500 text-white rounded" value={selectedMonth} onChange={handleMonthChange}>
          {Array.from({ length: 12 }, (_, index) => (
            <option key={index} value={index}>
              {new Date(selectedYear, index, 1).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
        <div className="relative">
          <select className="px-3 py-1 bg-blue-500 text-white rounded" value={selectedYear} onChange={handleYearChange}>
            {Array.from({ length: 50 }, (_, index) => (
              <option key={index} value={selectedYear - 25 + index}>
                {selectedYear - 25 + index}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-4 w-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM10 4a1 1 0 011 1v5a1 1 0 11-2 0V5a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={() => setSelectedDate(new Date(selectedYear, selectedMonth + 1, 1))}
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div className="p-2 border border-gray-300 text-center font-bold" key={day}>
            {day}
          </div>
        ))}
        {generateCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
