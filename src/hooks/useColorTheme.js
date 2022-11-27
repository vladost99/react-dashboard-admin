import { useTheme } from '@mui/material'
import { tokens, ColorModeContext } from 'theme'
import { useContext } from 'react'

export default function () {
    const theme  = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return { theme, colors, colorMode };
}