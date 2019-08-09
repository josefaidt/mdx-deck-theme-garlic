import React from 'react'
import styled from '@emotion/styled'
import colors from '../colors'
import ProgressBar from './ProgressBar'
import GithubIcon from './GithubIcon'
import StyledIcon from './Icon.css'

const StyledTag = styled.a`
  position: fixed;
  right: 0;
  top: 0;
  margin: 1rem;
  font-size: 1.5rem;
  color: ${colors.default};
  text-decoration: none;
`

const StyledLayout = styled.main`
  background-color: ${colors.bg};
`

const Provider = props => {
  console.log(props)
  return (
    <StyledLayout>
      {props.children}
      {/* <ProgressBar percent={Math.floor((100 / (props.slides.length - 1)) * props.index)} /> */}
      <StyledIcon
        href={props.logoUrl || 'https://github.com/josefaidt/mdx-deck-theme-garlic'}
        target="_blank"
        fillColor={colors.default}
      >
        {props.logo ? <props.logo /> : <GithubIcon />}
      </StyledIcon>
      <StyledTag href={props.authorUrl || 'https://josefaidt.dev/'} target="_blank">
        {props.author || 'josef.aidt'}
      </StyledTag>
    </StyledLayout>
  )
}

Provider.defaultProps = {
  logoUrl: '',
  logo: '',
  author: '',
  authorUrl: '',
}

export default Provider
