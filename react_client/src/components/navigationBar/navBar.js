import NavContainer from "components/navigationBar/navContainer"
import NavPatientInfoBox from "components/navigationBar/navPatientInfoBox"
import NavItems from "components/navigationBar/navItems"


const NavBar = (props) => {

  return (
    <NavContainer {...props}>
      <NavPatientInfoBox/>
      
      <NavItems />
    </NavContainer>
  )
}

export default NavBar