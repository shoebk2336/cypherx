import { Grid, SimpleGrid, Space, Text } from "@mantine/core"
import { useContext } from "react"
import { context } from "../ContextApi/ContextApi"
import { Ticket_Card } from "../Card/Card"
import { IconLineDotted, IconPlus } from "@tabler/icons-react"
import { Heading } from "../Heading/Heading"


export const User_Tickets=()=>{
    const {Data}=useContext(context)
    const Filter_Tickets=(userID)=>{
    const Filtered_Ticket=Data?.tickets?.filter((ticket)=>
            ticket?.userId==userID
    )
    return (Filtered_Ticket)
    }

    
    return(<>
        <Grid
        
        >
        {Data?.users?.map((user,index)=>
            <Grid.Col 
            ta='center'
            span='auto'
            key={index}>
            
            <Heading heading={user?.name}/>
            <Space h='xl'/>
            <SimpleGrid>
            {Filter_Tickets(user?.id)?.map((ticket,index)=>
                // <Text key={index}>{ticket?.title}</Text>
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