import {
  IRegisterUser,
  LoginErrorProps,
  ILoginUser,
  RegisterErrorProps,
} from "@/types";

export function validatedateLoginForm(values: ILoginUser) {
  let errors: LoginErrorProps = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
}

export function validatedateRegisterForm(values: IRegisterUser) {
  let errors: RegisterErrorProps = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //const phoneRegex = /^\d{3}-\d{3}-\d{4}$/; // Formato: 123-456-7890
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Validación de nombre
  if (!values.name.trim()) {
    errors.name = "El nombre es obligatorio";
  }

  // Validación de email
  if (!values.email) {
    errors.email = "El correo electrónico es obligatorio";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "El correo electrónico no es válido";
  }

  /* Validación de teléfono
  if (!values.phone) {
    errors.phone = "El número de teléfono es obligatorio";
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = "El número de teléfono debe tener el formato: 123-456-7890";
  }
*/
  // Validación de contraseña
  if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (values.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número";
  }

  return errors;
}
