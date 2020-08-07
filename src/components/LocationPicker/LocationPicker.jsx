import React from 'react'
import { Flex, Text, Select, Box } from '@chakra-ui/core'
import PropTypes from 'prop-types'

function LocationPicker({ userLocation }) {
  console.log({ userLocation })
  return (
    <Flex align="center" mt={5}>
      <Text mr={5}>Location</Text>
      <Box width={['100%', 1 / 2, 1 / 4]}>
        <Select size="lg">
          <option value="berlin">Berlin</option>
          <option value="strasbourg">Strasbourg</option>
          {userLocation && (
            <option value="custom">
              Current Location:{' '}
              {userLocation.heading ||
                `${userLocation.latitude}, ${userLocation.longitude}`}
            </option>
          )}
        </Select>
      </Box>
    </Flex>
  )
}

LocationPicker.propTypes = {
  userLocation: PropTypes.object,
}

export default LocationPicker
