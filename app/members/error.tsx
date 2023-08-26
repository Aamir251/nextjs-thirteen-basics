'use client'

type PropType = {
  error : Error,
  reset : () => void
}
const Error = ({
  error,
  reset
  } : PropType) => {
  return (
    <h2 className="text-2xl">Ooops {error.message}</h2>
  )
}

export default Error