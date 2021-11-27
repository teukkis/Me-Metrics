import TopBarContainer from "components/topBar/topBarContainer"
import { Text, useMultiStyleConfig } from "@chakra-ui/react"


const TopBar = (props) => {

  const styles = useMultiStyleConfig("AppTitle")

  return (
    <TopBarContainer {...props}>
      <Text sx={styles.title} >
        Me Metrics
      </Text>
    </TopBarContainer>
  )
}

export default TopBar