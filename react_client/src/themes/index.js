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
import PageHeader from 'themes/components/PageHeader'
import AppTitle from 'themes/components/AppTitle'
import PhoneLog from 'themes/components/PhoneLog'
import CustomUnorderedList from 'themes/components/CustomUnorderedList'
import Card from 'themes/components/Card'
import NotesBox from 'themes/components/NotesBox'
import PhoneLogItem from 'themes/components/PhoneLogItem'
import CustomUnorderedListItem from 'themes/components/CustomUnorderedListItem'

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
    TopBarContainer,
    PageHeader,
    AppTitle,
    PhoneLog,
    CustomUnorderedList,
    Card,
    NotesBox,
    PhoneLogItem,
    CustomUnorderedListItem
  },
})
export default theme