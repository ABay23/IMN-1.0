import { GiHamburgerMenu } from 'react-icons/gi'
import { FaHome, FaClipboardList } from 'react-icons/fa'
import { RiLoginCircleFill } from 'react-icons/ri'

const Header = () => {
  return (
    <>
      <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-blue-800'>
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
          <div className=' flex-initial '>
            <GiHamburgerMenu />
          </div>
          <div className=' flex justify-end'>
            <FaHome />
            <RiLoginCircleFill />
            <FaClipboardList />
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header
