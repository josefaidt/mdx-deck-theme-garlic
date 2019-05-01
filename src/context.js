import React from 'react'
import colors from './colors'
import { opacity } from './util'

export const ThemeContext = React.createContext({ colors, util: { opacity } })
