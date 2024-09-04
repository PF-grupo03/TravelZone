import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerValue() {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));

	return (
		<div>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
					<DatePicker
						label="Departure date"
						defaultValue={dayjs("2024-04-17")}
						slotProps={{
							textField: {
								sx: {
									"& .MuiInputBase-root": {
										backgroundColor: "white",
										borderRadius: "8px",
										padding: "10px",
										boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
										width: "250px",
										height: "40px",
									},
									"& .MuiOutlinedInput-notchedOutline": {
										borderColor: "#ccc",
									},
									"& .MuiInputLabel-root": {
										color: "gray",
									},
									"&:hover .MuiOutlinedInput-notchedOutline": {
										borderColor: "#aaa",
									},
									// Aquí eliminamos el recuadro azul del enfoque
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{
											borderColor: "transparent",
										},
									"& .MuiOutlinedInput-root.Mui-focused": {
										boxShadow: "none",
									},
								},
							},
						}}
					/>
					<DatePicker
						label="Arrival date"
						value={value}
						onChange={(newValue) => setValue(newValue)}
						slotProps={{
							textField: {
								sx: {
									"& .MuiInputBase-root": {
										backgroundColor: "white",
										borderRadius: "8px",
										padding: "10px",
										boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
										width: "250px",
										height: "40px",
									},
									"& .MuiOutlinedInput-notchedOutline": {
										borderColor: "#ccc",
									},
									"& .MuiInputLabel-root": {
										color: "gray",
									},
									"&:hover .MuiOutlinedInput-notchedOutline": {
										borderColor: "#aaa",
									},
									// Aquí eliminamos el recuadro azul del enfoque
									"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
										{
											borderColor: "transparent",
										},
									"& .MuiOutlinedInput-root.Mui-focused": {
										boxShadow: "none",
									},
								},
							},
						}}
					/>
				</div>
			</LocalizationProvider>
		</div>
	);
}
