import { Box } from '@mui/material'
import { FC } from 'react'
import { Gallery } from 'src/types/gallery'

type Props = {
  gallery: Gallery
}

const GalleryImage: FC<Props> = ({ gallery }) => {
  return (
    <div>
      <Box>{gallery.id}</Box>
      <img
        src={`${gallery.thumbnailUrl}?w=162&auto=format`}
        srcSet={`${gallery.thumbnailUrl}?w=162&auto=format&dpr=2 2x`}
        alt={gallery.title}
        loading="lazy"
        style={{
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          display: 'block',
          width: '100%'
        }}
      />
    </div>
  )
}

export default GalleryImage
