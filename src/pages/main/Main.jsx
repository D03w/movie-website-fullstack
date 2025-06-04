import React from 'react'
import Carousel from '../../components/Carousel'
import Genres from '../../components/Genres'
import Movies from '../../components/Movies'
import Series from '../../components/Series'

export default function Main() {
  return (
    <div>
        <Carousel/>
        <Genres/>
        <Movies/>
        <Series/>
    </div>
  )
}
