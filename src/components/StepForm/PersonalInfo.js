import React from 'react'
import { useForm } from "react-hook-form";
import { FormContext } from '../Global/FormContext';
import { useContext } from 'react';


export const PersonalInfo = ({nextStep, preStep}) => {

    const {register,  handleSubmit, formState: {errors}  } = useForm()
    const {formDataContext, setFormDataContext } = useContext(FormContext)

    const onSubmit =   (data) => {
        setFormDataContext({...formDataContext, 
            ["name"]: data.name, 
            ["email"]: data.email ,  
            ["phone"]: data.phone  })
        nextStep()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className='personal-info h-100'>
            <div className='h-100 d-flex flex-column justify-content-between'>
                <div>
                    <h2 className='info-title'>Personal info</h2>
                    <p className='text-black-50 mb-4'>Please provide your name, email address, and phone number.</p>
                    {/* Name Input */}
                    <div className='mb-3'>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            name='name'
                            id="name"
                            placeholder='e.g. Stephen King'
                            {...register("name", {
                                required: "Please Enter Your Name",
                                minLength: {
                                    value: 4,
                                    message: "Name must be at least 4 characters long"
                                }
                            })}
                            // onChange={changeHandler}
                            />
                        <p className={`error-message ${errors.name?.message ? "visible" : "invisible"}`}>
                            {errors.name?.message}!
                        </p>
                    </div>
                    {/* Email Input */}
                    <div className='mb-3'>
                        <label htmlFor="email">Email Address</label>
                        <input type="text"
                            name='email'
                            id='email'
                            // value={formData.email}
                            
                            placeholder='e.g. stephenking@lorem.com'
                            {...register("email",{
                                required:"Please Enter Your Email",
                                pattern: {
                                    value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                                    message: "Please Enter A Valid Email"
                                }
                            })}
                            // onChange={changeHandler}
                            />
                        <p className={`error-message  ${errors.email?.message ? "visible" : "invisible"}`}>
                            {errors.email?.message}!
                        </p>
                    </div>
                    {/* Phone Number Input */}
                    <div className='mb-3'>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" 
                            name="phone" 
                            id="phone"
                            
                            placeholder='e.g. +1 234 567 890'
                            {...register("phone", {
                                required: "Please Enter Your Phone Number"
                            })}
                            // onChange={changeHandler}
                            />
                        <p className={`error-message ${errors.phone?.message ? "visible" : "invisible"}`}>
                            {errors.phone?.message}!
                        </p>
                    </div>
                </div>
                {/* Submit Button */}
                <div className='text-end'>
                    <button className='btn-blue'
                        type="submit">
                        Next Step
                    </button>
                </div>
            </div>
        </form>
    )
}