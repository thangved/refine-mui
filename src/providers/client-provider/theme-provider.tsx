"use client";

import "@fontsource-variable/montserrat";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import React from "react";

const theme = createTheme({
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
    MuiDialog: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        paper: {
          borderRadius: 10,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: "end !important",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(6px)",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#5188ff",
    },
  },
  typography: {
    button: {
      textTransform: "capitalize",
    },
    fontFamily: "'Montserrat Variable', sans-serif",
  },
});

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
