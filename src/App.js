import React, { useState } from 'react'
import {
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Text,
} from '@chakra-ui/core'
import { geolocated, geoPropTypes } from 'react-geolocated'

import Header from './components/Header'
import LocationPicker from './components/LocationPicker'
import WeatherStack from './components/WeatherStack'

import useDailyEndpoint from './hooks/use-daily-endpoint'

function App({ coords }) {
  const [location, setLocation] = useState('q=berlin,de')

  const { data, error } = useDailyEndpoint(
    location,
    process.env.REACT_APP_WEATHER_API_KEY,
  )

  return (
    <Flex direction="column" width="full" flexGrow={1}>
      <Header>
        <LocationPicker userLocation={coords} onChange={setLocation} />
      </Header>
      <Box m={5}>
        <nav>
          <Tabs defaultIndex={0} variant="enclosed">
            <TabList>
              <Tab>Today</Tab>
              <Tab>Next weekend</Tab>
            </TabList>
            <TabPanels mt={2}>
              <TabPanel>
                {error && <Text>API is unavailable</Text>}
                {!error && data && <WeatherStack title="Today" info={data} />}
              </TabPanel>
              <TabPanel>
                {/* TODO */}
                <WeatherStack title="Next Saturday" />
                <WeatherStack title="Next Sunday" />
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
