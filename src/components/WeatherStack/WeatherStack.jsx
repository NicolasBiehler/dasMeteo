import React from 'react'
import { Text, Stack, Tag, Heading, Flex } from '@chakra-ui/core'
import PropTypes from 'prop-types'

function WeatherStack({ title, info, errorMessage }) {
  const { main: { temp } = {}, weather = [], wind = {} } = info || {}
  const { description } = weather[0] || {}

  return (
    <Stack
      backgroundColor="gray.100"
      p={5}
      m={5}
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
    >
      <Heading color="orange.300">{title}</Heading>
      {!info && !errorMessage && <Text>Loading...</Text>}
      {errorMessage && <Text>{errorMessage}</Text>}
      {info && (
        <Flex direction="column" align="center">
          <Flex align="center">
            <Heading as="h4" size="md">
              Temperature
            </Heading>
            <Tag>{temp}&#176;C</Tag>
          </Flex>
          <Flex align="center" mt={2}>
            <Heading as="h4" size="md" mr={3}>
              Weather
            </Heading>
            <Text>{description}</Text>
          </Flex>
          <Flex align="center" mt={2}>
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
