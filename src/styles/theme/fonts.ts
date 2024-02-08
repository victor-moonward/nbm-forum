type TFonts = {
  family: {
    default: string;
  },
  size: {
    title: number
    text: number
    link: number
  },
  height: {
    title: number
    text: number
  },
  weight: {
    [key: string]: '400' | '700'
  }
}

export const Fonts: TFonts = {
  family: {
    default: 'Syne'
  },
  size: {
    title: 24,
    text: 16,
    link: 14
  },
  height: {
    title: 28,
    text: 20
  },
  weight: {
    normal: '400',
    bold: '700'
  }
}