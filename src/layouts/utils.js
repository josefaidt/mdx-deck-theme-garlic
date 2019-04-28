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
