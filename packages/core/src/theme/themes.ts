import { Theme } from '../types/theme';

// Modern color palette generator
const createColorPalette = (primary: string, secondary: string, success: string, warning: string, error: string, info: string) => {
  const generateShades = (color: string) => {
    // This is a simplified version - in production you'd use a proper color manipulation library
    return {
      50: color + '0D', // 5% opacity
      100: color + '1A', // 10% opacity
      200: color + '33', // 20% opacity
      300: color + '4D', // 30% opacity
      400: color + '66', // 40% opacity
      500: color,
      600: color + 'CC', // 80% opacity
      700: color + 'E6', // 90% opacity
      800: color + 'F0', // 94% opacity
      900: color + 'FA', // 98% opacity
    };
  };

  return {
    primary: generateShades(primary),
    secondary: generateShades(secondary),
    success: generateShades(success),
    warning: generateShades(warning),
    error: generateShades(error),
    info: generateShades(info),
  };
};

// Light theme
export const lightTheme: Theme = {
  name: 'light',
  mode: 'light',
  colors: {
    ...createColorPalette(
      '#6366f1', // Indigo primary
      '#8b5cf6', // Purple secondary
      '#10b981', // Emerald success
      '#f59e0b', // Amber warning
      '#ef4444', // Red error
      '#06b6d4'  // Cyan info
    ),
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      inverse: '#0f172a',
    },
    surface: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      inverse: '#0f172a',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
      tertiary: '#64748b',
      inverse: '#ffffff',
      disabled: '#94a3b8',
    },
    border: {
      primary: '#e2e8f0',
      secondary: '#f1f5f9',
      tertiary: '#f8fafc',
      focus: '#6366f1',
    },
  },
  typography: {
    fontFamily: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      secondary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"JetBrains Mono", "Fira Code", "Monaco", "Cascadia Code", monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
    '6xl': '12rem',
  },
  radius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: '0 0 #0000',
  },
  transitions: {
    fast: '150ms ease',
    normal: '250ms ease',
    slow: '350ms ease',
    ease: {
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  breakpoints: {
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
};

// Dark theme
export const darkTheme: Theme = {
  ...lightTheme,
  name: 'dark',
  mode: 'dark',
  colors: {
    ...lightTheme.colors,
    neutral: {
      50: '#0f172a',
      100: '#1e293b',
      200: '#334155',
      300: '#475569',
      400: '#64748b',
      500: '#94a3b8',
      600: '#cbd5e1',
      700: '#e2e8f0',
      800: '#f1f5f9',
      900: '#f8fafc',
    },
    background: {
      primary: '#0f172a',
      secondary: '#1e293b',
      tertiary: '#334155',
      inverse: '#ffffff',
    },
    surface: {
      primary: '#1e293b',
      secondary: '#334155',
      tertiary: '#475569',
      inverse: '#ffffff',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      tertiary: '#94a3b8',
      inverse: '#0f172a',
      disabled: '#64748b',
    },
    border: {
      primary: '#334155',
      secondary: '#475569',
      tertiary: '#64748b',
      focus: '#6366f1',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.6)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.3)',
    none: '0 0 #0000',
  },
};

// Modern gradient themes
export const gradientThemes = {
  sunset: {
    ...lightTheme,
    name: 'sunset',
    colors: {
      ...lightTheme.colors,
      primary: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
      },
      secondary: {
        50: '#fef7ee',
        100: '#fdedd4',
        200: '#fbd7a9',
        300: '#f8bb72',
        400: '#f5933a',
        500: '#f27121',
        600: '#e35a1c',
        700: '#bc451a',
        800: '#953a1c',
        900: '#78321a',
      },
    },
  },
  ocean: {
    ...lightTheme,
    name: 'ocean',
    colors: {
      ...lightTheme.colors,
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
      secondary: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
      },
    },
  },
  forest: {
    ...lightTheme,
    name: 'forest',
    colors: {
      ...lightTheme.colors,
      primary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
      secondary: {
        50: '#f6f7f6',
        100: '#e3e7e3',
        200: '#c7cfc7',
        300: '#a3b1a3',
        400: '#7a8f7a',
        500: '#5f735f',
        600: '#4a5c4a',
        700: '#3d4a3d',
        800: '#333d33',
        900: '#2b332b',
      },
    },
  },
};

export const defaultThemes = {
  light: lightTheme,
  dark: darkTheme,
  ...gradientThemes,
}; 