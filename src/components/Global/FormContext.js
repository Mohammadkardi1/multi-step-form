import {useState } from "react";
import { createContext } from "react";


export const FormContext = createContext() 

export const FormContextProvider = ({children}) => {

    const [formDataContext, setFormDataContext] = useState({
        name: "", 
        email: " ",
        phone: "",
        plan:"",
        indexOfSelectecdPlan:0,
        planPrice: "",
        period:"monthly",
        onlineService: false,
        largerStorage: false,
        customizableProfile: false

    })

    const value = {
        formDataContext,
        setFormDataContext
    }
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}
