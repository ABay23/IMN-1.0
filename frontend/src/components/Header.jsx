import { GiHamburgerMenu } from 'react-icons/gi'
import { FaHome, FaClipboardList, FaSignOutAlt } from 'react-icons/fa'
import { RiLoginCircleFill } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <>
      <nav className='bg-white border-gray-200 px-0 sm:px-4 py-4 dark:bg-blue-800 relative w-full flex justify-between'>
        <div className='container flex justify-between mx-3'>
          <div>
            <label></label>
            <GiHamburgerMenu className='h-5 w-5 text-gray-200 justify-start' />
          </div>
          <ul className='flex justify-end space-x-7 w-1/3 '>
            {user ? (
              <li>
                <button
                  onClick={onLogout}
                  className=' h-6 w-6 text-gray-200 hover:text-yellow-300 hover:scale-125'
                >
                  <FaSignOutAlt className=' h-6 w-6 text-gray-200 hover:text-yellow-300 hover:scale-125' />
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className=' items-center'>
                  <Link
                    to='/'
                    className=' h-6 w-6 text-gray-200 hover:text-yellow-300 hover:scale-125'
                  >
                    <FaHome className=' align-middle h-6 w-6 text-gray-200 hover:text-yellow-300 hover:scale-125' />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/register'>
                    <FaClipboardList className=' h-6 w-6 text-gray-200 hover:text-yellow-300 hover:scale-125' />
                  </Link>
                </li>
                <li>
                  <Link to='/login'>
                    <RiLoginCircleFill className=' h-6 w-6 text-gray-200 hover:text-yellow-300 hover:scale-125' />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Header
