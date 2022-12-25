import { Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import GalleryList from 'src/components/gallery/GalleryList'
import { Gallery as GalleryTypes } from 'src/types/gallery'
import Pagination from 'src/components/gallery/Pagination'

const Gallery = () => {
  const [galleries, setGalleries] = useState<GalleryTypes[]>([])

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/albums/1/photos'
    const getGalleries = async () => {
      const response = await fetch(url).then((res) => res.json())
      if (response.length) {
        setGalleries(response)
      }
    }
    getGalleries()
  }, [])

  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h3">
        Gallery
      </Typography>
      <GalleryList galleries={galleries} />
      <Pagination />
    </Container>
  )
}

export default Gallery
