import { motion, useAnimate } from 'framer-motion'
import Navigation from 'components/Navigation'

const Events = () => {
  const [scope, animate] = useAnimate()

  return (
    <div className="flex flex-col items-center h-screen gap-10 p-40 bg-gray-200">
      <Navigation />
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Events
      </h1>
      <motion.div
        className="w-20 h-20 bg-white rounded-lg cursor-pointer"
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.5 }}
      />
      <div className="flex justify-center w-full gap-10">
        <button
          className="w-10"
          onClick={() => animate(
            scope.current,
            {
              x: -100,
              backgroundColor: '#00FF00',
            },
            { duration: 2 },
          )}
        >
          LEFT
        </button>
        <button
          className="w-10"
          onClick={() => animate(
            scope.current,
            {
              x: 100,
              backgroundColor: '#0000FF',
            },
            { duration: 2 },
          )}
        >
          RIGHT
        </button>
      </div>
      <motion.div
        className='w-20 h-20 bg-white rounded-lg cursor-pointer'
        ref={scope}
      />

    </div>
  )
}

export default Events
