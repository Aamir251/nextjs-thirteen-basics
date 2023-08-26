'use client'

type Props = {
    error : Error,
}

const error = ({ error } : Props) => {
  return (
    <div className="bg-slate-700">
        Failed To get posts
        {error.message}
    </div>
  )
}

export default error