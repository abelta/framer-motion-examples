import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from 'components/Navigation'

const Layout = () => {
  const [isMenuHovered, setIsMenuHovered] = useState(false)

  return (
    <div className="flex flex-col items-center h-screen gap-10 p-40 bg-gray-200">
      <Navigation />
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Layout
      </h1>
      <div className="flex flex-row w-[1000px] bg-white h-1/2">
        <motion.div
          className="h-full bg-red-300 border-r-4 border-red-500 cursor-pointer"
          initial={{ width: '100px' }}
          animate={{ width: isMenuHovered ? '500px' : '100px' }}
          onHoverStart={() => setIsMenuHovered(true)}
          onHoverEnd={() => setIsMenuHovered(false)}
        />
        <motion.div
          className="h-full bg-blue-300 border-l-4 border-blue-500"
          initial={{ width: '900px' }}
          animate={{ width: isMenuHovered ? '500px' : '900px' }}
        />
      </div>
    </div>
  )
}

export default Layout
