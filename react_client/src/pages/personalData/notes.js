
import { Grid, GridItem } from "@chakra-ui/react"
import React from "react"

const Notes = () => {

  return (
    <Grid 
      h="100%"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={1}>
      <GridItem rowSpan={1} colSpan={1}>
        Notes
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        Notes
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        Notes
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        Notes
      </GridItem>
    </Grid>
  )

}

export default Notes