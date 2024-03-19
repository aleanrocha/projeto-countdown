import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import Title from '../components/Title'
import Counter from '../components/Counter'


import { useCountdown } from '../hooks/useCountdown'
import { CountdownContext } from '../context/CountdownContext'

const Countdown = () => {
  const { data } = useContext(CountdownContext)

  if (!data) {
    return <Navigate to={'/projeto-countdown'} replace={true} />
  }

  const [day, hour, minute, second] = useCountdown(data.date)

  return (
    <>
      <Title title={data.title} />
      <div className='flex justify-center items-center gap-6 min-h-44 max-sm:gap-2'>
        <Counter title={'Dias'} number={day} />
        <Counter title={'Horas'} number={hour} />
        <Counter title={'Minutos'} number={minute} />
        <Counter title={'Segundos'} number={second} />
      </div>
    </>
  )
}

export default Countdown
