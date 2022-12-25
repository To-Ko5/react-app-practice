import { Box } from '@mui/material'
import React, { FC, useState } from 'react'
import GalleryImage from 'src/components/gallery/GalleryImage'
import { Gallery } from 'src/types/gallery'
import Masonry from '@mui/lab/Masonry'
import ReactPaginate from 'react-paginate'

type Props = {
  galleries: Gallery[]
}
const GalleryList: FC<Props> = (props) => {
  const { galleries } = props
  const [galleriesOffset, setGalleriesOffset] = useState(0)
  const showGalleryCount = 6
  const endOffset = galleriesOffset + showGalleryCount
  const currentGalleries = galleries.slice(galleriesOffset, endOffset)
  const pageCount = Math.ceil(galleries.length / showGalleryCount)

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * showGalleryCount) % galleries.length
    setGalleriesOffset(newOffset)
  }

  return (
    <>
      <Box sx={{ width: 500, margin: '0 auto' }}>
        <Masonry columns={3} spacing={2}>
          {currentGalleries.map((gallery) => {
            return <GalleryImage key={gallery.id} gallery={gallery} />
          })}
        </Masonry>
      </Box>
      <ReactPaginate pageCount={pageCount} onPageChange={handlePageClick} />
    </>
  )
}

export default GalleryList
