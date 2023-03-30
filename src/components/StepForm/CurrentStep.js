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

export const CurrentStep = ({step, navigation}) => {

    const [formData, setForm] = useState(defaultData)
    useEffect (() => {
        localStorage.setItem("Current_Step",JSON.stringify(step.id))
    },[step])

    const props = {formData, setForm, navigation }

    switch (step.id) {
        case "personalInfo":
            return <PersonalInfo {...props}/>
        case "plan": 
            return <Plan {...props}/>
        case "addOns" :
            return <AddOns {...props}/>
        case "summary" :
            return <Summary {...props}/>
        case "finish":
            return <Finish {...props}/>
        default: return <h1>Multi step form</h1>
    }

    return (
        <div>
            <h1>Multi step form</h1>
        </div>
    )
}