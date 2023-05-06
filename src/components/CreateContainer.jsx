import React, { useState } from 'react'

const CreateContainer = () => {

  const [title, setitle] = useState('')
  const [calories, setCalories] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('null')
  const [field, setField] = useState(false)

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[90%] md:w-[75%] border border-gray-200 rounded-lg p-4 flex flex-col justify-center items-center'>

      </div>
    </div>
  )
}

export default CreateContainer