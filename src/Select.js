import React from "react";

const Select = ({ selectedDate, selectedMonth, selectedYear, onClose }) => {

  const formattedDate = `${selectedDate < 10 ? "0" : ""}${selectedDate}-${new Date(selectedYear, selectedMonth).toLocaleString("default", { month: "short" })}-${selectedYear}`;

  return (

    <div className="fixed bottom-0 left-0 right-0 bg-red-400 p-4 border-t border-gray-300">
      
      <p>You have chosen {formattedDate}.</p>
      <p>The date is chosen in the format of DD/MM/YY </p>
      <p>enableNavigation={false}</p>
      <p>
        BreadcrumbItemDirective text="Home"
      </p>

    </div>
  );
};

export default Select;
