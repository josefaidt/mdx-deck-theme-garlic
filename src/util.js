export const opacity = (color, opacityPercentage) => {
  let c = ''
  if (typeof color === 'string' && color[0] === '#') {
    c = color
  } else {
    c = colors[color]
  }
  const opacityHex = Math.floor((opacityPercentage / 100) * 255).toString(16)
  return `${c}${opacityHex}`
}
