import React, { useState } from "react"
import { Textarea, Text, useMultiStyleConfig, Box } from "@chakra-ui/react"
import Card from "components/Card"

const NotesBox = () => {
  const styles = useMultiStyleConfig("NotesBox")

  let [value, setValue] = useState("")

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  return (
    <Card>
      <Box sx={styles.container}>
      <Text sx={styles.notesText}>Notes: </Text>
      <Textarea
        sx={styles.textarea}
        value={value}
        onChange={handleInputChange}
        placeholder="Notes"
        size="md"
      />
      </Box>
    </Card>
  )

}

export default NotesBox