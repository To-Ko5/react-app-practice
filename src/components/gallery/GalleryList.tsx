import { Box } from '@mui/material'
import React, { FC } from 'react'
import GalleryImage from 'src/components/gallery/GalleryImage'
import { Gallery } from 'src/types/gallery'
import Masonry from '@mui/lab/Masonry'

type Props = {
  galleries: Gallery[]
}
const GalleryList: FC<Props> = (props) => {
  const { galleries } = props
  return (
    <>
      <Box sx={{ width: 500, minHeight: 829, margin: '0 auto' }}>
        <Masonry columns={3} spacing={2}>
          {galleries.map((gallery) => {
            console.log(gallery)
            return <GalleryImage key={gallery.id} gallery={gallery} />
          })}
        </Masonry>
      </Box>
    </>
  )
}

export default GalleryList
