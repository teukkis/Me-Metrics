import { extendTheme } from '@chakra-ui/react'
import styles from 'themes/styles'                    // Global styles
import borders from 'themes/foundations/borders'      // Foundational
import Button from 'themes/components/Button'         // Components
import Text from 'themes/components/Text'
import NavContainer from 'themes/components/NavBar/NavContainer'
import NavItem from 'themes/components/NavBar/NavItem'
import NavTitle from 'themes/components/NavBar/NavTitle'
import NavPatientInfoBox from 'themes/components/NavBar/NavPatientInfoBox'
import NavItems from 'themes/components/NavBar/NavItems'
import TopBarContainer from 'themes/components/TopBar/TopBarContainer'


const theme = extendTheme({
  styles,
  borders,
  components: {
    Button,
    //Text,
    NavContainer,
    NavItem,
    NavTitle,
    NavPatientInfoBox,
    NavItems,
    TopBarContainer
  },
})
export default theme