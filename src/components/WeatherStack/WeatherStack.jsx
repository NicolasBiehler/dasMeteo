import React from 'react'
import { Text, Stack, Tag, Heading, Flex } from '@chakra-ui/core'
import PropTypes from 'prop-types'

const themes = {
  hot: {
    backgroundColor: 'orange.200',
    titleColor: 'red.800',
  },
  neutral: {
    backgroundColor: 'blue.200',
    titleColor: 'black',
  },
  cold: {
    backgroundColor: 'gray.200',
    titleColor: 'blue.700',
  },
}

function WeatherStack({ title, info, errorMessage }) {
  const { main: { temp } = {}, weather = [], wind = {} } = info || {}
  const { description } = weather[0] || {}

  let colorTheme = 'neutral'
  if (temp >= 25) {
    colorTheme = 'hot'
  }
  if (temp < 8) {
    colorTheme = 'cold'
  }

  return (
    <Stack
      backgroundColor={themes[colorTheme].backgroundColor}
      p={5}
      m={5}
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
    >
      <Heading color={themes[colorTheme].titleColor}>{title}</Heading>
      {!info && !errorMessage && <Text>Loading...</Text>}
      {errorMessage && <Text>{errorMessage}</Text>}
      {info && (
        <Flex direction="column" align="center">
          <Flex align="center" direction={{ base: 'column', sm: 'row' }}>
            <Heading as="h4" size="md" mr={3}>
              Temperature
            </Heading>
            <Tag>{temp}&#176;C</Tag>
          </Flex>
          <Flex align="center" direction={{ base: 'column', sm: 'row' }} mt={2}>
            <Heading as="h4" size="md" mr={3}>
              Weather
            </Heading>
            <Text>{description}</Text>
          </Flex>
          <Flex align="center" direction={{ base: 'column', sm: 'row' }} mt={2}>
            <Heading as="h4" size="md" mr={3}>
              Wind
            </Heading>
            <Text>{wind.speed} m/s</Text>
          </Flex>
        </Flex>
      )}
    </Stack>
  )
}

WeatherStack.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.object,
  errorMessage: PropTypes.string,
}

export default WeatherStack
