import { Card, Flex, Space, Text, Title } from "@mantine/core"
import {IconAntennaBars4, IconCircleFilled} from '@tabler/icons-react'


export const Ticket_Card=(props)=>{
    const {id,title}=props?.data
    return(<>
        <Card
        shadow="lg"
        >
        <Flex>
        <Text c='dimmed'
        size="15px"
        >{id}</Text>
        </Flex>
        <Space h='md'/>
        <Text 
        size="16px"
        fw='500'
        ta='left'
        lh='20px'
        display='flex'
        style={{alignItems:"center",justifyContent:"space-between"}}
        >
        <IconCircleFilled
        size='15px'
        style={{
            color:"#f5c842",
            marginRight:"10px"
            
            
        }}
        />
        {title}</Text>
        <Space h='md'/>
        <Flex
        gap='10px'
        alignItems="center"
        >
        <IconAntennaBars4
        color="grey"
        size='27px'
        display='flex'
        alignItems='center'
        
        style={{
            border:'0.5px solid gray',
            borderRadius:"4px",
            
        }}
        />

        <Text style={{border:"1px solid #808080",borderRadius:"5px",
    alignItems:"center",
    gap:"5px"
    }}
        c='#808080'
        p='5px'
        size="15px"
        display='flex'
        
        >
        <IconCircleFilled size='15px'
        />
        Feature Request</Text>
        </Flex>
        </Card>
        </>)

}