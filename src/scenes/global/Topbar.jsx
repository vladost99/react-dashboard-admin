import { Box, IconButton, InputBase } from '@mui/material'
import useColorTheme from 'hooks/useColorTheme'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'





const Topbar = () => {
  const { colors, theme, colorMode } = useColorTheme();
  return (
    <Box display='flex' justifyContent="space-between" p={2}>

        <Box display='flex' backgroundColor={colors.primary[400]} borderRadious="3px">
          <InputBase sx={{ml: 2, flex: 1}} placeholder='Search' />
          <IconButton type='button' sx={{p: 1}}>
              <SearchIcon/>
          </IconButton>
        </Box>

        <Box display='flex'>
           <IconButton onClick={colorMode.toggleColorMode}>
              {
              theme.palette.mode === 'dark' ? (
              <DarkModeOutlinedIcon/>
              ) :
               (
                <LightModeOutlinedIcon/>
                )
               }   
           </IconButton>
           <IconButton>
              <NotificationsOutlinedIcon/>
           </IconButton>
           <IconButton>
              <SettingsOutlinedIcon/>
           </IconButton>
           <IconButton>
             <PersonOutlinedIcon/>
           </IconButton>
        </Box>
    </Box>
  )
}

export default Topbar