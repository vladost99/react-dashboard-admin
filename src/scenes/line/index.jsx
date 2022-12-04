import Header from "components/Header"
import LineChart from "components/LineChart"
import { Box } from '@mui/material'

const Line = () => {
  return (
    <Box m="20px">
        <Header title="Pie Chart" subtitle="Simple Pie Chart" />
        <Box height="75vh">
            <LineChart isDashboard={false} />    
        </Box>
    </Box>
  )
}

export default Line