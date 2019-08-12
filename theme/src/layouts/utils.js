export const generateViewWidth = (contentWidth, _reverse = false) => {
  const textureWidth = 100 - contentWidth
  const result = `${textureWidth}vw ${contentWidth}vw`
  if (!_reverse) {
    return result
  } else {
    return result
      .split(' ')
      .reverse()
      .join(' ')
  }
}

export const generateViewHeight = (contentHeight, _reverse = false) => {
  const textureHeight = 100 - contentHeight
  const result = `${textureHeight}vh ${contentHeight}vh`
  if (!_reverse) {
    return result
  } else {
    return result
      .split(' ')
      .reverse()
      .join(' ')
  }
}
