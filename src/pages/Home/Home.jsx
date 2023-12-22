import { Priority_Tickets } from "../../Components/Priority/PriorityTicket"
import { Status_Tickets } from "../../Components/Status/StatusTickets"
import { User_Tickets } from "../../Components/Users/UserTickets"


export const Home=()=>{
    return(<>
        <Priority_Tickets/>
        <User_Tickets/>
        <Status_Tickets/>
        </>)
}