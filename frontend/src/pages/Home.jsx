import { FaClipboardList, FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className=' max-w-md px-6 mx-auto py-4 md:max-w-4xl antialiased'>
        <div className='flex justify-center space-x-2'>
          {/* <FaHamburger className=' text-blue-700 text-4xl' /> */}
          <h1 className='text-center  w-max text-4xl'>Inventory Management</h1>
        </div>
        <p className='text-center text-2xl font-bold px-40 indent-2'>
          How Can I help you today?
        </p>
      </section>
      <section className=' flex justify-center align-top max-w-md px-6 mx-auto py-4 md:max-w-4xl antialiased space-x-3'>
        <FaHamburger className=' text-blue-700 text-4xl justify-center' />
        <Link to={'/new-item'}>
          <button className='text-center w-50 inline-block py-2 px-12 border-2 border-blue-500 text-blue-500 font-medium leading-tight uppercase text-sm rounded-full hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
            Create New Item
          </button>
        </Link>
      </section>
      <section className=' flex justify-center align-top max-w-md px-6 mx-auto py-4 md:max-w-4xl antialiased space-x-3'>
        <FaClipboardList className=' text-blue-700 text-4xl justify-center' />
        <Link to={'/inventory'}>
          <button className='text-center w-50 inline-block py-2 px-12 border-2 border-blue-500 text-blue-500 font-medium leading-tight uppercase text-sm rounded-full hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
            Start Inventory
          </button>
        </Link>
      </section>
    </>
  )
}

export default Home
