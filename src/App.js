import React from 'react'
import {
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from '@chakra-ui/core'
import { geolocated, geoPropTypes } from 'react-geolocated'

import Header from './components/Header'
import WeatherStack from './components/WeatherStack'

function App({ coords }) {
  return (
    <Flex direction="column" width="full" flexGrow={1}>
      <Header userLocation={coords} />
      <Box m={5}>
        <nav>
          <Tabs defaultIndex={0}>
            <TabList>
              <Tab>Today</Tab>
              <Tab>Next weekend</Tab>
            </TabList>
            <TabPanels mt={2}>
              <TabPanel>
                <WeatherStack title="Today" />
              </TabPanel>
              <TabPanel>
                <WeatherStack title="Weekend" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </nav>
      </Box>
    </Flex>
  )
}
App.propTypes = { ...App.propTypes, ...geoPropTypes }

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App)
