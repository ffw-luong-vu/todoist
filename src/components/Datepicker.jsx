import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({ changeDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const changeDateHandler = (date) => {
    setStartDate(date);
    changeDate(startDate);
  };
  return (
    <div>
      <label
        htmlFor="input-date"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Date
      </label>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date) => changeDateHandler(date)}
      />
    </div>
  );
};

export default Datepicker;
