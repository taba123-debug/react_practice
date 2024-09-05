
import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };

    return (
        <div className="signup-container">
            <h2>Create a new account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>First Name</label>
                    <input 
                        {...register('firstName', { required: 'First name is required' })}
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div>
                    <label>Last Name</label>
                    <input 
                        {...register('lastName', { required: 'Last name is required' })}
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type="email"
                        {...register('email', { 
                            required: 'Email is required', 
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password"
                        {...register('password', { 
                            required: 'Password is required', 
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            }
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input 
                        type="date"
                        {...register('dob', { required: 'Date of birth is required' })}
                    />
                    {errors.dob && <p>{errors.dob.message}</p>}
                </div>
                <div>
                    <label>Gender</label>
                    <select {...register('gender', { required: 'Gender is required' })}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender && <p>{errors.gender.message}</p>}
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;

