import React , {useContext} from 'react'
// import { chosenItems } from './AddOns'
import { FormContext } from '../Global/FormContext';
import {addOnsOption} from "./AddOns"


export const Summary = ({navigation}) => {

    const {formDataContext, setFormDataContext} = useContext(FormContext)
    const filterServices = addOnsOption.filter((item) => formDataContext[item.id])

    const totalServicesPrice = filterServices.reduce( (accumulator, currentValue) => {
        if (formDataContext.period === "monthly") {
            return accumulator + parseInt(currentValue.monthelyPrice.match(/\d+/))
        } else {
            return accumulator + parseInt(currentValue.yearlyPrice.match(/\d+/))
        }
    },0 )

    return (
        <div className='summary h-100'>
            <div className='h-100 d-flex flex-column justify-content-between'>
                <div>
                    <h2>Finishing up</h2>
                    <p className='text-black-50 mb-4'>Double-check everything looks OK before confirming.</p>
                    <div className='chosen-service p-3 rounded-2'>
                        <div className='d-flex justify-content-between align-items-center pb-3 border-bottom'>
                            <div>
                                <h6 className='m-0'>
                                    {`${formDataContext.plan } (${formDataContext.period  === "monthly" ? "Monthly" : "Yearly"})`}
                                </h6>
                            </div>
                            <div className='text-end'>
                                <h6 className='m-0'>
                                {`${formDataContext.planPrice}`}
                                </h6>
                            </div>
                        </div>
                        <div className='mt-3'>
                            {filterServices.map((item) => { 
                                return (
                            <div className='d-flex justify-content-between align-items-center pb-1'>
                                <div>
                                    <p className='m-0 text-black-50'>{item.title}</p>
                                </div>
                                <div className='text-end'>
                                    <p className='m-0 '>{formDataContext.period === "monthly" ? item.monthelyPrice : item.yearlyPrice }</p>
                                </div>
                            </div>
                            )
                            })}
                        </div>
                    </div>
                    <div className='mt-3  px-3  d-flex justify-content-between align-items-center pb-1'>
                        <div>
                            <p className='m-0 text-black-50'>
                                {`Total (per ${formDataContext.period === "monthly" ? "Month" : "Year"})`}
                            </p>
                        </div>
                        <div className='text-end'>
                            <h6 className='m-0 total-price'>
                            {`\$${totalServicesPrice  + parseInt(formDataContext.planPrice.match(/\d+/)     ) }/${formDataContext.period === "monthly"? "mo" : "yr"}`}
                            </h6>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <button className='btn-blue'
                        onClick={() => navigation.previous()}>
                        Go Back
                    </button>
                    <button className='btn-blue'
                        onClick={() => navigation.next()}>
                        Next Step
                    </button>
                </div>
            </div>
        </div>
    )
}
