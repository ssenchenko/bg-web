export type PaletteColour = {
  main: string;
  textColour: string;
  light?: string;
  dark?: string;
};
export type Typography = {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
};
export type Palette = {
  primary: PaletteColour;
  secondary: PaletteColour;
  error: PaletteColour;
  background: PaletteColour;
};
export type Breakpoints = {
  phone: number;
  tabletPortrait: number;
  tabletLandscape: number;
  desktop: number;
  bigDesktop: number;
};
export type Theme = {
  palette: Palette;
  typography: Typography;
  breakpoints: Breakpoints;
};
export type WithTheme<T> = T & {
  theme: Theme;
};

export type Breakpoint = Extract<keyof Breakpoints, string>;

const defaultThemeLtr: Theme = {
  palette: {
    primary: {
      main: '#64ffda', // teal, alpha = 200
      light: '#9effff',
      dark: '#14cba8',
      textColour: '#000000',
    },
    secondary: {
      main: '#ef6c00', // amber 800
      light: '#ff9d3f',
      dark: '#b53d00',
      textColour: '#fafafa',
    },
    error: {
      main: '#c2185b', // pink 700
      light: '#fa5788',
      dark: '#8c0032',
      textColour: '#ffffff',
    },
    background: {
      main: '#ffffff',
      textColour: '#484848',
    },
  },
  typography: {
    fontFamily: "'K2D',sans-serif",
    fontSize: '14px',
    lineHeight: '1.43',
  },
  breakpoints: {
    phone: 320, // iPhone 5/SE
    tabletPortrait: 600, // Galaxy S... -> 360, iPhone 6/7/8/X -> 375, Pixel2 -> 411
    tabletLandscape: 900, // Galaxy S h(eight) -> 640, iPhone 6/7/8 h -> 667, iPad -> 768,
    desktop: 1200, // iPad h, iPadPro
    bigDesktop: 1800,
  },
};

export default defaultThemeLtr;
