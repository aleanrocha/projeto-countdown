import { useContext } from 'react'
import { CountdownContext } from '../context/CountdownContext'

const Counter = ({ title, number }) => {
  const { data } = useContext(CountdownContext)

  let color = null
  if (data) color = data.color

  return (
    <div className='flex flex-col items-center gap-2'>
      <p
        className={`text-3xl font-bold bg-bg-num-color p-4 min-w-20 text-center rounded-md max-sm:text-2xl max-sm:min-w-16`}
        style={color && { backgroundColor: color }}
      >
        {number}
      </p>
      <h3 className='font-bold' style={color && { color: color }}>
        {title}
      </h3>
    </div>
  )
}

export default Counter
