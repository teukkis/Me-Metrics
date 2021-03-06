
import { HStack, Flex, useMultiStyleConfig, Box } from "@chakra-ui/react"


const TopBarContainer = ({ children, ...props }) => {

  const styles = useMultiStyleConfig("TopBarContainer")

  return (
    <Flex __css={styles.container} {...props}>
      <HStack __css={styles.hstack}>
       
        <Box>
        {children}
        </Box>
        <Box>
          
        </Box>
      </HStack>
    </Flex>
  )
}

export default TopBarContainer