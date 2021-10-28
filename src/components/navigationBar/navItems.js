import { Box, Stack, useMultiStyleConfig } from "@chakra-ui/react"
import NavItem from "components/navigationBar/navItem"
import NavTitle from "components/navigationBar/navTitle"

const NavItems = () => {

  const styles = useMultiStyleConfig("NavItems")

  return (
    <Box sx={styles.box}>

      <Stack spacing={2}>

        <NavTitle title={'Personal Data'}/>
        <NavItem to={"/depression_anxiety_and_stress"}>DAaS</NavItem>
        <NavItem to={"/beck_depression_inventory"}>BDI</NavItem>
        <NavItem to={"/patient_health_questionnaire_9"}>PHQ-9</NavItem>
        <NavItem to={"/notes"}>Notes</NavItem>

        <Box __css={styles.divider}></Box>

        <NavTitle title={'Dashboard'}/>
        <NavItem to={"/"}>Home</NavItem>
        <NavItem to={"/sleep"}>Sleep</NavItem>
        <NavItem to={"/phone_usage"}>Phone usage</NavItem>
        <NavItem to={"/location"}>Location</NavItem>
        <NavItem to={"/Physical_activities"}>Physical activities</NavItem>
        <NavItem to={"/light_noise"}>Light &#38; Noise</NavItem>

      </Stack>
    </Box>

  )
}

export default NavItems