import React from "react"
import { Box, Text, useMultiStyleConfig, Divider } from "@chakra-ui/react"
import Card from "components/Card"
import SimpleBar from 'simplebar-react';
import "simplebar/src/simplebar.css";
import CustomUnorderedListItem from 'components/CustomUnorderedListItem'

const CustomUnorderedList = ({ data, title }) => {

  const styles = useMultiStyleConfig("CustomUnorderedList")

  const renderData = () => {
    return data.map(line => {
      return (
        <>
        <Divider/>
        <CustomUnorderedListItem line={line}/>
        </>
      )})
  }

  return (
    <Card>
      <Box sx={styles.listContainer}>
        <Text sx={styles.title}>{title}</Text>
        <Divider/>
        <Box  sx={styles.list} >
        <SimpleBar style={{ height: '300px' }}>
          {data ? renderData() : <Text>No Data</Text>}
          <Text> -- </Text>
        </SimpleBar>
        </Box>
      </Box>
    </Card>
  )

}

export default CustomUnorderedList