import colors from './colors';

export default {
  brand: {
    primary: '#58CC64',
    default: '#067AE4',
    alt: '#0684F8'
  },
  ui: {
    wash: '#F2F5F7',
    paper: '#FFFEFC',
    default: '#ffffff',
    border: 'rgba(0,0,0,0.08)',
    borderLight: 'rgba(0,0,0,0.04)'
  },
  // temporary
  bg: {
    wash: '#f6f7f8',
    paper: '#FFFEFC',
    default: '#ffffff',
    border: 'rgba(0,0,0,0.08)',
    borderLight: 'rgba(0,0,0,0.04)'
  },
  shadows: {
    default: '0 4px 8px rgba(0,0,0,0.08)',
    hover: '0 8px 24px rgba(0,0,0,0.10)',
    active: '0 6px 20px rgba(0,0,0,0.09)',
    button: '0 4px 12px rgba(0,0,0,0.08)',
    polaris: '0 1.2rem 3.6rem rgba(0,0,0,.2)'
  },
  animations: {
    default: '0.2s ease-out',
    hover: '0.2s ease-in',
    active: '0.2s ease-in-out'
  },
  // github approach to breakpoints with a little tweak
  breakpoints: ['576px', '768px', '992px', '1200px'],
  maxWidths: {
    small: '576px',
    medium: '768px',
    large: '992px',
    xlarge: '1200px'
  },
  // from preset.js of rebass defaults
  colors: {
    heading: '#222',
    text: '#444',
    background: '#fff',
    primary: '#58CC64',
    secondary: '#30c',
    muted: '#f6f6f9',
    gray: '#dddddf',
    highlight: 'hsla(205, 100%, 40%, 0.125)',
    ...colors
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [
    '12px',
    '14px',
    '16px',
    '20px',
    '24px',
    '32px',
    '48px',
    '64px',
    '96px'
  ],
  fontWeights: {
    light: 300,
    body: 400,
    regular: 400,
    semibold: 600,
    bold: 700,
    heading: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },

  // paddings and margins [0] -> [12]
  space: [
    '0px',
    '4px',
    '8px',
    '16px',
    '24px',
    '32px',
    '40px',
    '48px',
    '64px',
    '80px',
    '96px',
    '112px',
    '128px'
  ]
};
