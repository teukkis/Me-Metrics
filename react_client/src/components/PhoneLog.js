import React from "react"
import { ListItem, ListIcon, Box, UnorderedList, Divider, Text, useMultiStyleConfig } from "@chakra-ui/react"
import { PhoneIcon, ChatIcon } from '@chakra-ui/icons'

const PhoneLog = ({ data, title }) => {

  const styles = useMultiStyleConfig("PhoneLog")

  const renderData = () => {
    return data.map(line => {
      return (
        <>
        <Divider/>
        <ListItem>
            <ListIcon as={line.type === 'CALL' ? PhoneIcon : ChatIcon} color="green.500" />
          {line.text} -- {line.time}
        </ListItem>
        </>
      )})
  }

  return (
    <Box sx={styles.logContainer}>
      <Text sx={styles.title}>{title}</Text>
      <UnorderedList sx={styles.list} spacing={3}>
        {data ? renderData() : <ListItem>No Data</ListItem>}
      </UnorderedList>
    </Box>
  )
}

export default PhoneLog