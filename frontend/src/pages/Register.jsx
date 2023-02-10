import { useState } from 'react'
import { HiUserAdd } from 'react-icons/hi'
import { toast } from 'react-toastify'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onsubmit = (e) => {
    e.preventDefault()

    // if(){}

    if (password !== password2) {
      toast.error('Password do not match')
    }
  }

  return (
    <>
      <section className=' max-w-md px-6 mx-auto py-4 md:max-w-4xl antialiased'>
        <div className='flex justify-center space-x-2'>
          <HiUserAdd className=' text-blue-700 text-4xl' />
          <h1 className='text-center  w-max text-4xl'>REGISTER</h1>
        </div>
        <p className='text-center text-2xl font-bold px-40 indent-2'>
          Please Register a new Account
        </p>
      </section>
      <section className=' justify-center mx-auto py-1 md:max-w-4xl antialiased'>
        <div className=' mx-auto py-9 px-6 mt-8 max-w-md shadow-md rounded-md  bg-slate-100'>
          <form onSubmit={onsubmit} className=' grid grid-cols-1 gap-6'>
            <label className='block'>
              <span className=' text-gray-700'>Name</span>
              <input
                className=' mt-1 w-full block bg-gray-200 rounded-md px-3'
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={onChange}
                placeholder=' Enter your Name'
                required
              />
            </label>
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
            <label className='block'>
              <span className=' text-gray-700'>Confirm Password</span>
              <input
                className=' mt-1 w-full block bg-gray-200 rounded-md px-3'
                type='password'
                name='password2'
                id='password2'
                value={password2}
                onChange={onChange}
                placeholder=' Confirm your Password'
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

export default Register
