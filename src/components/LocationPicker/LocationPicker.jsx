import React from 'react'
import { Flex, Text, Select, Box } from '@chakra-ui/core'
import PropTypes from 'prop-types'

function LocationPicker({ userLocation, onChange }) {
  return (
    <Flex align="center" mt={5}>
      <Text mr={5}>Location</Text>
      <Box width={['100%', 1 / 2, 1 / 4]}>
        <Select
          size="lg"
          onChange={(e) => onChange(e.target.value)}
          defaultValue={0}
        >
          <option value="q=berlin">Berlin</option>
          <option value="q=strasbourg">Strasbourg</option>
          {userLocation && userLocation.latitude && userLocation.longitude && (
            <option
              value={`lat=${userLocation.latitude}&lon=${userLocation.longitude}`}
            >
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
  onChange: PropTypes.func.isRequired,
}

export default LocationPicker
