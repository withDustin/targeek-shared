import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Theme } from 'theme'

const useTheme = (): Theme => {
  return useContext(ThemeContext)
}

export default useTheme
