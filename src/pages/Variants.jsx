import { motion } from 'framer-motion'
import Navigation from 'components/Navigation'

const Variants = () => {
  const variants = {
    active: {
      borderColor: '#FF0000',
    },
    inactive: {
      borderColor: '#FFFFFF',
    },
  }

  return (
    <div className="flex flex-col items-center h-screen gap-10 p-40 bg-gray-200">
      <Navigation />
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Variants
      </h1>
      <motion.div
        className='w-20 h-20 bg-white border-4 rounded-lg'
        variants={variants}
        initial='inactive'
        animate='active'
        transition={{ duration: 2 }}
      />
    </div>
  )
}

export default Variants
