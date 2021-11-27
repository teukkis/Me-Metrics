import React, { useState } from "react"
import { Textarea, Text } from "@chakra-ui/react"

const NotesBox = () => {
  let [value, setValue] = useState("")

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  return (
    <>
      <Text mb="8px">Notes: </Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Notes"
        size="sm"
      />
    </>
  )

}

export default NotesBox