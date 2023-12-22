import { Box, Container, Grid, SimpleGrid, Space, Text } from "@mantine/core"
import { useContext} from "react"
import { context } from "../ContextApi/ContextApi"
import { Ticket_Card } from "../Card/Card"
import { Heading } from "../Heading/Heading"
import { IconAlertSquareFilled, IconAntennaBars1, IconAntennaBars2, IconAntennaBars3, IconAntennaBars4, IconAntennaBars5, IconLineDashed } from "@tabler/icons-react"


export const Priority_Tickets=({Order})=>{
    const {Data}=useContext(context)
    const Headings=[
    {head:'No Priority',val:0,icon:<IconLineDashed color="grey" size='20px' />,count:0},
    {head:'Low',val:1,icon:<IconAntennaBars2 color="grey" size='20px' />,count:0},
    {head:'Medium',val:2,icon:<IconAntennaBars3 color="grey" size='20px'  />,count:0},
    {head:'High',val:3,icon:<IconAntennaBars4 color="grey" size='20px'  />,count:0},
    {head:'Urgent',val:4,icon:<IconAlertSquareFilled  style={{color:"orange"}} size='20px'  />,count:0}
    ]

    
    const Priority_Filter=(priority)=>{
        const FilteredData=Data?.tickets.filter((ticket)=>
        ticket.priority==priority)
        if(Order=='Priority'){
            const Sorted_Ticket=FilteredData?.sort((a,b)=>b.priority-a.priority)
            return Sorted_Ticket
        }
        else{
            const Sorted_Ticket=FilteredData.sort((a,b)=>a.title.localeCompare(b.title))
            return Sorted_Ticket
        }
        
    }

    
    return<>
    <Grid>
    {Headings.map((heading,index)=>
        <Grid.Col key={index}
        span={{sm:'auto',base:12}}
        >
        
        <Heading heading={heading?.head}
        leftIcon={heading?.icon}
        
        />
        <Space h='xl'/>
        <SimpleGrid>
        {Priority_Filter(heading?.val)?.map((ticket,index)=>
            <Ticket_Card key={index} 
            data={ticket}
            />
            )}
            </SimpleGrid>
        </Grid.Col>
        )}
    </Grid>
    </>
}