import React, { useState } from "react"
import { CalendarIcon } from "@chakra-ui/icons"
import { HStack } from "@chakra-ui/react"
import { Calendar, CalendarDefaultTheme } from '@uselessdev/datepicker'
import {
  Popover,
  PopoverTrigger,
  ChakraProvider,
  PopoverContent,
  Box,
  StackDivider,
  Container,
} from "@chakra-ui/react"

import Card from "components/Card"


const DatePicker = () => {

  const [dates, setDates] = useState()

  const handleSelectEndDate = (date) => setDates(dates => ({ ...dates, end: date }))
  const handleSelectStartDate = (date) => setDates(dates => ({ ...dates, start: date }))

  return (
    <Card>
      <Container>
      <HStack 
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch">
        <Box w="100%" h="100px">
          <CalendarIcon w={10} h={10} color="gray.400"/>
        </Box>
        <Box w="100%" h="100px">
          <Popover>
            <PopoverTrigger>
              <Box
                tabIndex="0"
                role="button"
                children="Date"
              />
            </PopoverTrigger>
            <PopoverContent width="unset" color="#777777">
              <ChakraProvider theme={CalendarDefaultTheme}>
                <Calendar
                  values={dates}
                  onSelectEndDate={handleSelectEndDate}
                  onSelectStartDate={handleSelectStartDate}
                />
              </ChakraProvider>
            </PopoverContent>
          </Popover>
        </Box>
        </HStack>
      </Container>
    </Card>
  )
}

export default DatePicker