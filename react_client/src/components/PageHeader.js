import { Text, Box, Badge, useMultiStyleConfig } from "@chakra-ui/react"
import Card from "components/Card"

const PageHeader = ({ header }) => {

  const styles = useMultiStyleConfig("PageHeader")

  return (
      
      <Card >
        <Box sx={styles.container} p="6">
          <Box >
            <Badge borderRadius="full">
              <Text sx={styles.headerText} >
              {header}
              </Text>
            </Badge>
          </Box>
        </Box>
    </Card>
  )
}

export default PageHeader