import { useState } from 'react'
import styles from './carousel.module.scss'


export default function Brands() {

  const [carousel, setCarousel] = useState([2, 3, 4])

  function slide(e) {
    const value = e.target.alt;

    const newCarousel = carousel.map((position) => (value === "right" ? (position === 4 ? position = 2 : position + 1) : (position === 2 ? position = 4 : position - 1)))
    setCarousel(newCarousel)
  }

  const carouselImages = [
    {
      index: 0,
      imgSrc: "/carousel/airbus-logo.svg",
      column: carousel[0]
    },
    {
      index: 1,
      imgSrc: "/carousel/gkn-logo.svg",
      column: carousel[1]
    },
    {
      index: 2,
      imgSrc: "/carousel/rollsr-logo.svg",
      column: carousel[2]
    }
  ]


    return (

  <div className={styles.carousel}>
    <img src="/left-arrow.svg" onClick={slide}/>
    {carouselImages.map((item, index) => (
      <div key={index} className={styles.carouselBox} style={{gridColumn: item.column}}>
        <img style={item.column === 3 ? {opacity: "1"} : {opacity: "0.2"}} key={index} src={item.imgSrc} alt="brand" />

      </div>
    )
    )}
    <img alt="right" src="/right-arrow.svg" onClick={slide}/>

  </div>

    )
}
