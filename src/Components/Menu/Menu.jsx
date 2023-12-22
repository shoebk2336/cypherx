import { Button, Flex, Menu, MenuDropdown, Select, TextInput } from "@mantine/core"
import { IconAdjustmentsHorizontal } from "@tabler/icons-react"
import { useState } from "react"



export const CustomMenu=(props)=>{
    const {setGroup,setOrder,Group,Order}=props
    
    return(<>
        <Menu shadow="md" width={320}>
        <Menu.Target>
        <Button 
        variant="default"
        c='black'
        bg='white'
        leftSection={<IconAdjustmentsHorizontal color="grey" />}
        >Display</Button>
        </Menu.Target>
        <Menu.Dropdown>
        <Menu.Label>
        <Flex 
        justify='space-between'>
        Grouping
        <Select
        data={['Status','User','Priority']}
        onChange={setGroup}
        value={Group}
        />
        </Flex>
        </Menu.Label>
        <Menu.Label>
        <Flex 
        justify='space-between'>
        Ordering
        <Select
        data={['Priority','Title']}
        onChange={setOrder}
        value={Order}
        />
        </Flex>
        </Menu.Label>
        </Menu.Dropdown>
        
        </Menu>
        </>)
}