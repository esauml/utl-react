import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';


const DatePickerType = ({ onChange, value }) => {

    return (
        <LocalizationProvider dateAdapter={AdapterMoment} locale="es">
            <DatePicker
                label="Fecha de nacimiento"
                value={value}
                onChange={(newValue) => {
                    onChange(newValue.toDate());
                }}
                inputFormat="DD/MM/YYYY"
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}

export default DatePickerType;
