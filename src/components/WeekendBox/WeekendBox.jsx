import React from 'react'
import { Flex } from '@chakra-ui/core'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'

import WeatherStack from '../WeatherStack'

const getMiddayData = (dataPoints, ISODate) => {
  for (const dataPoint of dataPoints) {
    if (dataPoint.dt_txt === `${ISODate} 12:00:00`) {
      return dataPoint
    }
  }
}

function WeekendBox({ info }) {
  const now = DateTime.local()
  const nextSaturday = now.plus({ days: 6 - now.weekday }).toISODate()
  const nextSunday = now.plus({ days: 7 - now.weekday }).toISODate()

  const nextSaturdayData = getMiddayData(info.list, nextSaturday)
  const nextSundayData = getMiddayData(info.list, nextSunday)

  return (
    <Flex direction={{ base: 'column', lg: 'row' }}>
      {!nextSaturdayData && (
        <WeatherStack
          title="Next Saturday"
          errorMessage={'Data for next Saturday is not yet available'}
        />
      )}
      {nextSaturdayData && (
        <WeatherStack title="Next Saturday" info={nextSaturdayData} />
      )}
      {!nextSundayData && (
        <WeatherStack
          title="Next Sunday"
          errorMessage={'Data for next Sunday is not yet available'}
        />
      )}
      {nextSundayData && (
        <WeatherStack title="Next Sunday" info={nextSundayData} />
      )}
    </Flex>
  )
}

WeekendBox.propTypes = {
  info: PropTypes.object,
}

export default WeekendBox
