import { useContext } from 'react'

import { Outlet } from 'react-router-dom'

import { CountdownContext } from './context/CountdownContext'


import image from './assets/bg.jpg'

const App = () => {
  const { data } = useContext(CountdownContext)
  let dataImage = null
  if (data) dataImage = data.image

  return (
    <main
      className='min-h-screen w-full bg-cover bg-center bg-no-repeat flex justify-center items-center'
      style={
        dataImage
          ? { backgroundImage: `url(${dataImage})` }
          : { backgroundImage: `url(${image}` }
      }
    >
      <section className='w-11/12 max-w-3xl bg-main-color text-white rounded-lg p-6 shadow-lg backdrop-blur-md'>
        <Outlet />
      </section>
    </main>
  )
}

export default App
