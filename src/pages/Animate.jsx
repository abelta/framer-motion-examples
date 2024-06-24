import Navigation from 'components/Navigation'
import { motion } from 'framer-motion'

const Animate = () => {
  return (
    <div className="flex flex-col items-center h-screen gap-10 p-40 bg-gray-200">
      <Navigation />
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Animate
      </h1>
      <motion.div
        className='w-20 h-20 bg-white rounded-lg'
        animate={{ x: [100, -100, 100] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className='w-20 h-20 bg-white rounded-lg'
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className='w-20 h-20 bg-white rounded-lg'
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className='w-20 h-20 bg-white rounded-lg'
        animate={{ skewX: [0, 60, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  )
}

export default Animate
