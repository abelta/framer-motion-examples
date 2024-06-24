import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from 'components/Navigation'

const Presence = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="flex flex-col items-center h-screen gap-10 p-40 bg-gray-200">
      <Navigation />
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Presence
      </h1>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-md"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>
      <AnimatePresence>
      {isVisible && (
        <motion.div
          className='w-20 h-20 bg-white rounded-lg'
          animate={{ rotate: 360 }}
          exit={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
        />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Presence
