import { useContext } from "react"
import { context } from "../ContextApi/ContextApi"
import { Grid, SimpleGrid, Space, Text } from "@mantine/core"
import { Ticket_Card } from "../Card/Card"
import { IconCircleDotted,IconCircleCheckFilled,IconCircle, IconCircleXFilled  } from "@tabler/icons-react"
import { Heading } from "../Heading/Heading"




export const Status_Tickets=()=>{
    const {Data}=useContext(context)
    const Headings=[{head:'Backlog',icon:<IconCircleDotted size="16px"  color="grey" />},
    {head:'Todo',icon:<IconCircle size="16px" color="grey" />},
    {head:'In progress',icon:<IconCircle size="16px" color="grey"/>},
    {head:'Done',icon:<IconCircleCheckFilled size="16px" style={{color:"blue"}} />},
    { head:'Cancelled',icon:<IconCircleXFilled size="16px" style={{color:"grey"}} />}]

    const Filter_Ticket=(status)=>{
        const Filtered_Ticket=Data?.tickets?.filter((ticket)=>
        ticket.status==status
        )
        return Filtered_Ticket
    }

    return(<>
        <Grid>
        {Headings.map((status,index)=>
            <Grid.Col key={index}
            span='auto'
            >
        
            <Heading heading={status?.head}
            leftIcon={status?.icon}
            />
            <Space h='xl'/>
            <SimpleGrid>
            {Filter_Ticket(status?.head)?.map((ticket,index)=>
                <Ticket_Card key={index}
                data={ticket}
                />
                )}
                </SimpleGrid>
            </Grid.Col>
            )}
        </Grid>
        
        </>)
}