import React, { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"

const SlideCarousel = () => {
  const slides = [
    {
      url: "/assets/images/mindfulness.webp",
    },
    {
      url: "/assets/images/focused.webp",
    },
    {
      url: "assets/images/mantra.webp",
    },

    {
      url: "assets/images/visualization.webp",
    },
    {
      url: "assets/images/movement.webp",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="max-[1400px] h-[500px] lg:h-[800px] sm:h-[700px] w-full m-auto pb-16 px-4 relative group">
      <div
        fetchpriority="low"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="arrow left-5">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="arrow right-5">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlideCarousel
