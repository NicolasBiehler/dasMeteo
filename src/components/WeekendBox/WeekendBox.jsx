import React, { useMemo } from 'react'
import { Flex } from '@chakra-ui/core'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'

import WeatherStack from '../WeatherStack'

const getMiddayData = (dataPoints = [], ISODate) => {
  for (const dataPoint of dataPoints) {
    if (dataPoint.dt_txt === `${ISODate} 12:00:00`) {
      return dataPoint
    }
  }
}

const getWeekendDates = (currentISODate) => {
  const currentDateTime = DateTime.fromISO(currentISODate)

  const nextSaturday = currentDateTime
    .plus({ days: 6 - currentDateTime.weekday })
    .toISODate()
  const nextSunday = currentDateTime
    .plus({ days: 7 - currentDateTime.weekday })
    .toISODate()

  return {
    nextSaturday,
    nextSunday,
  }
}

function WeekendBox({ info }) {
  const currentISODate = DateTime.local().toISODate()

  const { nextSaturday, nextSunday } = useMemo(
    () => getWeekendDates(currentISODate),
    [currentISODate],
  )

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
