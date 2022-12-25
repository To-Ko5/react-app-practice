import { Box, Pagination as PaginationMui } from '@mui/material'
import React from 'react'

const Pagination = () => {
  return (
    <Box m={5}>
      <PaginationMui count={5} variant="outlined" shape="rounded" />
    </Box>
  )
}

export default Pagination
