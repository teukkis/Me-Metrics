import React from "react"
import { Box, Text, Image, useMultiStyleConfig } from "@chakra-ui/react"
import profileImg from 'images/profileImage.jpg'

const NavPatientInfoBox = () => {

  const styles = useMultiStyleConfig("NavPatientInfoBox")

  return (
    <Box sx={styles.box}>
      <Box>
        <Image sx={styles.image} src={profileImg} alt='Profile Image'/>
      </Box>
      <Box>
        <Text sx={styles.text}>Peter</Text>
        <Text sx={styles.text}>McDonald</Text>
        <Text sx={styles.text}>SSN</Text>
      </Box>
    </Box>
  )
}

export default NavPatientInfoBox