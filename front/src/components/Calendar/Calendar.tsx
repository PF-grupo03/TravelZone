"use client";
import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useContext } from "react";
import BookingContext from "../../context/BookingContext";

export default function DatePickerValue() {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs());
	const { setDate } = useContext(BookingContext);
	const [error, setError] = React.useState<string | null>(null); // Para manejar errores

	const handleDepartureDateChange = (newValue: Dayjs | null) => {
		setValue(newValue);
		if (newValue) {
			setDate(newValue.format("YYYY-MM-DD"));
			setError(null); // Resetea el error si la fecha es válida
		} else {
			setError("Por favor, selecciona una fecha válida.");
		}
	};

	return (
		<div>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
					<DatePicker
						label="Departure date"
						value={null}
						onChange={handleDepartureDateChange}
						minDate={dayjs()}
						slotProps={{
							textField: {
								sx: {
									"& .MuiInputBase-root": {
										backgroundColor: "white",
										borderRadius: "8px",
										padding: "10px",
										width: "100%",
										height: "40px",
									},
									"& .MuiOutlinedInput-root": {
										"& .MuiOutlinedInput-notchedOutline": {
											borderColor: "gray", // Cambia el color por defecto
										},
										"&:hover .MuiOutlinedInput-notchedOutline": {
											borderColor: "red", // Borde rojo al hacer hover
										},
										"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
											borderColor: "blue", // Borde azul en focus
											borderWidth: "2px", // Ajustar grosor
										},
									},
									// Eliminar el borde azul adicional del input
									"& .MuiInputBase-input": {
										boxShadow: "none !important", // Deshabilitar cualquier sombra adicional
										outline: "none !important", // Eliminar el outline azul extra
									},
									"& input": {
										padding: "10px", // Ajustar padding del input
									},
								},
							},
						}}
					/>

					{error && (
						<span style={{ color: "red", fontSize: "12px" }}>
							{error} {/* Mensaje de error si aplica */}
						</span>
					)}
				</div>
			</LocalizationProvider>
		</div>
	);
}
