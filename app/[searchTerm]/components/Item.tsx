import Image from "next/image"
import Link from "next/link"

type Props = {
    result : Result
}

const Item = ({ result } : Props) => {
  return (
    <article className="p-3 border border-slate-500 max-w-sm">
        {
            result.thumbnail && <figure>
                <Image 
                    alt={result.title}
                    width={100}
                    height={100}
                    src={result.thumbnail?.source}
                    objectFit="cover"
                />
            </figure>
        }
        <h2 className="text-2xl">
            <Link target="_blank" href={`https://en.wikipedia.org/?curid=${result.pageid}`}>
                {result.title}
            </Link>
        </h2>

        <p className="text-slate-400">{result.extract}</p>
    </article>
  )
}

export default Item