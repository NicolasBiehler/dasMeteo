import React from 'react'
import { Box, Heading, Flex } from '@chakra-ui/core'
import PropTypes from 'prop-types'

function Header({ children }) {
  return (
    <Flex ml={5} mt={5} mr={5}>
      <Box flexGrow={1}>
        <header>
          <Box justifyContent="center">
            <Heading>Das Meteo App</Heading>
          </Box>
          {children}
        </header>
      </Box>
    </Flex>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
