import React from "react"
import { 
  Tabs, 
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from "@chakra-ui/react"



const DatePicker = () => {


  return (
    <Tabs >
      <TabList mb="1em">
        <Tab>Day</Tab>
        <Tab>Week</Tab>
        <Tab>Month</Tab>
        <Tab>Year</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>Day!</p>
        </TabPanel>
        <TabPanel>
          <p>Week!</p>
        </TabPanel>
        <TabPanel>
          <p>Month!</p>
        </TabPanel>
        <TabPanel>
          <p>Year!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default DatePicker