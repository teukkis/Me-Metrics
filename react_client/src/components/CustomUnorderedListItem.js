import React from "react"
import { Text, useMultiStyleConfig, Box, Center, GridItem, Grid } from "@chakra-ui/react"
import { PhoneIcon, ChatIcon } from '@chakra-ui/icons'


const CustomUnorderedListItem = ({ line }) => {

  const styles = useMultiStyleConfig("CustomUnorderedListItem")

  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={2}
      textAlign="left"
    >
      <GridItem rowSpan={2} colSpan={1} >
      <Center w="5px" h="80%" bg="tomato" color="white">
          {line.type === 'LONG' ? <Box as="span" fontWeight="bold" fontSize="lg"/> : <Box as="span" fontWeight="bold" fontSize="lg"/>}
      </Center>
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

export default CustomUnorderedListItem