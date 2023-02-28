import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { createTicket, reset } from '../features/tickets/ticketSlice'

const NewTicket = () => {
  const { user } = useSelector((state) => state.auth)
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.ticket
  )
  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      dispatch(reset())
      navigate('/tickets')
    }
    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTicket({ product, description }))
  }
  return (
    <div>
      <section className=' max-w-md px-6 mx-auto py-4 md:max-w-4xl antialiased'>
        <div className='flex justify-center space-x-2'>
          <h1 className='text-center  w-max text-4xl'>Ticket</h1>
        </div>
        <p className='text-center text-2xl font-bold px-40 indent-2'>
          Please Create a ticket
        </p>
      </section>
      <section className=' justify-center mx-auto py-1 md:max-w-4xl antialiased'>
        <div className=' mx-auto py-9 px-6 mt-8 max-w-md shadow-md rounded-md  bg-slate-100'>
          <form onSubmit={onsubmit} className=' grid grid-cols-1 gap-6'>
            <label className='block'>
              <span className=' text-gray-700'>Customer Name</span>
              <input
                className=' mt-1 w-full block bg-gray-200 rounded-md px-3'
                type='text'
                value={name}
                disabled
              />
            </label>
            <label className='block'>
              <span className=' text-gray-700'>Customer Email</span>
              <input
                className=' mt-1 w-full block bg-gray-200 rounded-md px-3'
                type='text'
                value={email}
                disabled
              />
            </label>
          </form>
          <div className=' mx-auto py-9 px-6 mt-8 max-w-md shadow-md rounded-md  bg-slate-100'>
            <form onSubmit={onSubmit} className='grid grid-cols-1 gap-6'>
              <label className='block'>
                <select
                  name='product'
                  id='product'
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                >
                  <option value='iPhone'>iPhone</option>
                  <option value='MAckbook Pro'>MAckbook Pro</option>
                  <option value='iPad'>iPad</option>
                  <option value='iMac'>iMac</option>
                </select>
                <div>
                  <label
                    htmlFor='
                  '
                  >
                    <textarea
                      id=''
                      cols='40'
                      rows='20'
                      name='description'
                      placeholder='Description'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </label>
                </div>
                <button
                  className=' g-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  onSubmit={onSubmit}
                >
                  Submit
                </button>
              </label>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewTicket
