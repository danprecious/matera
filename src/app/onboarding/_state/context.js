"use client"
import React, { useState } from "react";

export const FormContext = React.createContext();

const FormContextProvider = ({children}) => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        interests: [],
    });


    return(
        <FormContext.Provider value={{data}}>{children}</FormContext.Provider>
    )
}

export default FormContextProvider;