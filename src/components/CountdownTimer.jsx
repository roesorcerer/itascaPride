import { useEffect, useState } from 'react'

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('June 22, 2025 00:00:00').getTime()
    const now = new Date().getTime()
    const difference = eventDate - now

    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer) // Cleanup interval on component unmount
  }, [])

  return (
    <div className="mb-5 text-center text-xl font-semibold text-primary">
      <div className="flex justify-center space-x-4">
        <div>{timeLeft.days} days</div>
        <div>{timeLeft.hours} hours</div>
        <div>{timeLeft.minutes} minutes</div>
        <div>{timeLeft.seconds} seconds</div>
      </div>
      Until our next Pride!
    </div>
  )
}

export default CountdownTimer
