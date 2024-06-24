import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Navigation from 'components/Navigation'

const Scroll = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: containerRef })

  return (
    <div className="flex flex-col items-center h-screen gap-10 p-40 bg-gray-200">
      <Navigation />
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Scroll
      </h1>
      <div
        className="w-1/2 h-full overflow-y-scroll bg-white"
        ref={containerRef}
      >
        <motion.div
          className="sticky top-0 left-0 right-0 h-1 origin-left bg-red-600"
          style={{ scaleX: scrollYProgress }}
        />
        <motion.div
          key={1}
          className="text-4xl font-bold text-center text-gray-800 origin-right mt-96"
          initial={{ opacity: 0, rotate: 90 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ root: containerRef }}
          transition={{ duration: 1 }}
        >
          HELLO WORLD 1
        </motion.div>
        <motion.div
          key={2}
          className="text-4xl font-bold text-center text-gray-800 origin-left mt-96"
          initial={{ opacity: 0, rotate: 90 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ root: containerRef }}
          transition={{ duration: 1 }}
        >
          HELLO WORLD 2
        </motion.div>
        <motion.div
          key={3}
          className="text-4xl font-bold text-center text-gray-800 origin-right mt-96"
          initial={{ opacity: 0, rotate: 90 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ root: containerRef }}
          transition={{ duration: 1 }}
        >
          HELLO WORLD 3
        </motion.div>
      </div>
    </div>
  )
}

export default Scroll
