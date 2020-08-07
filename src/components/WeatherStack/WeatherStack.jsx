import React from 'react'
import { Stack, Text } from '@chakra-ui/core'
import PropTypes from 'prop-types'

function WeatherStack({ title }) {
  return (
    <Stack>
      <Text>{title}</Text>
    </Stack>
  )
}

WeatherStack.propTypes = {
  title: PropTypes.string.isRequired,
}

export default WeatherStack
