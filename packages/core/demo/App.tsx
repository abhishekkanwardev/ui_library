import React, { useState } from 'react';
import { ThemeProvider, Button, defaultThemes } from '../src/index';
import '../src/components/Button/Button.css';

const customTheme = {
  ...defaultThemes.light,
  name: 'custom',
  colors: {
    ...defaultThemes.light.colors,
    primary: {
      ...defaultThemes.light.colors.primary,
      500: '#ff6b6b', // Custom primary color
      600: '#ff5252',
      700: '#ff3838',
    },
    secondary: {
      ...defaultThemes.light.colors.secondary,
      500: '#4ecdc4', // Custom secondary color
      600: '#45b7aa',
      700: '#3ba192',
    },
  },
  typography: {
    ...defaultThemes.light.typography,
    fontFamily: {
      ...defaultThemes.light.typography.fontFamily,
      primary: 'Poppins, sans-serif',
    },
  },
};

function DemoApp({ onToggleTheme, themeName }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Modern UI Library Demo</h1>
        <Button variant="outlined" onClick={onToggleTheme}>
          Switch to {themeName === 'default' ? 'Custom' : 'Default'} Theme
        </Button>
      </div>

      {/* Variants */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Button Variants</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="contained" color="primary">Contained</Button>
          <Button variant="outlined" color="primary">Outlined</Button>
          <Button variant="text" color="primary">Text</Button>
          <Button variant="ghost" color="primary">Ghost</Button>
          <Button variant="gradient" color="primary">Gradient</Button>
        </div>
      </section>

      {/* Sizes */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Button Sizes</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="contained" size="xs">Extra Small</Button>
          <Button variant="contained" size="sm">Small</Button>
          <Button variant="contained" size="md">Medium</Button>
          <Button variant="contained" size="lg">Large</Button>
          <Button variant="contained" size="xl">Extra Large</Button>
        </div>
      </section>

      {/* Colors */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Button Colors</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="success">Success</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="info">Info</Button>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="outlined" color="success">Success</Button>
          <Button variant="outlined" color="warning">Warning</Button>
          <Button variant="outlined" color="error">Error</Button>
          <Button variant="outlined" color="info">Info</Button>
        </div>
      </section>

      {/* States */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Button States</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button loading color="primary">Loading</Button>
          <Button disabled color="primary">Disabled</Button>
          <Button fullWidth color="primary">Full Width Button</Button>
        </div>
      </section>

      {/* Custom sx prop */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Custom Styling with sx prop</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button 
            sx={{ 
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
              border: 'none',
              borderRadius: '25px',
              padding: '12px 24px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              color: 'white',
            }}
          >
            Custom Gradient
          </Button>
          <Button 
            sx={{ 
              background: 'transparent',
              border: '2px solid #ff6b6b',
              color: '#ff6b6b',
              borderRadius: '0',
            }}
          >
            Custom Border
          </Button>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [themeName, setThemeName] = useState('default');
  const theme = themeName === 'default' ? defaultThemes.light : customTheme;

  const handleToggleTheme = () => {
    setThemeName((prev) => (prev === 'default' ? 'custom' : 'default'));
  };

  return (
    <ThemeProvider theme={theme}>
      <DemoApp onToggleTheme={handleToggleTheme} themeName={themeName} />
    </ThemeProvider>
  );
} 