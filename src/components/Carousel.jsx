import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SlideCarousel from "./SlideCarousel"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Carousel = () => {
  useGSAP(() => {
    gsap.to("#techniques", {
      scrollTrigger: "#techniques",
      y: 0,
      opacity: 1,
      scrub: 1,
      delay: 0.2,
    })
  }, [])

  return (
    <section className="w-screen overflow-hidden common-padding bg-blue-500">
      <div className="screen-max-width">
        <div className="mt-16 mb-12 w-full md-flex items-end justify-between">
          <h1 id="techniques" className="section-heading">
            Techniques
          </h1>
        </div>

        <SlideCarousel />
      </div>
    </section>
  )
}

export default Carousel
