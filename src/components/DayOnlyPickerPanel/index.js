import { DatePicker } from "antd";

const DayOnlyPickerPanel = ({ value, onChange }) => {
  const handleChange = (date) => {
    if (date) {
      onChange(date.date());
    }
  };

  return (
    <div className="day-only-picker-panel">
      <DatePicker
        value={value}
        onChange={handleChange}
        format="DD"
        picker="date"
      />
    </div>
  );
};
export default DayOnlyPickerPanel;
