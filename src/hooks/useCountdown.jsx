import { useState } from 'react'

export const useCountdown = (date) => {
  const [second, setSecond] = useState()
  const [minute, setMinute] = useState()
  const [hour, setHour] = useState()
  const [day, setDay] = useState()

  const countDown = () => {
    const countDate = new Date(date).getTime()
    const now = new Date().getTime()

    const interval = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    setDay(Math.floor(interval / day))
    setHour(Math.floor((interval % day) / hour))
    setMinute(Math.floor((interval % hour) / minute))
    setSecond(Math.floor((interval % minute) / second))
  }
  setInterval(countDown, 1000)
  return [day, hour, minute, second]
}
