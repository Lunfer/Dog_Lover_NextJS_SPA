import { createTheme, responsiveFontSizes } from "@mui/material";

export const Theme = createTheme({
  shape: {
    borderRadius: 30,
  },
  typography: { fontFamily: ["Roboto"] },
});
export const theme = responsiveFontSizes(Theme);
