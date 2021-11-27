import React from "react"
import { Box, Grid, GridItem } from "@chakra-ui/react"

import DatePicker from "components/DatePicker"
import PageHeader from "components/PageHeader"
import PieChart from "components/dataDisplayNivoComponents/PieChart"
import CustomUnorderedList from "components/CustomUnorderedList"
import PhoneLog from 'components/PhoneLog'
import NotesBox from 'components/NotesBox'

import { pieTestData } from "components/dataDisplayNivoComponents/testData/PieChart"
import { listTestData, listTestData2, phonelogTestData } from "components/dataDisplayNivoComponents/testData/CustomUnorderedList"

const PhoneUsage = () => {

  return (
    <Grid 
      h="100%"
      templateRows="repeat(7, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={1}>
      <GridItem rowSpan={1} colSpan={1}>
        <PageHeader header={"Phone Usage"}/>
      </GridItem>
      <GridItem rowSpan={1} colSpan={3}>
        <DatePicker/>
      </GridItem>
      <GridItem rowSpan={4} colSpan={1}>
        <PieChart data={pieTestData}/>
      </GridItem>
      <GridItem rowSpan={4} colSpan={1}>
        <Box w="300px" h="345px" borderRadius="md" m={0} bg="#888888">
          <CustomUnorderedList data={listTestData} title={'Applications'}/>
        </Box>
      </GridItem>
      <GridItem rowSpan={4} colSpan={1}>
        <Box  w="300px" h="345px" borderRadius="md" m={0} bg="#888888">
          <CustomUnorderedList data={listTestData2} title={'Notifications'}/>
        </Box>
      </GridItem>
      <GridItem rowSpan={3} colSpan={1}>
        <Box w="300px" h="345px" borderRadius="md" m={0} bg="#888888">
          <PhoneLog data={phonelogTestData} title={'Calls & Messages'}/>
        </Box>
        
      </GridItem>
      <GridItem rowSpan={4} colSpan={3} paddingTop="40px">
        <NotesBox/>
      </GridItem>
    </Grid>
  )

}

export default PhoneUsage