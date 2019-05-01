import styled from '@emotion/styled'

const StyledIcon = styled.a`
  position: fixed;
  left: 0;
  top: 0;
  margin: 1rem;
  color: ${props => props.fill};

  svg {
    fill: ${props => props.fill};
    stroke: ${props => props.fill};
  }
`

export default StyledIcon
