import { Box, useMultiStyleConfig } from "@chakra-ui/react"

const Card = ({ children, ...props }) => {

  const styles = useMultiStyleConfig("Card")

  return (
    <Box sx={styles.container}>
      {children}
    </Box>
  )
}

export default Card