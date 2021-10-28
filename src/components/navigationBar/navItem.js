import { Box, Text, HStack, useMultiStyleConfig } from "@chakra-ui/react"
import { PhoneIcon } from '@chakra-ui/icons'
import { useHistory } from "react-router"

const NavItem = ({ to, variant, children, ...rest }) => {

  const history = useHistory()
  const styles = useMultiStyleConfig("NavItem")

  return (
    <Box
      as="button"
      _hover={{ bg: "#aaaaaa44" }}
      _active={{ bg: "#aaaaaa55" }}
      sx={styles.box}
      _focus={{ bgGradient: "linear(to-r, blue.200, blue.500)"}}
      onClick={() => history.push(to)}
    >
      <HStack>
        <PhoneIcon/>
        <Text>{children}</Text>
      </HStack>
    </Box>
    
  )
}

export default NavItem