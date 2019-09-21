import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import theme from '../theme'
import StyledContour from './Contour.css'
import { generateViewWidth, generateViewHeight } from './utils'

const StyledLayout = styled(StyledContour)`
  display: grid;
  grid-template-columns: ${props => generateViewWidth(props.contentWidth)};
  grid-template-rows: 100vh;
  align-items: center;
  grid-areas: 'left right';
  overflow: hidden;

  .content {
    /* height: 100%; */
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  &.inverted {
    grid-template-columns: ${props => generateViewWidth(props.contentWidth, true)};
    .textured {
      grid-column: 2;
      grid-row: 1;
    }
    .content {
      grid-column: 1;
      grid-row: 1;
      align-items: flex-end;
    }
  }
  &.framed {
    display: flex;
    width: 100%;
    height: 100%;
    .textured {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      .content {
        flex: 1;
        background-color: ${props => props.theme.colors.background};
        margin: 3.5rem;
        padding: 4rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 100vw;
    grid-template-rows: ${props => generateViewHeight(props.contentWidth)};
    .content {
      padding: 1rem 0.5rem;
    }
    &.inverted {
      grid-template-columns: ${props => generateViewHeight(props.contentWidth, true)};
    }
    &.inverted > .textured {
      grid-row: 2;
      grid-column: 1;
    }
    &.inverted > .content {
      grid-row: 1;
      grid-column: 1;
      align-items: flex-end;
    }
  }
`

const Contour = props => {
  return (
    <StyledLayout
      className={props.framed ? 'framed' : props.invert ? 'inverted' : ''}
      contentWidth={props.contentWidth}
      theme={theme}
    >
      {props.framed ? (
        <div className="textured">
          <div className="content">{props.children}</div>
        </div>
      ) : (
        <>
          <div className="textured" />
          <div className="content">{props.children}</div>
        </>
      )}
    </StyledLayout>
  )
}

Contour.propTypes = {
  invert: PropTypes.bool,
  framed: PropTypes.bool,
  contentWidth: PropTypes.number,
}

Contour.defaultProps = {
  invert: false,
  framed: false,
  contentWidth: 80,
}

export default Contour
