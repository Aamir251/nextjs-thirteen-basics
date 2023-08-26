'use client';

type Prop = {
    error : Error
}

const error = ({ error } : Prop) => {
  return (
    <div>{error.message}</div>
  )
}

export default error