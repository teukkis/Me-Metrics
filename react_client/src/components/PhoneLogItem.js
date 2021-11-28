import React from "react"
import { Text, Center, useMultiStyleConfig, GridItem, Grid } from "@chakra-ui/react"
import { PhoneIcon, ChatIcon } from '@chakra-ui/icons'


const PhoneLogItem = ({ line }) => {

  const styles = useMultiStyleConfig("PhoneLogItem")

  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={2}
      textAlign="left"
    >
      <GridItem rowSpan={2} colSpan={1} >
      
        {line.type === 'CALL' ? 
        <Center w="30px" h="30px" bg="blue.200" color="white">
          <PhoneIcon /> 
        </Center>
        : 
        <Center w="30px" h="30px" bg="green.400" color="white">
          <ChatIcon/> 
        </Center>
        }
      </GridItem>
      <GridItem rowSpan={1} colSpan={4} >
        <Text sx={styles.senderName}>{line.text}</Text>
      </GridItem>
      <GridItem rowSpan={1} colSpan={4} >
        <Text sx={styles.time}>-- {line.time}</Text>
      </GridItem>
    </Grid>   
  )
}

export default PhoneLogItem