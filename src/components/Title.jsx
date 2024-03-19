import { useContext } from 'react'
import { CountdownContext } from '../context/CountdownContext'

const Title = ({ title }) => {
  const { data } = useContext(CountdownContext)

  let color = null
  if (data) color = data.color

  return (
    <h1
      className='text-3xl font-bold text-center mb-6 uppercase'
      style={color && { color: color }}
    >
      {title}
    </h1>
  )
}

export default Title
