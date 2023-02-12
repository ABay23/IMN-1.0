import { useState } from 'react'
import { toast } from 'react-toastify'
import { HiUser } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onsubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  return (
    <>
      <section className='  px-6 mx-auto py-4 md:max-w-4xl antialiased'>
        <div className='flex justify-center space-x-2'>
          <HiUser className=' text-blue-700 text-4xl' />
          <h1 className=' text-center  w-max text-4xl'>LOGIN</h1>
        </div>
        <p className=' text-center text-2xl font-bold'>
          Please Login to your Account
        </p>
      </section>
      <section className=' justify-center mx-auto py-1 md:max-w-4xl antialiased'>
        <div className=' mx-auto py-9 px-6 mt-8 max-w-md shadow-md rounded-md  bg-slate-100'>
          <form onSubmit={onsubmit} className=' grid grid-cols-1 gap-6'>
            <label className='block'>
              <span className=' text-gray-700'>Email</span>
              <input
                className=' mt-1 w-full block bg-gray-200 rounded-md px-3'
                type='email'
                id='email'
                value={email}
                name='email'
                onChange={onChange}
                placeholder=' Enter your Email'
                required
              />
            </label>
            <label className='block'>
              <span className=' text-gray-700'>Password</span>
              <input
                className=' mt-1 w-full block bg-gray-200 rounded-md px-3'
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={onChange}
                placeholder=' Enter your Password'
                required
              />
            </label>
            <button className=' inline-block py-2 px-2 border-2 border-blue-500 text-blue-500 font-medium leading-tight uppercase text-sm rounded-full hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
