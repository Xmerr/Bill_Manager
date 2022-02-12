import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

import blue from '@mui/material/colors/blue';
import purple from '@mui/material/colors/purple';

export const Themer = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                    primary: purple,
                    secondary: blue,
                    text: {
                        primary: '#fff',
                        secondary: blue[500],
                    },
                },
            }),
        [prefersDarkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default Themer;
