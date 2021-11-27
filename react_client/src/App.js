import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { GridItem, Grid } from "@chakra-ui/react"

// Navigation
import NavBar from 'components/navigationBar/navBar'
import TopBar from 'components/topBar/topBar'

// Dashboard pages
import Home from 'pages/dashboard/home'
import LightnNoise from 'pages/dashboard/lightnNoise'
import Location from 'pages/dashboard/location'
import PhoneUsage from 'pages/dashboard/phoneUsage'
import PhysicalActivities from 'pages/dashboard/physicalActivities'
import Sleep from 'pages/dashboard/sleep'

// Personal data pages
import PHG9 from 'pages/personalData/PHQ9'
import Notes from 'pages/personalData/notes'
import BDI from 'pages/personalData/BDI'
import DAaS from 'pages/personalData/DAaS'

const App = () => {
 
  return (
    <div>
        <Grid
          h="100vh"
          w="100vw"
          templateRows="repeat(12, 1fr)"
          templateColumns="repeat(8, 1fr)"
          bgGradient="linear(to-r, gray.100, gray.400)"
        >
          <GridItem rowSpan={12} colSpan={1}>
            <Route path='/'>
              <NavBar/>
            </Route>
          </GridItem>

          <GridItem bg="blue.500" rowSpan={1} colSpan={7}>
            <Route path='/'>
              <TopBar/>
            </Route>
          </GridItem>

          <GridItem rowSpan={10} colSpan={7} padding="20px">

            <Route exact path='/'>
              <Home/>
            </Route>

            <Route exact path='/light_noise'>
              <LightnNoise/>
            </Route>

            <Route exact path='/location'>
              <Location/>
            </Route>

            <Route exact path='/phone_usage'>
              <PhoneUsage/>
            </Route>

            <Route exact path='/Physical_activities'>
              <PhysicalActivities/>
            </Route>

            <Route exact path='/sleep'>
              <Sleep/>
            </Route>

            <Route exact path='/notes'>
              <Notes/>
            </Route>

            <Route exact path='/beck_depression_inventory'>
              <BDI/>
            </Route>

            <Route exact path='/depression_anxiety_and_stress'>
              <DAaS/>
            </Route>

            <Route exact path='/patient_health_questionnaire_9'>
              <PHG9/>
            </Route>
          </GridItem>
        </Grid>
    </div>
  )
}

export default App