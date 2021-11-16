
import { Grid, GridItem } from "@chakra-ui/react"
import React from "react"

const PhysicalActivities = () => {

  return (
    <Grid 
      h="100%"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={1}>
      <GridItem rowSpan={1} colSpan={1}>
        PhysicalActivities
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        PhysicalActivities
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        PhysicalActivities
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        PhysicalActivities
      </GridItem>
    </Grid>
  )

}

export default PhysicalActivities