import { Grid, GridItem } from "@chakra-ui/react"
import React from "react"

import DatePicker from "components/DatePicker"
import PageHeader from "components/PageHeader"
import PieChart from "components/dataDisplayNivoComponents/PieChart"
import NotesBox from 'components/NotesBox'

import { lineChartTestData } from "components/dataDisplayNivoComponents/testData/LineChart"
import { pieTestData } from "components/dataDisplayNivoComponents/testData/PieChart"
import LineChart from "components/dataDisplayNivoComponents/LineChart"


const PhysicalActivities = () => {

  return (
    <Grid 
      h="100%"
      templateRows="repeat(8, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={5}>

      <GridItem rowSpan={1} colSpan={1}>
        <PageHeader header={"Phone Usage"}/>
      </GridItem>

      <GridItem rowSpan={1} colSpan={1}>
        <DatePicker/>
      </GridItem>

      <GridItem rowSpan={3} colSpan={2}>
        <LineChart data={lineChartTestData}/>
      </GridItem>

      <GridItem rowSpan={5} colSpan={2}>
          <PieChart data={pieTestData}/>
      </GridItem>

      <GridItem rowSpan={3} colSpan={2}>
          <LineChart data={lineChartTestData}/>
      </GridItem>

      <GridItem rowSpan={2} colSpan={4}>
        <NotesBox />
      </GridItem>

    </Grid>
  )

}

export default PhysicalActivities