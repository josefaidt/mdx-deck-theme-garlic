import React from 'react'
import styled from '@emotion/styled'
import { useThemeUI } from 'theme-ui'
import { opacity } from '../util'

const StyledProgress = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  margin: 10px 0;
  width: 100%;
  z-index: 1;
  justify-content: center;
  div {
    height: ${props => props.barHeight};
    position: relative;
    width: 60vw;
    background: ${({ theme }) => opacity(theme.colors.text, 30)};
    filter: brightness(120%);
    span {
      display: block;
      height: ${props => props.barHeight};
      width: ${props => (props.percent ? `${props.percent}%` : '0%')};
      background-color: ${({ theme }) => theme.colors.primary};
      opacity: 1;
      position: relative;
      overflow: hidden;
    }
  }
`

const ProgressBar = props => {
  const { theme } = useThemeUI()
  return (
    <StyledProgress {...props} theme={theme}>
      <div>
        <span />
      </div>
    </StyledProgress>
  )
}

ProgressBar.defaultProps = {
  barHeight: '0.8rem',
}

export default ProgressBar
