import { createTheme, MantineProvider, px } from '@mantine/core';

const theme = createTheme({

  colors: {
    // Add your color
    deepBlue: [
      '#eef3ff',
      '#dce4f5',
      '#b9c7e2',
      '#94a8d0',
      '#748dc1',
      '#5f7cb8',
      '#5474b4',
      '#44639f',
      '#39588f',
      '#2d4b81',
    ],
    // or replace default theme color
    blue: [
      '#eef3ff',
      '#dee2f2',
      '#bdc2de',
      '#98a0ca',
      '#7a84ba',
      '#6672b0',
      '#5c68ac',
      '#4c5897',
      '#424e88',
      '#364379',
    ],
  },

  spacing: {
    xl: '200px',
    lg: '150px',
    md: '100px',
    sm: '50px',
    xs: '25px',
  },

  radius: {
    xl: '200px',
    lg: '150px',
    md: '100px',
    sm: '50px',
    xs: '25px',
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  other: {
    container: {
      maxWidth: '1600px',
      padding: '15px',
    },

    headings: {
      fontFamily: 'Roboto, sans-serif',
      sizes: {
        h1: { fontSize: '36px' },
      },
      link: {
        display: 'block',
        lineHeight: '1',
        padding: '8px 12px',
        borderRadius: 'var(--mantine-radius-sm)',
        textDecoration: 'none',
        color: 'light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))',
        fontSize: 'var(--mantine-font-size-sm)',
        fontWeight: 500,
        '@mixin hover': {
          backgroundColor: 'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))',
        }
      },
      linkLabel: {
        color: 'light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))',
        fontSize: 'var(--mantine-font-size-sm)',
        fontWeight: 500,
      },
      header: {
        height: '60px',
        borderBottom: '1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-6))',
        backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))',
      },
      inner: {
        height: '60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
  },
});

export default theme;