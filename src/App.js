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
import WeekendBox from './components/WeekendBox'

import {
  useDailyEndpoint,
  useWeekendEndpoint,
} from './hooks/use-open-weather-endpoints'

function App({ coords }) {
  const [location, setLocation] = useState('q=berlin')

  const { data, error } = useDailyEndpoint(
    location,
    process.env.REACT_APP_WEATHER_API_KEY,
  )

  const { data: weekendData, error: weekendError } = useWeekendEndpoint(
    location,
    process.env.REACT_APP_WEATHER_API_KEY,
  )

  return (
    <Flex
      direction="column"
      width="full"
      height="100vh"
      flexGrow={1}
      backgroundColor="gray.50"
    >
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
                {weekendError && <Text>API is unavailable</Text>}
                {!weekendError && weekendData && (
                  <WeekendBox info={weekendData} />
                )}
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
