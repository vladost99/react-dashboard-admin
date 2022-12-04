import { Box } from '@mui/material'
import Header from 'components/Header'
import GeographyChart from 'components/GeographyChart'
import useColorTheme from 'hooks/useColorTheme'

const Geography = () => {
  const { colors } = useColorTheme();
    
  return (
    <Box m="20px">
        <Header title="Geography Chart" subtitle="Simple Geography Chart" />
        <Box borderRadius="4px"  border={`1px solid ${colors.grey[100]}`} height="75vh">
            <GeographyChart isDashboard={false} />    
        </Box>
    </Box>
  )
}

export default Geography