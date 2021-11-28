import React from "react"
import { Box, Text, Image, useMultiStyleConfig, VStack } from "@chakra-ui/react"
import profileImg from 'images/profileImage.jpg'

const NavPatientInfoBox = () => {

  const styles = useMultiStyleConfig("NavPatientInfoBox")

  return (
    <VStack sx={styles.container}>

        <Box sx={styles.imageBox}>
          <Image src={profileImg} alt='Profile Image'/>
        </Box>
        <Box sx={styles.nameBox}>
          <Text sx={styles.text}>Peter</Text>
          <Text sx={styles.text}>McDonald</Text>
        </Box>
      
    </VStack>
  )
}

export default NavPatientInfoBox