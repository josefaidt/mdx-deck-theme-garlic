import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { ThemeContext } from '../context'

const StyledProgress = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  margin: 10px 0;
  width: 100%;
  justify-content: center;
  div {
    height: ${props => props.barHeight};
    position: relative;
    width: 60vw;
    background: ${context => context.opacity(context.colors.default, 30)};
    filter: brightness(120%);
    span {
      display: block;
      height: ${props => props.barHeight};
      width: ${props => (props.percent ? `${props.percent}%` : '0%')};
      background-color: ${context => context.colors.accent};
      position: relative;
      overflow: hidden;
    }
  }
`

const ProgressBar = props => {
  const context = useContext(ThemeContext)
  return (
    <StyledProgress {...props} {...context}>
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
