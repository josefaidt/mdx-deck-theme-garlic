import styled from '@emotion/styled'

const StyledIcon = styled.a`
  position: fixed;
  left: 0;
  top: 0;
  margin: 1rem;
  color: ${props => props.fillColor};
  z-index: 1;

  svg {
    fill: ${props => props.fillColor};
    stroke: ${props => props.fillColor};
  }
`

export default StyledIcon
