import * as React from "react";
import dayjs from "dayjs";
import date from "date-and-time";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";

export default function TimePicker() {
  const [clockin, setClockin] = React.useState(dayjs("2022-04-17T08:22"));
  const [clockout, setClockout] = React.useState(dayjs(new Date()));
  const [lunch, setLunch] = React.useState(1.8e6);

  React.useEffect(() => {
    addTime();
  }, [clockin, lunch]);

  const addTime = () => {
    const TIMEWORKED = 2.88e7 + lunch;
    setClockout((prev) => dayjs(date.addMilliseconds(clockin.$d, TIMEWORKED)));
  };

  const updateClockin = (e) => {
    setClockin((prev) => e);
  };

  const updateLunch = ({ target }) => setLunch((prev) => target.value);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimeField
        label="Starting Time"
        value={clockin}
        onChange={updateClockin}
      />
      <TimeField label="Clockout Time" value={clockout} />
      <FormControl>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lunch}
          onChange={updateLunch}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1.8e6}>30</MenuItem>
          <MenuItem value={2.7e6}>45</MenuItem>
          <MenuItem value={3.6e6}>60</MenuItem>
        </Select>
        <FormHelperText>Lunch Break in Minutes</FormHelperText>
      </FormControl>
    </LocalizationProvider>
  );
}
