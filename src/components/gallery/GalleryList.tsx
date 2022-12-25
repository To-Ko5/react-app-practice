import Masonry from '@mui/lab/Masonry'
import { Box, Pagination } from '@mui/material'
import { FC, useState } from 'react'
import ReactPaginate from 'react-paginate'
import GalleryImage from 'src/components/gallery/GalleryImage'
import { Gallery } from 'src/types/gallery'

type Props = {
  galleries: Gallery[]
}
const GalleryList: FC<Props> = (props) => {
  const { galleries } = props
  const [galleriesOffset, setGalleriesOffset] = useState(0)
  const [page, setPage] = useState(1)
  const showGalleryCount = 6
  const endOffset = galleriesOffset + showGalleryCount
  const currentGalleries = galleries.slice(galleriesOffset, endOffset)
  const pageCount = Math.ceil(galleries.length / showGalleryCount)

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * showGalleryCount) % galleries.length
    setGalleriesOffset(newOffset)
  }

  const handlePageClickMui = (page: number) => {
    const beforePage = page - 1
    setPage(page)
    const newOffset = (beforePage * showGalleryCount) % galleries.length
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
      <Pagination
        count={pageCount}
        page={page}
        onChange={(e, page) => handlePageClickMui(page)}
      />
    </>
  )
}

export default GalleryList
