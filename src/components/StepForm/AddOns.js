import React, { useContext } from 'react'
import { FormContext } from '../Global/FormContext';


export const addOnsOption = [
    {
        id: "onlineService",
        title: "Online service",
        text: "Access to multiplayer games",
        monthelyPrice: "+$1/mo",
        yearlyPrice: "+$10/yr"
    },
    {
        id: "largerStorage",
        title: "Larger storage",
        text: "Extra 1TB of cloud save",
        monthelyPrice: "+$2/mo",
        yearlyPrice: "+$20/yr"
    },
    {
        id: "customizableProfile",
        title: "Customizable Profile",
        text: "Custom theme on your profile",
        monthelyPrice: "+$2/mo",
        yearlyPrice: "+$20/yr"
    },
]


export let chosenItems = {};

export const AddOns = ({nextStep, preStep}) => {

    const {formDataContext, setFormDataContext} = useContext(FormContext)

    const handleOnChange = (position, idElement) => {
        setFormDataContext({...formDataContext, [idElement]: !formDataContext[idElement] } )
    }



    const nextpageHandler = () => {
        nextStep()
    }

    return (
        <form className='plan h-100'>
            <div className='h-100 d-flex flex-column justify-content-between'>
                <div>
                    <h2>Pick add-ons</h2>
                    <p className='text-black-50 mb-4'>Add-ons help enhance your gaming experience.</p>
                    <div className="row">
                        {addOnsOption.map((item, index) => {
                            return (
                                <div key={index} className={`col-12 add-ons p-3 rounded-1 mb-3 d-flex 
                                    justify-content-between ${formDataContext[item.id] && "checked" }`}
                                    onClick={() => handleOnChange(index, item.id)}>
                                    <div className='d-flex gap-3'>
                                        <div className='d-flex align-items-center'>
                                            <input className='form-check-input'
                                                type="checkbox" 
                                                value={item.id} 
                                                id={item.id} 
                                                checked={formDataContext[item.id]}
                                                onChange={() => handleOnChange(index, item.id)}
                                                />
                                        </div>
                                        <label htmlFor="service">
                                            <h6 className='m-0'>{item.title} </h6>
                                            <p className='m-0 text-black-50'>{item.text}</p>
                                        </label>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <p className='m-0 text-black-50'>
                                            {formDataContext.period === "monthly" ? item.monthelyPrice : item.yearlyPrice}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <button className='btn-blue '
                        onClick={() => preStep()}>
                        Go Back
                    </button>
                    <button className='btn-blue'
                        onClick={() => nextpageHandler()}>
                        Next Step
                    </button>
                </div>
            </div>
        </form>
    )
}

