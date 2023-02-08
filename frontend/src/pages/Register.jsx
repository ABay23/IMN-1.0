import { useState } from 'react'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  return (
    <>
      <section>
        <h1>Register</h1>
        <p>Please Create an Account</p>
      </section>
    </>
  )
}

export default Register
