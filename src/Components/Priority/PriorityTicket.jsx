import { Box, Container, Grid, SimpleGrid, Space, Text } from "@mantine/core"
import { useContext} from "react"
import { context } from "../ContextApi/ContextApi"
import { Ticket_Card } from "../Card/Card"
import { Heading } from "../Heading/Heading"


export const Priority_Tickets=()=>{
    const {Data}=useContext(context)
    const Headings=[
    {head:'No Priority',val:0},
    {head:'Low',val:1},
    {head:'Medium',val:2},
    {head:'High',val:3},
    {head:'Urget',val:4}]

    
    const Priority_Filter=(priority)=>{
        const FilteredData=Data?.tickets.filter((ticket)=>
        ticket.priority==priority)
        return FilteredData
    }

    
    return<>
    <Grid>
    {Headings.map((heading,index)=>
        <Grid.Col key={index}
        span='auto'
        >
        
        <Heading heading={heading?.head}/>
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