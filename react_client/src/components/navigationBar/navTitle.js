import { Text, useMultiStyleConfig } from "@chakra-ui/react"


const NavTitle = ({ title }) => {

  const styles = useMultiStyleConfig("NavTitle")

  return (
      <Text sx={styles.titleText} >
        {title}
      </Text>
  )
}

export default NavTitle