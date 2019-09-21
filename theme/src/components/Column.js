import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledColumn = styled.div`
  display: grid;
  height: 100%;
  width: ${props => props.viewWidth}vw;
  align-content: center;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  & > div {
    display: flex;
    align-items: center;
  }
`

const Column = ({ children, count, viewWidth }) => (
  <StyledColumn count={count} viewWidth={viewWidth}>
    {children}
  </StyledColumn>
)

Column.defaultProps = {
  count: 2,
  viewWidth: 80,
}

Column.propTypes = {
  child: PropTypes.string,
}

export default Column
