import React, { useState, useEffect } from "react";
import Select from "./Select";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {

  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(parseInt(localStorage.getItem("selectedMonth")) || today.getMonth());

  const [currentYear, setCurrentYear] = useState(parseInt(localStorage.getItem("selectedYear")) || today.getFullYear());

  const [selectedDate, setSelectedDate] = useState(parseInt(localStorage.getItem("selectedDate")) || 1);

  const [showDialog, setShowDialog] = useState(localStorage.getItem("showDialog") === "true");

  const startDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const days = [];


  useEffect(() => {

    localStorage.setItem("selectedDate", selectedDate);

    localStorage.setItem("selectedMonth", currentMonth);

    localStorage.setItem("selectedYear", currentYear);

    localStorage.setItem("showDialog", showDialog);

  }, [selectedDate, currentMonth, currentYear, showDialog]);


  for (let i = 0; i < startDayOfMonth; i++) {

    days.push(

      <div key={`empty-${i}`} className="border border-gray-300 p-4">

      </div>

    );
  }

  for (let i = 1; i <= daysInMonth; i++) {

    const isSelected = selectedDate === i;
    days.push(

      <div key={i} className={`border border-gray-300 p-4 cursor-pointer ${isSelected ? "bg-red-500" : ""}`}
        onClick={() => {
          setSelectedDate(i);
          setShowDialog(true);
        }}
      >
        {i}

      </div>

    );
  }

  const handleMonthChange = (event) => {

    setCurrentMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event) => {

    setCurrentYear(parseInt(event.target.value));
  };

  return (

    <div className="flex flex-col items-center">

      <div className="flex justify-center items-center my-4">

        <select className="text-xl font-bold cursor-pointer" value={currentMonth} onChange={handleMonthChange}>

          {Array.from({ length: 12 }, (_, index) => (

            <option key={index} value={index}>
              {new Date(0, index).toLocaleString("default", { month: "long" })}
            </option>

          ))}
        </select>

        <select className="text-xl font-bold ml-4 cursor-pointer" value={currentYear} onChange={handleYearChange}>

          {Array.from({ length: 10 }, (_, index) => (

            <option key={index} value={today.getFullYear() - 8 + index}>
              {today.getFullYear() - 8 + index}

            </option>
          ))}

        </select>

      </div>

      <div className="grid grid-cols-7 gap-1 ">

        {daysOfWeek.map((day, index) => (

          <div key={index} className="font-bold">
            {day}
          </div>

        ))}

        {days}

      </div>

      {showDialog && <Select selectedDate={selectedDate} selectedMonth={currentMonth} selectedYear={currentYear} onClose={() => setShowDialog(false)} />} 
    
    </div>
  );
};

export default Calendar;
