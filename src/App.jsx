import { useState } from "react";
import Select from "./components/Select";
import Time from "./components/Time";

function App() {
  const [startTime, setStartTime] = useState("08:57");
  const [duration, setDuration] = useState(30);

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(parseInt(e.target.value));
  };

  const calculateEndTime = () => {
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    // Add 8 hours to start hours for total shift
    const totalStartMinutes = (startHours + 8) * 60 + startMinutes;
    const endTotalMinutes = totalStartMinutes + duration;
    const endHours = Math.floor(endTotalMinutes / 60);
    const endMinutes = endTotalMinutes % 60;
    const endTime = `${String(endHours).padStart(2, "0")}:${String(
      endMinutes
    ).padStart(2, "0")}`;
    return endTime;
  };

  const lunchOptions = [
    { value: 0, label: "0 minutes" },
    { value: 30, label: "30 minutes" },
    { value: 45, label: "45 minutes" },
    { value: 60, label: "60 minutes" },
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto p-8 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-2xl font-extrabold mb-8 text-center text-gray-900 leading-tight">
          Effortless Workday
        </h1>
        <div className="mb-6">
          <Time
            value={startTime}
            label="Starting Time"
            onChange={handleStartTimeChange}
          />
        </div>
        <div className="mb-6">
          <Select
            options={lunchOptions}
            defaultValue={lunchOptions[1].value}
            onChange={handleDurationChange}
            label="Lunch Duration"
          />
        </div>
        <div>
          <Time value={calculateEndTime()} label="Clockout Time" readOnly />
        </div>
      </div>
    </div>
  );
}

export default App;
