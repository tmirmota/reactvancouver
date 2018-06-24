export const ultraViolet = '#540CFA'
export const melrose = '#C4ABFD'

export const theme = {
  primary: ultraViolet,
  secondary: melrose,
}

export const grey = {
  black: '#000000',
  dark: '#4A4A4A',
  light: '#FAFAFA',
  white: '#FFFFFF',
  calc: value => `hsl(230, 20%, ${value}%)`,
}

export const gradient = {
  light: `linear-gradient(135deg, ${melrose} 0%, ${ultraViolet} 100%)`,
  dark: `linear-gradient(135deg, rgba(84,12,250,0.3) 0%, ${ultraViolet} 100%)`,
}

export const background = grey.light

export default {
  theme,
  grey,
  gradient,
  background,
}
