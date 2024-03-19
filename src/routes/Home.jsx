import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CountdownContext } from '../context/CountdownContext'

const Home = () => {
  const [title, setTitle] = useState()
  const [date, setDate] = useState()
  const [image, setImage] = useState()
  const [color, setColor] = useState()
  const { setData } = useContext(CountdownContext)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      title,
      date,
      image,
      color,
    }

    setData(data)
    navigate('/projeto-countdown/contador')
  }

  return (
    <>
      <h1 className='text-2xl font-bold text-center mb-6 uppercase'>Crie sua contagem regressiva!</h1>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-md flex flex-col m-auto gap-4 text-white p-4'
      >
        <label htmlFor='title' className='flex flex-col gap-2 font-bold'>
          <span>Título:</span>
          <input
            id='title'
            type='text'
            name='title'
            placeholder='Digite o título do evento'
            required
            onChange={(e) => setTitle(e.target.value)}
            className='p-2 rounded-sm border-none  text-black'
          />
        </label>
        <label htmlFor='date' className='flex flex-col gap-2 font-bold'>
          <span>Data do evento:</span>
          <input
            id='date'
            type='date'
            name='date'
            required
            onChange={(e) => setDate(e.target.value)}
            className='p-2 rounded-sm border-none  text-black'
          />
        </label>
        <label htmlFor='image' className='flex flex-col gap-2 font-bold'>
          <span>Imagem:</span>
          <input
            id='image'
            type='text'
            name='image'
            placeholder='Insira a URL da imagem - (opcional)'
            onChange={(e) => setImage(e.target.value)}
            className='p-2 rounded-sm border-none  text-black'
          />
        </label>
        <label htmlFor='color' className='flex flex-col gap-2 font-bold'>
          <span>Cor:</span>
          <input
            id='color'
            type='color'
            name='color'
            onChange={(e) => setColor(e.target.value)}
            className='p-0.5 rounded-sm border-none w-20  text-black'
          />
        </label>
        <input
          type='submit'
          value='Criar contagem'
          className='bg-slate-100 text-black font-bold cursor-pointer p-2 mt-2 rounded-sm border-none'
        />
      </form>
    </>
  )
}

export default Home
