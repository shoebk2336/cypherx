import { Box, Container } from "@mantine/core"
import { Priority_Tickets } from "../../Components/Priority/PriorityTicket"
import { Status_Tickets } from "../../Components/Status/StatusTickets"
import { User_Tickets } from "../../Components/Users/UserTickets"


export const Home=()=>{
    return(<>
        <Box
        p='20px'
        size='xl'
        style={{backgroundColor:"#f4f5f8"}}
        >
        <Priority_Tickets/>
        <User_Tickets/>
        <Status_Tickets/>
        </Box
        >
        </>)
}