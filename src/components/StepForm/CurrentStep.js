import React, { useEffect } from 'react'
import { PersonalInfo } from './PersonalInfo'
import { Plan } from './Plan'
import { AddOns } from './AddOns'
import { Summary } from './Summary'
import { Finish } from './Finish'
import { useState } from 'react'


const defaultData = {
    name:"",
    email: "",
    phone:"",
    plan:"",
    period:"",
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
    planTotal: 0,
    addonsTotal:0,
    total: 0
}

export const CurrentStep = ({currentStep, nextStep, preStep}) => {

    // const [formData, setForm] = useState(defaultData)
    // useEffect (() => {
    //     localStorage.setItem("Current_Step",JSON.stringify(step.id))
    // },[step])

    const props = {nextStep, preStep}

    switch (currentStep) {
        case 0:
            return <PersonalInfo {...props}/>
        case 1: 
            return <Plan {...props}/>
        case 2 :
            return <AddOns {...props}/>
        case 3 :
            return <Summary {...props}/>
        case 4:
            return <Finish {...props}/>
        default: return <h1>Multi step form</h1>
    }

    return (
        <div>
            <h1>Multi step form</h1>
        </div>
    )
}