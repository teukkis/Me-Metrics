import React from "react"
import { ListItem, UnorderedList, Box, Text, useMultiStyleConfig } from "@chakra-ui/react"

const CustomUnorderedList = ({ data, title }) => {

  const styles = useMultiStyleConfig("CustomUnorderedList")

  const renderData = () => {
    return data.map(line => <ListItem>{line}</ListItem>)
  }

  return (
    <Box sx={styles.listContainer}>
      <Text sx={styles.title}>{title}</Text>
      <UnorderedList sx={styles.list} spacing={3}>
        {data ? renderData() : <ListItem>No Data</ListItem>}
      </UnorderedList>
    </Box>
  )

}

export default CustomUnorderedList