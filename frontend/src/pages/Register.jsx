import { useState } from 'react'

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

  return (
    <>
      <section>
        <h1>Register</h1>
        <p>Please Create an Account</p>
      </section>
      <section className=' justify-center mx-auto py-10 md:max-w-4xl antialiased'>
        <div className=' mx-auto py-9 px-6 mt-8 max-w-md shadow-md rounded-md  bg-slate-100'>
          <form className=' grid grid-cols-1 gap-6'>
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
              />
            </label>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register
