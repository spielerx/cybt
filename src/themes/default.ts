import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
    h2: {
      fontSize: '3.5rem',
      lineHeight: '4rem',
      letterSpacing: '-0.03125rem;',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          scrollBehavior: 'smooth',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
          height: '100%',
          overflowY: 'scroll',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        InputLabelProps: {
          shrink: true,
        },
      },
      styleOverrides: {
        root: ({ theme }) => ({
          legend: {
            span: {
              display: 'none',
            },
          },
          label: {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            letterSpacing: '0.01563rem',
            padding: '0 1rem',

            '&.Mui-focused': {
              color: theme.palette.primary.light,
            },
          },
          input: {
            height: '0.9375em',
          },
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& > .MuiInputLabel-root': {
            position: 'unset',
            transform: 'unset',
          },
          '& fieldset': {
            top: 0,
          },
          '& label + div fieldset': {
            top: -5,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: ({ ownerState }) => ({
          textTransform: 'none',
          minWidth: 'unset',
          boxShadow: 'none',
          ...(ownerState.variant === 'text' &&
            ownerState.color === 'primary' && {
              color: theme.palette.text.secondary,
              '&:hover': {
                backgroundColor: 'rgba(77, 77, 77, 0.08)',
              },
            }),
          ...(ownerState.variant === 'text' && {
            padding: '2px 8.5px',
          }),
          ...(ownerState.size === 'small' && {
            fontSize: '0.875rem',
            padding: '0 4px 2px',
            letterSpacing: '0.0063rem',
          }),
          ...(ownerState.size === 'medium' && {
            fontSize: '1rem',
            letterSpacing: '0.00938rem',
          }),
        }),
      },
    },
  },
  palette: {
    text: {
      primary: '#1C1B1F',
      secondary: '#4D4D4D',
    },
    primary: {
      light: '#46416D',
      main: '#BAA182',
      contrastText: '#2A2118',
    },
    secondary: {
      main: '#19857b', // Redefine
    },
    error: {
      main: '#ff0000', // Redefine
    },
    background: {
      default: '#F9F9FA',
    },
  },
});

export default theme;
