import React from 'react'
import Button from '../Components/Button'

const Home = () => {
  return (
    <>
    <div className='text-5xl font-bold text-red-600 class'>Home
    </div>
<Button classe='bg-red-500' title='Click me' />
<Button  classe='bg-blue-500' title='Dont Click me' />
<Button  classe='bg-green-500' title='go away me' />
<Button  classe='bg-yellow-500' title='Click me' />
    </>
  )
}

export default Home