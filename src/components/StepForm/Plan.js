import React, { useState, useContext } from 'react'
import iconArcade from '../Images/icon-arcade.svg'
import iconAdvanced from '../Images/icon-advanced.svg'
import iconPro from '../Images/icon-pro.svg'
import {FormContext} from '../Global/FormContext'

const options = [
    {
        icon: iconArcade,
        type:"Arcade",
        monthlyPrice:"$9/mo",
        yearlyPrice: "$90/yr"
    },
    {
        icon: iconAdvanced,
        type:"Advanced",
        monthlyPrice:"$12/mo",
        yearlyPrice: "$120/yr"
    },
    {
        icon: iconPro,
        type:"Pro",
        monthlyPrice:"$15/mo",
        yearlyPrice: "$150/yr"
    }
]

export const Plan = ({navigation}) => {

    const [showError, setShowError] = useState(false)
    const [indexOfSelectecdPlan, setIndexOfSelectedPlan ] = useState(0)
    const {formDataContext, setFormDataContext} = useContext(FormContext)

    const planHandler =  (index, selectedPlan, selectedPrice ) => {
        setFormDataContext({...formDataContext, ["plan"]: selectedPlan, ["planPrice"]: selectedPrice })
        setShowError(false)
        setIndexOfSelectedPlan(index)
    }

    const periodHandler =   (selectedPlanHere) => {
        setFormDataContext({...formDataContext, ["period"]: selectedPlanHere,
        ["planPrice"]: selectedPlanHere === "monthly" ? options[indexOfSelectecdPlan].monthlyPrice : options[indexOfSelectecdPlan].yearlyPrice })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formDataContext.plan) {
            setShowError(false)
            navigation.next()
        } else {
            setShowError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='plan h-100'>
            <div className='h-100 d-flex flex-column justify-content-between'>
                {/*  */}
                <div>
                    <h2>Select your plan</h2>
                    <p className='text-black-50 mb-4'>You have the option of monthly or yearly billing.</p>
                    <div className="row w-100 m-0 mb-4 g-2">
                        {options.map((item, index) => {
                            return (
                                <div key={index} className="col-12 col-md-4">
                                    <div className={`plan-option p-2 rounded-1 d-flex gap-2 flex-md-column align-items-start
                                        justify-content-md-between gap-md-5 ${formDataContext.plan === item.type && "selected"}`}
                                        onClick={() => planHandler(index, item.type, formDataContext.period === "monthly" ? item.monthlyPrice : item.yearlyPrice) }
                                        role="button">
                                        <img src={item.icon} alt="" />
                                        <div>
                                            <h6 className='m-0'>
                                                {item.type}
                                            </h6>
                                            <p className='m-0 text-black-50'>
                                                {formDataContext.period === "monthly" ? item.monthlyPrice : item.yearlyPrice}
                                            </p>
                                            <p className={`m-0 ${formDataContext.period === "monthly" && "invisible"}`}>
                                                2 months free
                                            </p>
                                        </div>  
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className='switch py-2 d-flex justify-content-center gap-3'>
                        <p className={`m-0 ${formDataContext.period === "yearly" && "text-black-50" }`}>Monthly</p>
                        <div className={`check ${formDataContext.period === "monthly" ? 'justify-content-start' : "justify-content-end"}`}
                            onClick={() => periodHandler(formDataContext.period === "monthly" ? "yearly" : "monthly")}>
                            <div className="circle">
                            </div>
                        </div>
                        <p className={`m-0 ${formDataContext.period === "monthly" && "text-black-50" }`}>yearly</p>
                    </div>
                    <p className={`error-message  ${showError ? "d-block" : "d-none"}`}>
                        Please Selcet One Plane!
                    </p>
                </div>
                {/* button */}
                <div className='d-flex justify-content-between'>
                    <button className='btn-blue '
                        onClick={() =>  navigation.previous()}>
                        Go Back
                    </button>
                    <button className='btn-blue'
                    type='submit'
                        >
                        Next Step
                    </button>
                </div>
            </div>
        </form>
)}
