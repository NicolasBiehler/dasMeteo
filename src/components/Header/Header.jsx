import React from 'react'
import { Box, Heading, Flex } from '@chakra-ui/core'
import PropTypes from 'prop-types'

import LocationPicker from '../LocationPicker'

function Header({ userLocation }) {
  return (
    <Flex ml={5} mt={5} mr={5}>
      <Box flexGrow={1}>
        <header>
          <Box justifyContent="center">
            <Heading>Das Meteo App</Heading>
          </Box>
          <LocationPicker userLocation={userLocation} />
        </header>
      </Box>
    </Flex>
  )
}

Header.propTypes = {
  userLocation: PropTypes.object,
}

export default Header
