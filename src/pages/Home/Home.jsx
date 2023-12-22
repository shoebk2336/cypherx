import { Box, Container } from "@mantine/core"
import { Priority_Tickets } from "../../Components/Priority/PriorityTicket"
import { Status_Tickets } from "../../Components/Status/StatusTickets"
import { User_Tickets } from "../../Components/Users/UserTickets"
import { CustomMenu } from "../../Components/Menu/Menu"
import { useState } from "react"


export const Home=()=>{
    const [Group,setGroup]=useState('Status')
    const [Order,setOrder]=useState('Title')

const SwitchFun=()=>{
    
    switch (Group) {
        case "Priority":
        return <Priority_Tickets Order={Order} />;
        case "Status":
        return <Status_Tickets Order={Order} />;
        case "User":
        return <User_Tickets Order={Order} />;
        default:
        console.log('done');
        return null; // or any other default value
    }

}
    
    
    return(<>
        <Box
        m='20px'
        >
        <CustomMenu 
        setGroup={setGroup}
        setOrder={setOrder}
        Group={Group}
        Order={Order}
        />
        </Box>
        <Box
        p='20px'
        size='xl'
        style={{backgroundColor:"#f4f5f8"}}
        >
        {SwitchFun()}
        
        </Box
        >
        </>)
}