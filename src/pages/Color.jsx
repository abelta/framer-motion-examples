import { motion } from 'framer-motion'
import Navigation from 'components/Navigation'

const Colors = () => {
  return (
    <div className="flex flex-col items-center h-screen gap-10 p-40 bg-gray-200">
      <Navigation />
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Colors
      </h1>
      <motion.div
        className='w-20 h-20 rounded-lg'
        animate={{ backgroundColor: ['#FF0000', '#00FF00', '#0000FF', '#00FF00', '#FF0000'] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  )
}

export default Colors
