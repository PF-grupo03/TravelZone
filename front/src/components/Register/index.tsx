"use client";
import React, { useState } from 'react';


interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

function Register() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const validate = () => {
        let tempErrors: Partial<FormData> = {};
        let isValid = true;

        // Validations as before
        if (!formData.firstName.trim()) {
            tempErrors.firstName = 'First name is required';
            isValid = false;
        }

        if (!formData.lastName.trim()) {
            tempErrors.lastName = 'Last name is required';
            isValid = false;
        }

        if (!formData.email) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.phone) {
            tempErrors.phone = 'Phone number is required';
            isValid = false;
        } else if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
            tempErrors.phone = 'Phone number must be in the format: 123-456-7890';
            isValid = false;
        }

        if (!formData.password) {
            tempErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters long';
            isValid = false;
        }

        if (!formData.confirmPassword) {
            tempErrors.confirmPassword = 'Please confirm your password';
            isValid = false;
        } else if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setMessage('Registration successful!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                });
            }, 2000);
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen items-center">
            <div className="hidden md:block w-full md:w-1/2 h-full">
                <img
                    src="your-image-url-here"
                    alt="Sign up"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 md:px-8">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-semibold text-gray-900">Sign up</h1>
                    <p className="text-gray-600 mt-2 mb-6">
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="First Name"
                                className={`w-full px-4 py-2 border ${
                                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                                } rounded-md`}
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                                className={`w-full px-4 py-2 border ${
                                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                                } rounded-md`}
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className={`w-full px-4 py-2 border ${
                                    errors.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-md`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                id="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Phone Number"
                                className={`w-full px-4 py-2 border ${
                                    errors.phone ? 'border-red-500' : 'border-gray-300'
                                } rounded-md`}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                                className={`w-full px-4 py-2 border ${
                                    errors.password ? 'border-red-500' : 'border-gray-300'
                                } rounded-md`}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="Confirm Password"
                                className={`w-full px-4 py-2 border ${
                                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                } rounded-md`}
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>
                        <div>
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms" className="ml-2 text-gray-700">
                                I agree to the{' '}
                                <a href="#" className="text-blue-600">
                                    Terms and Privacy Policy
                                </a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
                            disabled={loading}
                        >
                            {loading ? 'Creating account...' : 'Create account'}
                        </button>
                    </form>
                    {message && (
                        <p className="text-green-500 text-sm mt-4 text-center">{message}</p>
                    )}
                    <p className="text-center text-gray-700 mt-4">
                        Already have an account?{' '}
                        <a href="#" className="text-blue-600">
                            Login
                        </a>
                    </p>
                    <div className="flex justify-center items-center space-x-4 mt-4">
                        <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
                            <img src="/path-to-google-icon.png" alt="Google" className="h-5 w-5" />
                        </button>
                        <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
                            <img src="/path-to-facebook-icon.png" alt="Facebook" className="h-5 w-5" />
                        </button>
                        <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
                            <img src="/path-to-apple-icon.png" alt="Apple" className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
