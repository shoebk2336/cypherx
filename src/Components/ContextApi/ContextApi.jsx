/* eslint-disable react/prop-types */
import  {createContext, useEffect, useState } from "react";


export const context=createContext()

const ContextProvider=({children})=>{
    const [Data,setData]=useState()

    const Getdata=async()=>{
        const data=await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers')
        const res=await data.json()
        setData(res)
    }
    useEffect(()=>{
        Getdata()
        
    },[])
    
    return(
        <context.Provider value={{Data}}>
        {children}
        </context.Provider>
        )
}

export default ContextProvider