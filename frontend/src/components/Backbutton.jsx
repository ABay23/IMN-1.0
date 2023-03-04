import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Backbutton = ({ url }) => {
  return (
    <>
      <Link to={url} className='h-5 w-5 text-gray-200 justify-start'>
        <FaArrowAltCircleLeft />
      </Link>
    </>
  )
}

export default Backbutton
