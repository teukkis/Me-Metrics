
import { VStack, Flex, StackDivider, useMultiStyleConfig } from "@chakra-ui/react"


const NavContainer = ({ children, ...props }) => {

  const styles = useMultiStyleConfig("NavContainer", props)

  return (
    <Flex sx={styles.container} {...props}>
      <VStack sx={styles.vstack} divider={<StackDivider borderColor="gray.200" />}>
        {children}
      </VStack>
    </Flex>
  )
}

export default NavContainer