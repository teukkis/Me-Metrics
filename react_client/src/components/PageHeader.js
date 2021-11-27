import { Text, useMultiStyleConfig } from "@chakra-ui/react"


const PageHeader = ({ header }) => {

  const styles = useMultiStyleConfig("PageHeader")

  return (
      <Text sx={styles.headerText} >
        {header}
      </Text>
  )
}

export default PageHeader