export const opacity = (color, opacityPercentage) => {
  let c = ''
  if (typeof color === 'string' && color[0] === '#') {
    c = color
  }
  const opacityHex = Math.floor((opacityPercentage / 100) * 255).toString(16)
  return `${c}${opacityHex}`
}
