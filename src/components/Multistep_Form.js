import React from 'react'
import bgDesktop from './Images/bg-sidebar-desktop.svg'
import bgMobile from './Images/bg-sidebar-mobile.svg'
import { CurrentStep } from './StepForm/CurrentStep'
import { useStep, } from "react-hooks-helper";

const sidebar_steps = [
    {
        step_id: "personalInfo",
        step_title: 'Your info', 
    },
    {
        step_id: "plan",
        step_title: 'select plan', 
    },
    {
        step_id: "addOns",
        step_title: 'add-ons', 
    },
    {
        step_id: "summary",
        step_title: 'summary', 
    },
]

const steps = [
    { id: "personalInfo" },
    { id: "plan" },
    { id: "addOns" },
    { id: "summary" },
    { id: "finish" },
]


export const Multistep_Form = () => {

    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
        });

    return (
        <div className='multistep-form d-flex d-column justify-content-center d-md-row align-items-md-center'>
            <div className='form-body d-flex flex-column flex-md-row p-md-2 rounded-mg-3 '>
                {/* Sidebar */}
                <div className='sidebar'>
                    <img src={bgDesktop}
                            className='d-none d-md-block img-desktop'
                            alt="" />
                    <img src={bgMobile}
                        className='d-md-none img-mobile'
                        alt="" />
                    <ul className='list-unstyled'>
                        {
                            sidebar_steps.map((item,index) => {
                                return (
                                    <li>
                                        <div className='list-item'>
                                            <div className={`step-number ${step.id === item.step_id && "active"}`} >
                                                <p className='fw-bold m-0'>{index+1}</p>
                                            </div>
                                            <div className='d-none d-md-block step-text'>
                                                <p className='m-0 text-uppercase text-white-50'>Step {index+1}</p>
                                                <p className='m-0 fw-bolder text-uppercase'>{item.step_title}</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                {/*Form side */}
                <div className='side-form w-100 px-md-4 mt-md-4'>
                    <CurrentStep step={step}  navigation= {navigation}/>
                </div>
            </div>
        </div>
    )
}
