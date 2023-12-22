import { Flex, Text } from "@mantine/core"
import { IconLineDotted, IconPlus } from "@tabler/icons-react"



export const Heading=(props)=>{
    const {heading,leftIcon,count}=props
    return(<>
        <Text
            size="16px"
            fw='600'
            display='flex'
            p='15px'
            style={{alignItems:"center",
            justifyContent:"space-between"
        }}
            >
            <Flex
            gap='12px'
            >
            {leftIcon}
            {heading}
            </Flex>
            
            <Flex>
            <IconPlus color="grey" size='20px' />
            <IconLineDotted color="grey" size='20px' />
            </Flex>
            </Text>
        </>)
}