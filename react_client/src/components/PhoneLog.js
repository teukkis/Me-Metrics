import React from "react"
import { Box, Divider, Text, useMultiStyleConfig } from "@chakra-ui/react"
import Card from "components/Card"
import PhoneLogItem from "components/PhoneLogItem"
import SimpleBar from 'simplebar-react'
import "simplebar/src/simplebar.css"

const PhoneLog = ({ data, title }) => {

  const styles = useMultiStyleConfig("PhoneLog")

  const renderData = () => {
    return data.map(line => {
      return (
        <>
        <Divider/>
        <PhoneLogItem line={line}/>
        </>
      )})
  }

  return (
    <Card>
      <Box sx={styles.logContainer}>
        <Text sx={styles.title}>{title}</Text>
          <SimpleBar style={{ height: '300px' }}>
            {data ? renderData() : <Text>No Data</Text>}
            <Text> -- </Text>
          </SimpleBar>
        </Box>
      </Card>
  )
}

export default PhoneLog