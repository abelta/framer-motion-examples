import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full p-6 bg-blue-500">
      <ul className="flex justify-between">
        <li key="animate">
          <Link to="/animate" className="text-xl text-white hover:text-gray-200">Animate</Link>
        </li>
        <li key="presence">
          <Link to="/presence" className="text-xl text-white hover:text-gray-200">Presence</Link>
        </li>
        <li key="color">
          <Link to="/color" className="text-xl text-white hover:text-gray-200">Color</Link>
        </li>
        <li key="variants">
          <Link to="/variants" className="text-xl text-white hover:text-gray-200">Variants</Link>
        </li>
        <li key="events">
          <Link to="/events" className="text-xl text-white hover:text-gray-200">Events</Link>
        </li>
        <li key="layout">
          <Link to="/layout" className="text-xl text-white hover:text-gray-200">Layout</Link>
        </li>
        <li key="scroll">
          <Link to="/scroll" className="text-xl text-white hover:text-gray-200">Scroll</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
