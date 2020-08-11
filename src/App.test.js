import React from 'react'

import { render } from './testUtils'
import App from './App'

jest.mock('react-geolocated', () => ({
  geolocated: () => (ui) => ui,
}))

describe('App', () => {
  test('renders the header title', () => {
    const { getByText } = render(<App />)
    const titleElement = getByText(/Das Meteo App/i)
    expect(titleElement).toBeInTheDocument()
  })
})
