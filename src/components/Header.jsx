import { Typography, Box } from "@mui/material"
import useColorTheme from "hooks/useColorTheme"

const Header = ({ title, subtitle }) => {
  const { colors } = useColorTheme();
    
  return (
    <Box mb="30px">
        <Typography 
          variant="h2"
          fontWeight="bold"
          sx={{ mb: '5px'}}
          color={colors.grey[100]}
           >
            {title}
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>{subtitle}</Typography>
    </Box>
  )
}

export default Header