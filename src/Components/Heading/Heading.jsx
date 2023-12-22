import { Text } from "@mantine/core"
import { IconLineDotted, IconPlus } from "@tabler/icons-react"



export const Heading=(props)=>{
    const {heading}=props
    return(<>
        <Text
            size="16px"
            fw='600'
            display='flex'
            style={{alignItems:"center"}}
            >{heading}
            <IconPlus color="grey" />
            <IconLineDotted color="grey" />
            </Text>
        </>)
}