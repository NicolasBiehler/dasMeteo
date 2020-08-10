import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from './chakra.theme'

import { render } from '@testing-library/react'

const customRender = (ui, opts = {}) => {
  function Wrapper({ children }) {
    return (
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        {children}
      </ThemeProvider>
    )
  }

  return render(ui, { wrapper: Wrapper, ...opts })
}

export * from '@testing-library/react'
export { customRender as render }
