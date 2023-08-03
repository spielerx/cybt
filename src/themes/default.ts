import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
    h2: {
      fontSize: '3.5rem',
      lineHeight: '1.13',
      letterSpacing: '-0.052rem',
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
        root: {
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
          },
          '.MuiInputBase-adornedEnd': {
            paddingRight: '1rem',
          },
          'p.Mui-error': {
            margin: '3px 0',
            letterSpacing: '0.03rem',
          },
          '& + .MuiFormControl-root p.Mui-error': {
            marginBottom: '9px',
          },
          '.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
            borderWidth: 1,
          },
          input: {
            height: '0.9375em',
            padding: '1.03rem 1.0625rem',
            letterSpacing: '0.03rem',
          },
        },
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
          borderRadius: '0.25rem',
          ...(ownerState.variant === 'text' &&
            ownerState.color === 'primary' && {
              color: theme.palette.text.secondary,
              '&:hover': {
                backgroundColor: 'rgba(77, 77, 77, 0.08)',
              },
            }),
          ...(ownerState.variant === 'contained' && {
            '&:hover': {
              boxShadow: '0px 1px 3px 1px rgba(28, 27, 31, 0.15), 0px 1px 2px 0px rgba(28, 27, 31, 0.30)',
            },
          }),
          ...(ownerState.variant === 'text' && {
            padding: '0.125rem 0.531rem',
          }),
          ...(ownerState.size === 'small' && {
            fontSize: '0.875rem',
            padding: '0 0.25rem 0.125rem',
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
      main: '#46416D',
      contrastText: '#2A2118',
    },
    secondary: {
      main: '#BAA182',
      dark: '#BAA182',
    },
    error: {
      main: '#BA1A1A',
    },
    background: {
      default: '#F9F9FA',
    },
  },
});

export default responsiveFontSizes(theme);
