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

export const generateViewHeight = (contentWidth, _reverse = false) => {
  const textureWidth = 100 - contentWidth
  const result = `${textureWidth}vh ${contentWidth}vh`
  if (!_reverse) {
    return result
  } else {
    return result
      .split(' ')
      .reverse()
      .join(' ')
  }
}
