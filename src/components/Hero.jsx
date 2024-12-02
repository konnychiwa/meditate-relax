import { Canvas } from "@react-three/fiber"
import { useGLTF, Stage, PresentationControls, Loader } from "@react-three/drei"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { penguinImg } from "../utils/index"
import { Suspense } from "react"

function Model(props) {
  const { scene } = useGLTF("models/model.glb")
  return (
    <primitive
      object={scene}
      scale={0.01}
      rotation={[0, Math.PI / 2, 0]}
      {...props}
    />
  )
}

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 0.5 })
  }, [])

  return (
    <>
      <section className="w-full bg-blue-500 relative">
        <div className="h-5/6 w-full flex-center flex-col mt-5">
          <img src={penguinImg} alt="Penguin" width={30} height={30} />
          <p id="hero" className="hero-title">
            Meditate & Relax
          </p>
        </div>
        <div className="w-screen h-[600px] max-sm:hidden overflow-hidden rounded-full">
          <Canvas dpr={[1, 2]} shadows camera={{ fov: 95 }}>
            <PresentationControls
              speed={1.5}
              global
              zoom={0.5}
              polar={[0.3, Math.PI / 4]}
            >
              <Stage environment={"sunset"}>
                <Suspense fallback={<Loader />}>
                  <Model scale={0.01} />
                </Suspense>
              </Stage>
            </PresentationControls>
          </Canvas>
        </div>
      </section>
    </>
  )
}

export default Hero
